import { mo } from "./mo.js";
import { qi } from "./qi.js";
let __wakaru_te_cache;
export function te() {
    if (__wakaru_te_cache) {
        return __wakaru_te_cache;
    }
    const e = {};
    __wakaru_te_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = undefined;
    let t = mo();
    let r = qi();
    const s = mo();
    Object.defineProperty(e, "_", {
        enumerable: true,
        get: function() {
            return s._;
        }
    });
    Object.defineProperty(e, "str", {
        enumerable: true,
        get: function() {
            return s.str;
        }
    });
    Object.defineProperty(e, "strConcat", {
        enumerable: true,
        get: function() {
            return s.strConcat;
        }
    });
    Object.defineProperty(e, "nil", {
        enumerable: true,
        get: function() {
            return s.nil;
        }
    });
    Object.defineProperty(e, "getProperty", {
        enumerable: true,
        get: function() {
            return s.getProperty;
        }
    });
    Object.defineProperty(e, "stringify", {
        enumerable: true,
        get: function() {
            return s.stringify;
        }
    });
    Object.defineProperty(e, "regexpCode", {
        enumerable: true,
        get: function() {
            return s.regexpCode;
        }
    });
    Object.defineProperty(e, "Name", {
        enumerable: true,
        get: function() {
            return s.Name;
        }
    });
    const a = qi();
    Object.defineProperty(e, "Scope", {
        enumerable: true,
        get: function() {
            return a.Scope;
        }
    });
    Object.defineProperty(e, "ValueScope", {
        enumerable: true,
        get: function() {
            return a.ValueScope;
        }
    });
    Object.defineProperty(e, "ValueScopeName", {
        enumerable: true,
        get: function() {
            return a.ValueScopeName;
        }
    });
    Object.defineProperty(e, "varKinds", {
        enumerable: true,
        get: function() {
            return a.varKinds;
        }
    });
    e.operators = {
        GT: new t._Code(">"),
        GTE: new t._Code(">="),
        LT: new t._Code("<"),
        LTE: new t._Code("<="),
        EQ: new t._Code("==="),
        NEQ: new t._Code("!=="),
        NOT: new t._Code("!"),
        OR: new t._Code("||"),
        AND: new t._Code("&&"),
        ADD: new t._Code("+")
    };
    class n {
        optimizeNodes() {
            return this;
        }
        optimizeNames(z, I) {
            return this;
        }
    }
    class i extends n {
        constructor(z, I, j){
            super();
            this.varKind = z;
            this.name = I;
            this.rhs = j;
        }
        render({ es5, _n }) {
            let j = es5 ? r.varKinds.var : this.varKind;
            let G = this.rhs === undefined ? "" : ` = ${this.rhs}`;
            return `${j} ${this.name}${G};` + _n;
        }
        optimizeNames(z, I) {
            if (!z[this.name.str]) {
                return;
            }
            if (this.rhs) {
                this.rhs = B(this.rhs, z, I);
            }
            return this;
        }
        get names() {
            if (this.rhs instanceof t._CodeOrName) {
                return this.rhs.names;
            }
            return {};
        }
    }
    class l extends n {
        constructor(z, I, j){
            super();
            this.lhs = z;
            this.rhs = I;
            this.sideEffects = j;
        }
        render({ _n }) {
            return `${this.lhs} = ${this.rhs};` + _n;
        }
        optimizeNames(z, I) {
            if (this.lhs instanceof t.Name && !z[this.lhs.str] && !this.sideEffects) {
                return;
            }
            this.rhs = B(this.rhs, z, I);
            return this;
        }
        get names() {
            return W(this.lhs instanceof t.Name ? {} : {
                ...this.lhs.names
            }, this.rhs);
        }
    }
    class c extends l {
        constructor(z, I, j, G){
            super(z, j, G);
            this.op = I;
        }
        render({ _n }) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
        }
    }
    class d extends n {
        constructor(z){
            super();
            this.label = z;
            this.names = {};
        }
        render({ _n }) {
            return `${this.label}:` + _n;
        }
    }
    class m extends n {
        constructor(z){
            super();
            this.label = z;
            this.names = {};
        }
        render({ _n }) {
            return `break${this.label ? ` ${this.label}` : ""};` + _n;
        }
    }
    class _ extends n {
        constructor(z){
            super();
            this.error = z;
        }
        render({ _n }) {
            return `throw ${this.error};` + _n;
        }
        get names() {
            return this.error.names;
        }
    }
    class w extends n {
        constructor(z){
            super();
            this.code = z;
        }
        render({ _n }) {
            return `${this.code};` + _n;
        }
        optimizeNodes() {
            if (`${this.code}`) {
                return this;
            }
        }
        optimizeNames(z, I) {
            this.code = B(this.code, z, I);
            return this;
        }
        get names() {
            if (this.code instanceof t._CodeOrName) {
                return this.code.names;
            }
            return {};
        }
    }
    class P extends n {
        constructor(z = []){
            super();
            this.nodes = z;
        }
        render(z) {
            return this.nodes.reduce((acc, node)=>acc + node.render(z), "");
        }
        optimizeNodes() {
            let { nodes } = this;
            let nodes_length = nodes.length;
            while(nodes_length--){
                let j = nodes[nodes_length].optimizeNodes();
                if (Array.isArray(j)) {
                    nodes.splice(nodes_length, 1, ...j);
                } else if (j) {
                    nodes[nodes_length] = j;
                } else {
                    nodes.splice(nodes_length, 1);
                }
            }
            if (nodes.length > 0) {
                return this;
            }
        }
        optimizeNames(z, I) {
            let { nodes } = this;
            let nodes_length = nodes.length;
            while(nodes_length--){
                let Y = nodes[nodes_length];
                if (Y.optimizeNames(z, I)) {
                    continue;
                }
                se(z, Y.names);
                nodes.splice(nodes_length, 1);
            }
            if (nodes.length > 0) {
                return this;
            }
        }
        get names() {
            return this.nodes.reduce((acc, node)=>F(acc, node.names), {});
        }
    }
    class y extends P {
        render(z) {
            return `{${z._n}${super.render(z)}}${z._n}`;
        }
    }
    class v extends P {
    }
    class p extends y {
    }
    p.kind = "else";
    const h = class z extends y {
        constructor(I, j){
            super(j);
            this.condition = I;
        }
        render(I) {
            let j = `if(${this.condition})` + super.render(I);
            if (this.else) {
                j += `else ${this.else.render(I)}`;
            }
            return j;
        }
        optimizeNodes() {
            super.optimizeNodes();
            let condition = this.condition;
            if (condition === true) {
                return this.nodes;
            }
            let _else = this.else;
            if (_else) {
                let G = _else.optimizeNodes();
                _else = this.else = Array.isArray(G) ? new p(G) : G;
            }
            if (_else) {
                if (condition === false) {
                    if (_else instanceof z) {
                        return _else;
                    }
                    return _else.nodes;
                }
                if (this.nodes.length) {
                    return this;
                }
                return new z(le(condition), _else instanceof z ? [
                    _else
                ] : _else.nodes);
            }
            if (condition === false || !this.nodes.length) {
                return;
            }
            return this;
        }
        optimizeNames(I, j) {
            this.else = this.else?.optimizeNames(I, j);
            if (!(super.optimizeNames(I, j) || this.else)) {
                return;
            }
            this.condition = B(this.condition, I, j);
            return this;
        }
        get names() {
            let I = super.names;
            W(I, this.condition);
            if (this.else) {
                F(I, this.else.names);
            }
            return I;
        }
    };
    h.kind = "if";
    class g extends y {
    }
    g.kind = "for";
    class f extends g {
        constructor(z){
            super();
            this.iteration = z;
        }
        render(z) {
            return `for(${this.iteration})` + super.render(z);
        }
        optimizeNames(z, I) {
            if (!super.optimizeNames(z, I)) {
                return;
            }
            this.iteration = B(this.iteration, z, I);
            return this;
        }
        get names() {
            return F(super.names, this.iteration.names);
        }
    }
    class R extends g {
        constructor(z, I, j, G){
            super();
            this.varKind = z;
            this.name = I;
            this.from = j;
            this.to = G;
        }
        render(z) {
            let I = z.es5 ? r.varKinds.var : this.varKind;
            let { name, from, to } = this;
            return `for(${I} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(z);
        }
        get names() {
            return W(W(super.names, this.from), this.to);
        }
    }
    class C extends g {
        constructor(z, I, j, G){
            super();
            this.loop = z;
            this.varKind = I;
            this.name = j;
            this.iterable = G;
        }
        render(z) {
            return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(z);
        }
        optimizeNames(z, I) {
            if (!super.optimizeNames(z, I)) {
                return;
            }
            this.iterable = B(this.iterable, z, I);
            return this;
        }
        get names() {
            return F(super.names, this.iterable.names);
        }
    }
    class b extends y {
        constructor(z, I, j){
            super();
            this.name = z;
            this.args = I;
            this.async = j;
        }
        render(z) {
            return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(z);
        }
    }
    b.kind = "func";
    class S extends P {
        render(z) {
            return `return ${super.render(z)}`;
        }
    }
    S.kind = "return";
    class k extends y {
        render(z) {
            let I = `try${super.render(z)}`;
            if (this.catch) {
                I += this.catch.render(z);
            }
            if (this.finally) {
                I += this.finally.render(z);
            }
            return I;
        }
        optimizeNodes() {
            super.optimizeNodes();
            this.catch?.optimizeNodes();
            this.finally?.optimizeNodes();
            return this;
        }
        optimizeNames(z, I) {
            super.optimizeNames(z, I);
            this.catch?.optimizeNames(z, I);
            this.finally?.optimizeNames(z, I);
            return this;
        }
        get names() {
            let z = super.names;
            if (this.catch) {
                F(z, this.catch.names);
            }
            if (this.finally) {
                F(z, this.finally.names);
            }
            return z;
        }
    }
    class L extends y {
        constructor(z){
            super();
            this.error = z;
        }
        render(z) {
            return `catch(${this.error})` + super.render(z);
        }
    }
    L.kind = "catch";
    class K extends y {
        render(z) {
            return `finally${super.render(z)}`;
        }
    }
    K.kind = "finally";
    class N {
        constructor(parent, I = {}){
            this._values = {};
            this._blockStarts = [];
            this._constants = {};
            this.opts = {
                ...I,
                _n: I.lines ? `
` : ""
            };
            this._extScope = parent;
            this._scope = new r.Scope({
                parent
            });
            this._nodes = [
                new v
            ];
        }
        toString() {
            return this._root.render(this.opts);
        }
        name(z) {
            return this._scope.name(z);
        }
        scopeName(z) {
            return this._extScope.name(z);
        }
        scopeValue(z, I) {
            let j = this._extScope.value(z, I);
            (this._values[j.prefix] || (this._values[j.prefix] = new Set)).add(j);
            return j;
        }
        getScopeValue(z, I) {
            return this._extScope.getValue(z, I);
        }
        scopeRefs(z) {
            return this._extScope.scopeRefs(z, this._values);
        }
        scopeCode() {
            return this._extScope.scopeCode(this._values);
        }
        _def(z, I, j, G) {
            let Y = this._scope.toName(I);
            if (j !== undefined && G) {
                this._constants[Y.str] = j;
            }
            this._leafNode(new i(z, Y, j));
            return Y;
        }
        const(z, I, j) {
            return this._def(r.varKinds.const, z, I, j);
        }
        let(z, I, j) {
            return this._def(r.varKinds.let, z, I, j);
        }
        var(z, I, j) {
            return this._def(r.varKinds.var, z, I, j);
        }
        assign(z, I, j) {
            return this._leafNode(new l(z, I, j));
        }
        add(z, I) {
            return this._leafNode(new c(z, e.operators.ADD, I));
        }
        code(z) {
            if (typeof z === "function") {
                z();
            } else if (z !== t.nil) {
                this._leafNode(new w(z));
            }
            return this;
        }
        object(...z) {
            let I = [
                "{"
            ];
            for (let [j, G] of z){
                if (I.length > 1) {
                    I.push(",");
                }
                I.push(j);
                if (j !== G || this.opts.es5) {
                    I.push(":");
                    t.addCodeArg(I, G);
                }
            }
            I.push("}");
            return new t._Code(I);
        }
        if(z, I, j) {
            this._blockNode(new h(z));
            if (I && j) {
                this.code(I).else().code(j).endIf();
            } else if (I) {
                this.code(I).endIf();
            } else if (j) {
                throw Error('CodeGen: "else" body without "then" body');
            }
            return this;
        }
        elseIf(z) {
            return this._elseNode(new h(z));
        }
        else() {
            return this._elseNode(new p);
        }
        endIf() {
            return this._endBlockNode(h, p);
        }
        _for(z, I) {
            this._blockNode(z);
            if (I) {
                this.code(I).endFor();
            }
            return this;
        }
        for(z, I) {
            return this._for(new f(z), I);
        }
        forRange(z, I, j, G, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
            let re = this._scope.toName(z);
            return this._for(new R(Y, re, I, j), ()=>G(re));
        }
        forOf(z, I, j, G = r.varKinds.const) {
            let Y = this._scope.toName(z);
            if (this.opts.es5) {
                let re = I instanceof t.Name ? I : this.var("_arr", I);
                return this.forRange("_i", 0, t._`${re}.length`, (Q)=>{
                    this.var(Y, t._`${re}[${Q}]`);
                    j(Y);
                });
            }
            return this._for(new C("of", G, Y, I), ()=>j(Y));
        }
        forIn(z, I, j, G = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
            if (this.opts.ownProperties) {
                return this.forOf(z, t._`Object.keys(${I})`, j);
            }
            let Y = this._scope.toName(z);
            return this._for(new C("in", G, Y, I), ()=>j(Y));
        }
        endFor() {
            return this._endBlockNode(g);
        }
        label(z) {
            return this._leafNode(new d(z));
        }
        break(z) {
            return this._leafNode(new m(z));
        }
        return(z) {
            let I = new S;
            this._blockNode(I);
            this.code(z);
            if (I.nodes.length !== 1) {
                throw Error('CodeGen: "return" should have one node');
            }
            return this._endBlockNode(S);
        }
        try(z, I, j) {
            if (!I && !j) {
                throw Error('CodeGen: "try" without "catch" and "finally"');
            }
            let G = new k;
            this._blockNode(G);
            this.code(z);
            if (I) {
                let Y = this.name("e");
                this._currNode = G.catch = new L(Y);
                I(Y);
            }
            if (j) {
                this._currNode = G.finally = new K;
                this.code(j);
            }
            return this._endBlockNode(L, K);
        }
        throw(z) {
            return this._leafNode(new _(z));
        }
        block(z, I) {
            this._blockStarts.push(this._nodes.length);
            if (z) {
                this.code(z).endBlock(I);
            }
            return this;
        }
        endBlock(z) {
            let I = this._blockStarts.pop();
            if (I === undefined) {
                throw Error("CodeGen: not in self-balancing block");
            }
            let j = this._nodes.length - I;
            if (j < 0 || z !== undefined && j !== z) {
                throw Error(`CodeGen: wrong number of nodes: ${j} vs ${z} expected`);
            }
            this._nodes.length = I;
            return this;
        }
        func(z, I = t.nil, j, G) {
            this._blockNode(new b(z, I, j));
            if (G) {
                this.code(G).endFunc();
            }
            return this;
        }
        endFunc() {
            return this._endBlockNode(b);
        }
        optimize(z = 1) {
            while(z-- > 0){
                this._root.optimizeNodes();
                this._root.optimizeNames(this._root.names, this._constants);
            }
        }
        _leafNode(z) {
            this._currNode.nodes.push(z);
            return this;
        }
        _blockNode(z) {
            this._currNode.nodes.push(z);
            this._nodes.push(z);
        }
        _endBlockNode(z, I) {
            let _currNode = this._currNode;
            if (_currNode instanceof z || I && _currNode instanceof I) {
                this._nodes.pop();
                return this;
            }
            throw Error(`CodeGen: not in block "${I ? `${z.kind}/${I.kind}` : z.kind}"`);
        }
        _elseNode(z) {
            let _currNode = this._currNode;
            if (!(_currNode instanceof h)) {
                throw Error('CodeGen: "else" without "if"');
            }
            this._currNode = _currNode.else = z;
            return this;
        }
        get _root() {
            return this._nodes[0];
        }
        get _currNode() {
            let _nodes = this._nodes;
            return _nodes[_nodes.length - 1];
        }
        set _currNode(z) {
            let _nodes = this._nodes;
            _nodes[_nodes.length - 1] = z;
        }
    }
    e.CodeGen = N;
    function F(z, names) {
        for(let j in names){
            z[j] = (z[j] || 0) + (names[j] || 0);
        }
        return z;
    }
    function W(z, I) {
        if (I instanceof t._CodeOrName) {
            return F(z, I.names);
        }
        return z;
    }
    function B(z, I, j) {
        if (z instanceof t.Name) {
            return G(z);
        }
        if (!Y(z)) {
            return z;
        }
        return new t._Code(z._items.reduce((acc, Q)=>{
            if (Q instanceof t.Name) {
                Q = G(Q);
            }
            if (Q instanceof t._Code) {
                acc.push(...Q._items);
            } else {
                acc.push(Q);
            }
            return acc;
        }, []));
        function G(re) {
            let Q = j[re.str];
            if (Q === undefined || I[re.str] !== 1) {
                return re;
            }
            delete I[re.str];
            return Q;
        }
        function Y(re) {
            return re instanceof t._Code && re._items.some((Q)=>Q instanceof t.Name && I[Q.str] === 1 && j[Q.str] !== undefined);
        }
    }
    function se(z, names) {
        for(let j in names){
            z[j] = (z[j] || 0) - (names[j] || 0);
        }
    }
    function le(z) {
        if (typeof z === "boolean" || typeof z === "number" || z === null) {
            return !z;
        }
        return t._`!${H(z)}`;
    }
    e.not = le;
    let ie = D(e.operators.AND);
    function Se(...z) {
        return z.reduce(ie);
    }
    e.and = Se;
    let ae = D(e.operators.OR);
    function O(...z) {
        return z.reduce(ae);
    }
    e.or = O;
    function D(z) {
        return (I, j)=>{
            if (I === t.nil) {
                return j;
            }
            if (j === t.nil) {
                return I;
            }
            return t._`${H(I)} ${z} ${H(j)}`;
        };
    }
    function H(z) {
        if (z instanceof t.Name) {
            return z;
        }
        return t._`(${z})`;
    }
    return e;
}
