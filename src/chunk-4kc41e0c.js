import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const Lt = C(function(ed, Li) {
    Li.exports = _t;
    _t.CAPTURING_PHASE = 1;
    _t.AT_TARGET = 2;
    _t.BUBBLING_PHASE = 3;
    function _t(e, t) {
        this.type = "";
        this.target = null;
        this.currentTarget = null;
        this.eventPhase = _t.AT_TARGET;
        this.bubbles = false;
        this.cancelable = false;
        this.isTrusted = false;
        this.defaultPrevented = false;
        this.timeStamp = Date.now();
        this._propagationStopped = false;
        this._immediatePropagationStopped = false;
        this._initialized = true;
        this._dispatching = false;
        if (e) {
            this.type = e;
        }
        if (t) {
            for(const r in t){
                this[r] = t[r];
            }
        }
    }
    _t.prototype = Object.create(Object.prototype, {
        constructor: {
            value: _t
        },
        stopPropagation: {
            value: function() {
                this._propagationStopped = true;
            }
        },
        stopImmediatePropagation: {
            value: function() {
                this._propagationStopped = true;
                this._immediatePropagationStopped = true;
            }
        },
        preventDefault: {
            value: function() {
                if (this.cancelable) {
                    this.defaultPrevented = true;
                }
            }
        },
        initEvent: {
            value: function(t, r, a) {
                this._initialized = true;
                if (this._dispatching) {
                    return;
                }
                this._propagationStopped = false;
                this._immediatePropagationStopped = false;
                this.defaultPrevented = false;
                this.isTrusted = false;
                this.target = null;
                this.type = t;
                this.bubbles = r;
                this.cancelable = a;
            }
        }
    });
});
const za = C(function(td, Ri) {
    const Mi = Lt();
    Ri.exports = Ga;
    function Ga() {
        Mi.call(this);
        this.view = null;
        this.detail = 0;
    }
    Ga.prototype = Object.create(Mi.prototype, {
        constructor: {
            value: Ga
        },
        initUIEvent: {
            value: function(e, t, r, a, s) {
                this.initEvent(e, t, r);
                this.view = a;
                this.detail = s;
            }
        }
    });
});
const Xa = C(function(rd, Oi) {
    const Ii = za();
    Oi.exports = Wa;
    function Wa() {
        Ii.call(this);
        this.screenX = this.screenY = this.clientX = this.clientY = 0;
        this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = false;
        this.button = 0;
        this.buttons = 1;
        this.relatedTarget = null;
    }
    Wa.prototype = Object.create(Ii.prototype, {
        constructor: {
            value: Wa
        },
        initMouseEvent: {
            value: function(e, t, r, a, s, c, f, m, p, _, v, ne, se, l, be) {
                this.initEvent(e, t, r, a, s);
                this.screenX = c;
                this.screenY = f;
                this.clientX = m;
                this.clientY = p;
                this.ctrlKey = _;
                this.altKey = v;
                this.shiftKey = ne;
                this.metaKey = se;
                this.button = l;
                switch(l){
                    case 0:
                        this.buttons = 1;
                        break;
                    case 1:
                        this.buttons = 4;
                        break;
                    case 2:
                        this.buttons = 2;
                        break;
                    default:
                        this.buttons = 0;
                        break;
                }
                this.relatedTarget = be;
            }
        },
        getModifierState: {
            value: function(e) {
                switch(e){
                    case "Alt":
                        return this.altKey;
                    case "Control":
                        return this.ctrlKey;
                    case "Shift":
                        return this.shiftKey;
                    case "Meta":
                        return this.metaKey;
                    default:
                        return false;
                }
            }
        }
    });
});
const Wr = C(function(ad, Hi) {
    Hi.exports = zr;
    const INDEX_SIZE_ERR = 1;
    const HIERARCHY_REQUEST_ERR = 3;
    const WRONG_DOCUMENT_ERR = 4;
    const INVALID_CHARACTER_ERR = 5;
    const NO_MODIFICATION_ALLOWED_ERR = 7;
    const NOT_FOUND_ERR = 8;
    const NOT_SUPPORTED_ERR = 9;
    const INVALID_STATE_ERR = 11;
    const SYNTAX_ERR = 12;
    const INVALID_MODIFICATION_ERR = 13;
    const NAMESPACE_ERR = 14;
    const INVALID_ACCESS_ERR = 15;
    const TYPE_MISMATCH_ERR = 17;
    const SECURITY_ERR = 18;
    const NETWORK_ERR = 19;
    const ABORT_ERR = 20;
    const URL_MISMATCH_ERR = 21;
    const QUOTA_EXCEEDED_ERR = 22;
    const TIMEOUT_ERR = 23;
    const INVALID_NODE_TYPE_ERR = 24;
    const DATA_CLONE_ERR = 25;
    var _u = [
        null,
        "INDEX_SIZE_ERR",
        null,
        "HIERARCHY_REQUEST_ERR",
        "WRONG_DOCUMENT_ERR",
        "INVALID_CHARACTER_ERR",
        null,
        "NO_MODIFICATION_ALLOWED_ERR",
        "NOT_FOUND_ERR",
        "NOT_SUPPORTED_ERR",
        "INUSE_ATTRIBUTE_ERR",
        "INVALID_STATE_ERR",
        "SYNTAX_ERR",
        "INVALID_MODIFICATION_ERR",
        "NAMESPACE_ERR",
        "INVALID_ACCESS_ERR",
        null,
        "TYPE_MISMATCH_ERR",
        "SECURITY_ERR",
        "NETWORK_ERR",
        "ABORT_ERR",
        "URL_MISMATCH_ERR",
        "QUOTA_EXCEEDED_ERR",
        "TIMEOUT_ERR",
        "INVALID_NODE_TYPE_ERR",
        "DATA_CLONE_ERR"
    ];
    var vu = [
        null,
        "INDEX_SIZE_ERR (1): the index is not in the allowed range",
        null,
        "HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model",
        "WRONG_DOCUMENT_ERR (4): the object is in the wrong Document, a call to importNode is required",
        "INVALID_CHARACTER_ERR (5): the string contains invalid characters",
        null,
        "NO_MODIFICATION_ALLOWED_ERR (7): the object can not be modified",
        "NOT_FOUND_ERR (8): the object can not be found here",
        "NOT_SUPPORTED_ERR (9): this operation is not supported",
        "INUSE_ATTRIBUTE_ERR (10): setAttributeNode called on owned Attribute",
        "INVALID_STATE_ERR (11): the object is in an invalid state",
        "SYNTAX_ERR (12): the string did not match the expected pattern",
        "INVALID_MODIFICATION_ERR (13): the object can not be modified in this way",
        "NAMESPACE_ERR (14): the operation is not allowed by Namespaces in XML",
        "INVALID_ACCESS_ERR (15): the object does not support the operation or argument",
        null,
        "TYPE_MISMATCH_ERR (17): the type of the object does not match the expected type",
        "SECURITY_ERR (18): the operation is insecure",
        "NETWORK_ERR (19): a network error occurred",
        "ABORT_ERR (20): the user aborted an operation",
        "URL_MISMATCH_ERR (21): the given URL does not match another URL",
        "QUOTA_EXCEEDED_ERR (22): the quota has been exceeded",
        "TIMEOUT_ERR (23): a timeout occurred",
        "INVALID_NODE_TYPE_ERR (24): the supplied node is invalid or has an invalid ancestor for this operation",
        "DATA_CLONE_ERR (25): the object can not be cloned."
    ];
    const qi = {
        INDEX_SIZE_ERR,
        DOMSTRING_SIZE_ERR: 2,
        HIERARCHY_REQUEST_ERR,
        WRONG_DOCUMENT_ERR,
        INVALID_CHARACTER_ERR,
        NO_DATA_ALLOWED_ERR: 6,
        NO_MODIFICATION_ALLOWED_ERR,
        NOT_FOUND_ERR,
        NOT_SUPPORTED_ERR,
        INUSE_ATTRIBUTE_ERR: 10,
        INVALID_STATE_ERR,
        SYNTAX_ERR,
        INVALID_MODIFICATION_ERR,
        NAMESPACE_ERR,
        INVALID_ACCESS_ERR,
        VALIDATION_ERR: 16,
        TYPE_MISMATCH_ERR,
        SECURITY_ERR,
        NETWORK_ERR,
        ABORT_ERR,
        URL_MISMATCH_ERR,
        QUOTA_EXCEEDED_ERR,
        TIMEOUT_ERR,
        INVALID_NODE_TYPE_ERR,
        DATA_CLONE_ERR
    };
    function zr(e) {
        Error.call(this);
        Error.captureStackTrace(this, this.constructor);
        this.code = e;
        this.message = vu[e];
        this.name = _u[e];
    }
    zr.prototype.__proto__ = Error.prototype;
    for(rr in qi){
        Gr = {
            value: qi[rr]
        };
        Object.defineProperty(zr, rr, Gr);
        Object.defineProperty(zr.prototype, rr, Gr);
    }
    var Gr;
    var rr;
});
const Xr = C(function(Tu) {
    Tu.isApiWritable = !globalThis.__domino_frozen__;
});
const ee = C(function(wu) {
    const J = Wr();
    const ae = J;
    const isApiWritable = Xr().isApiWritable;
    wu.NAMESPACE = {
        HTML: "http://www.w3.org/1999/xhtml",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink"
    };
    wu.IndexSizeError = function() {
        throw new J(ae.INDEX_SIZE_ERR);
    };
    wu.HierarchyRequestError = function() {
        throw new J(ae.HIERARCHY_REQUEST_ERR);
    };
    wu.WrongDocumentError = function() {
        throw new J(ae.WRONG_DOCUMENT_ERR);
    };
    wu.InvalidCharacterError = function() {
        throw new J(ae.INVALID_CHARACTER_ERR);
    };
    wu.NoModificationAllowedError = function() {
        throw new J(ae.NO_MODIFICATION_ALLOWED_ERR);
    };
    wu.NotFoundError = function() {
        throw new J(ae.NOT_FOUND_ERR);
    };
    wu.NotSupportedError = function() {
        throw new J(ae.NOT_SUPPORTED_ERR);
    };
    wu.InvalidStateError = function() {
        throw new J(ae.INVALID_STATE_ERR);
    };
    wu.SyntaxError = function() {
        throw new J(ae.SYNTAX_ERR);
    };
    wu.InvalidModificationError = function() {
        throw new J(ae.INVALID_MODIFICATION_ERR);
    };
    wu.NamespaceError = function() {
        throw new J(ae.NAMESPACE_ERR);
    };
    wu.InvalidAccessError = function() {
        throw new J(ae.INVALID_ACCESS_ERR);
    };
    wu.TypeMismatchError = function() {
        throw new J(ae.TYPE_MISMATCH_ERR);
    };
    wu.SecurityError = function() {
        throw new J(ae.SECURITY_ERR);
    };
    wu.NetworkError = function() {
        throw new J(ae.NETWORK_ERR);
    };
    wu.AbortError = function() {
        throw new J(ae.ABORT_ERR);
    };
    wu.UrlMismatchError = function() {
        throw new J(ae.URL_MISMATCH_ERR);
    };
    wu.QuotaExceededError = function() {
        throw new J(ae.QUOTA_EXCEEDED_ERR);
    };
    wu.TimeoutError = function() {
        throw new J(ae.TIMEOUT_ERR);
    };
    wu.InvalidNodeTypeError = function() {
        throw new J(ae.INVALID_NODE_TYPE_ERR);
    };
    wu.DataCloneError = function() {
        throw new J(ae.DATA_CLONE_ERR);
    };
    wu.nyi = function() {
        throw Error("NotYetImplemented");
    };
    wu.shouldOverride = function() {
        throw Error("Abstract function; should be overriding in subclass.");
    };
    wu.assert = function(e, t) {
        if (!e) {
            throw Error(`Assertion failed: ${t || ""}${`
`}${Error().stack}`);
        }
    };
    wu.expose = function(e, t) {
        for(const r in e){
            Object.defineProperty(t.prototype, r, {
                value: e[r],
                writable: isApiWritable
            });
        }
    };
    wu.merge = function(e, t) {
        for(const r in t){
            e[r] = t[r];
        }
    };
    wu.documentOrder = function(e, t) {
        return 3 - (e.compareDocumentPosition(t) & 6);
    };
    wu.toASCIILowerCase = function(e) {
        return e.replace(/[A-Z]+/g, (t)=>t.toLowerCase());
    };
    wu.toASCIIUpperCase = function(e) {
        return e.replace(/[a-z]+/g, (t)=>t.toUpperCase());
    };
});
const Ka = C(function(sd, Bi) {
    const vt = Lt();
    const rl = Xa();
    const al = ee();
    Bi.exports = Fi;
    function Fi() {}
    Fi.prototype = {
        addEventListener: function(t, listener, capture = false) {
            if (!listener) {
                return;
            }
            if (!this._listeners) {
                this._listeners = Object.create(null);
            }
            if (!this._listeners[t]) {
                this._listeners[t] = [];
            }
            const s = this._listeners[t];
            for(let c = 0, f = s.length; c < f; c++){
                const m = s[c];
                if (m.listener === listener && m.capture === capture) {
                    return;
                }
            }
            const p = {
                listener,
                capture
            };
            if (typeof listener === "function") {
                p.f = listener;
            }
            s.push(p);
        },
        removeEventListener: function(t, r, a = false) {
            if (this._listeners) {
                const s = this._listeners[t];
                if (s) {
                    for(let c = 0, f = s.length; c < f; c++){
                        const m = s[c];
                        if (m.listener === r && m.capture === a) {
                            if (s.length === 1) {
                                this._listeners[t] = undefined;
                            } else {
                                s.splice(c, 1);
                            }
                            return;
                        }
                    }
                }
            }
        },
        dispatchEvent: function(t) {
            return this._dispatchEvent(t, false);
        },
        _dispatchEvent: function(t, r) {
            if (typeof r !== "boolean") {
                r = false;
            }
            function a(_, v) {
                const { type, eventPhase } = v;
                v.currentTarget = _;
                if (eventPhase !== vt.CAPTURING_PHASE && _._handlers && _._handlers[type]) {
                    const l = _._handlers[type];
                    let be;
                    if (typeof l === "function") {
                        be = l.call(v.currentTarget, v);
                    } else {
                        const W = l.handleEvent;
                        if (typeof W !== "function") {
                            throw TypeError("handleEvent property of event handler object isnot a function.");
                        }
                        be = W.call(l, v);
                    }
                    switch(v.type){
                        case "mouseover":
                            if (be === true) {
                                v.preventDefault();
                            }
                            break;
                        case "beforeunload":
                        default:
                            if (be === false) {
                                v.preventDefault();
                            }
                            break;
                    }
                }
                let O = _._listeners && _._listeners[type];
                if (!O) {
                    return;
                }
                O = O.slice();
                for(let Ye = 0, H = O.length; Ye < H; Ye++){
                    if (v._immediatePropagationStopped) {
                        return;
                    }
                    const ie = O[Ye];
                    if (eventPhase === vt.CAPTURING_PHASE && !ie.capture || eventPhase === vt.BUBBLING_PHASE && ie.capture) {
                        continue;
                    }
                    if (ie.f) {
                        ie.f.call(v.currentTarget, v);
                    } else {
                        const ue = ie.listener.handleEvent;
                        if (typeof ue !== "function") {
                            throw TypeError("handleEvent property of event listener object is not a function.");
                        }
                        ue.call(ie.listener, v);
                    }
                }
            }
            if (!t._initialized || t._dispatching) {
                al.InvalidStateError();
            }
            t.isTrusted = r;
            t._dispatching = true;
            t.target = this;
            const s = [];
            for(let c = this.parentNode; c; c = c.parentNode){
                s.push(c);
            }
            t.eventPhase = vt.CAPTURING_PHASE;
            for(let f = s.length - 1; f >= 0; f--){
                a(s[f], t);
                if (t._propagationStopped) {
                    break;
                }
            }
            if (!t._propagationStopped) {
                t.eventPhase = vt.AT_TARGET;
                a(this, t);
            }
            if (t.bubbles && !t._propagationStopped) {
                t.eventPhase = vt.BUBBLING_PHASE;
                for(let m = 0, p = s.length; m < p; m++){
                    a(s[m], t);
                    if (t._propagationStopped) {
                        break;
                    }
                }
            }
            t._dispatching = false;
            t.eventPhase = vt.AT_TARGET;
            t.currentTarget = null;
            if (r && !t.defaultPrevented && t instanceof rl) {
                switch(t.type){
                    case "mousedown":
                        this._armed = {
                            x: t.clientX,
                            y: t.clientY,
                            t: t.timeStamp
                        };
                        break;
                    case "mouseout":
                    case "mouseover":
                        this._armed = null;
                        break;
                    case "mouseup":
                        if (this._isClick(t)) {
                            this._doClick(t);
                        }
                        this._armed = null;
                        break;
                }
            }
            return !t.defaultPrevented;
        },
        _isClick: function(e) {
            return this._armed !== null && e.type === "mouseup" && e.isTrusted && e.button === 0 && e.timeStamp - this._armed.t < 1000 && Math.abs(e.clientX - this._armed.x) < 10 && Math.abs(e.clientY - this._armed.Y) < 10;
        },
        _doClick: function(e) {
            if (this._click_in_progress) {
                return;
            }
            this._click_in_progress = true;
            let t = this;
            while(t && !t._post_click_activation_steps){
                t = t.parentNode;
            }
            if (t && t._pre_click_activation_steps) {
                t._pre_click_activation_steps();
            }
            const r = this.ownerDocument.createEvent("MouseEvent");
            r.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);
            const a = this._dispatchEvent(r, true);
            if (t) {
                if (a) {
                    if (t._post_click_activation_steps) {
                        t._post_click_activation_steps(r);
                    }
                } else if (t._cancelled_activation_steps) {
                    t._cancelled_activation_steps();
                }
            }
        },
        _setEventHandler: function(t, r) {
            if (!this._handlers) {
                this._handlers = Object.create(null);
            }
            this._handlers[t] = r;
        },
        _getEventHandler: function(t) {
            return this._handlers && this._handlers[t] || null;
        }
    };
});
const Ya = C(function(cd, Pi) {
    const We = ee();
    var Se = Pi.exports = {
        valid: function(e) {
            We.assert(e, "list falsy");
            We.assert(e._previousSibling, "previous falsy");
            We.assert(e._nextSibling, "next falsy");
            return true;
        },
        insertBefore: function(e, t) {
            We.assert(Se.valid(e) && Se.valid(t));
            const r = e;
            const e__previousSibling = e._previousSibling;
            const s = t;
            const t__previousSibling = t._previousSibling;
            r._previousSibling = t__previousSibling;
            e__previousSibling._nextSibling = s;
            t__previousSibling._nextSibling = r;
            s._previousSibling = e__previousSibling;
            We.assert(Se.valid(e) && Se.valid(t));
        },
        replace: function(e, t) {
            We.assert(Se.valid(e) && (t === null || Se.valid(t)));
            if (t !== null) {
                Se.insertBefore(t, e);
            }
            Se.remove(e);
            We.assert(Se.valid(e) && (t === null || Se.valid(t)));
        },
        remove: function(e) {
            We.assert(Se.valid(e));
            const e__previousSibling = e._previousSibling;
            if (e__previousSibling === e) {
                return;
            }
            const e__nextSibling = e._nextSibling;
            e__previousSibling._nextSibling = e__nextSibling;
            e__nextSibling._previousSibling = e__previousSibling;
            e._previousSibling = e._nextSibling = e;
            We.assert(Se.valid(e));
        }
    };
});
const Qa = C(function(od, Ki) {
    Ki.exports = {
        serializeOne,
        ɵescapeMatchingClosingTag: zi,
        ɵescapeClosingCommentTag: Wi,
        ɵescapeProcessingInstructionContent: Xi
    };
    var Gi = ee();
    var Gi_NAMESPACE = Gi.NAMESPACE;
    var Ui = {
        STYLE: true,
        SCRIPT: true,
        XMP: true,
        IFRAME: true,
        NOEMBED: true,
        NOFRAMES: true,
        PLAINTEXT: true
    };
    var nl = {
        area: true,
        base: true,
        basefont: true,
        bgsound: true,
        br: true,
        col: true,
        embed: true,
        frame: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    var il = {};
    var Vi = /[&<>\u00A0]/g;
    var ji = /[&"<>\u00A0]/g;
    function sl(data) {
        if (!Vi.test(data)) {
            return data;
        }
        return data.replace(Vi, (t)=>{
            switch(t){
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "\xA0":
                    return "&nbsp;";
            }
        });
    }
    function cl(e) {
        if (!ji.test(e)) {
            return e;
        }
        return e.replace(ji, (t)=>{
            switch(t){
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
                case '"':
                    return "&quot;";
                case "\xA0":
                    return "&nbsp;";
            }
        });
    }
    function ol(e) {
        const e_namespaceURI = e.namespaceURI;
        if (!e_namespaceURI) {
            return e.localName;
        }
        if (e_namespaceURI === Gi_NAMESPACE.XML) {
            return `xml:${e.localName}`;
        }
        if (e_namespaceURI === Gi_NAMESPACE.XLINK) {
            return `xlink:${e.localName}`;
        }
        if (e_namespaceURI === Gi_NAMESPACE.XMLNS) {
            if (e.localName === "xmlns") {
                return "xmlns";
            } else {
                return `xmlns:${e.localName}`;
            }
        }
        return e.name;
    }
    function zi(e, t) {
        let r = `</${t}`;
        if (!e.toLowerCase().includes(r)) {
            return e;
        }
        let a = [
            ...e
        ];
        let s = e.matchAll(new RegExp(r, "ig"));
        for (let c of s){
            a[c.index] = "&lt;";
        }
        return a.join("");
    }
    var ul = /--!?>/;
    function Wi(e) {
        if (!ul.test(e)) {
            return e;
        }
        return e.replace(/(--\!?)>/g, "$1&gt;");
    }
    function Xi(e) {
        if (e.includes(">")) {
            return e.replaceAll(">", "&gt;");
        }
        return e;
    }
    function serializeOne(e, t) {
        let r = "";
        switch(e.nodeType){
            case 1:
                const a = e.namespaceURI;
                const s = a === Gi_NAMESPACE.HTML;
                const c = s || a === Gi_NAMESPACE.SVG || a === Gi_NAMESPACE.MATHML ? e.localName : e.tagName;
                r += `<${c}`;
                for(let f = 0, m = e._numattrs; f < m; f++){
                    const p = e._attr(f);
                    r += ` ${ol(p)}`;
                    if (p.value !== undefined) {
                        r += `="${cl(p.value)}"`;
                    }
                }
                r += ">";
                if (!(s && nl[c])) {
                    let _ = e.serialize();
                    if (Ui[c.toUpperCase()]) {
                        _ = zi(_, c);
                    }
                    if (s && il[c] && _.charAt(0) === `
`) {
                        r += `
`;
                    }
                    r += _;
                    r += `</${c}>`;
                }
                break;
            case 3:
            case 4:
                let v;
                if (t.nodeType === 1 && t.namespaceURI === Gi_NAMESPACE.HTML) {
                    v = t.tagName;
                } else {
                    v = "";
                }
                if (Ui[v] || v === "NOSCRIPT" && t.ownerDocument._scripting_enabled) {
                    r += e.data;
                } else {
                    r += sl(e.data);
                }
                break;
            case 8:
                r += `<!--${Wi(e.data)}-->`;
                break;
            case 7:
                let ne = Xi(e.data);
                r += `<?${e.target} ${ne}?>`;
                break;
            case 10:
                r += `<!DOCTYPE ${e.name}`;
                r += ">";
                break;
            default:
                Gi.InvalidStateError();
        }
        return r;
    }
});
const xe = C(function(ud, es) {
    es.exports = X;
    var Ji = Ka();
    const Kr = Ya();
    const Yi = Qa();
    const V = ee();
    function X() {
        Ji.call(this);
        this.parentNode = null;
        this._nextSibling = this._previousSibling = this;
        this._index = undefined;
    }
    const _e = X.ELEMENT_NODE = 1;
    const $a = X.ATTRIBUTE_NODE = 2;
    const Yr = X.TEXT_NODE = 3;
    const xl = X.CDATA_SECTION_NODE = 4;
    const fl = X.ENTITY_REFERENCE_NODE = 5;
    const Za = X.ENTITY_NODE = 6;
    const Qi = X.PROCESSING_INSTRUCTION_NODE = 7;
    const $i = X.COMMENT_NODE = 8;
    const ar = X.DOCUMENT_NODE = 9;
    const Ae = X.DOCUMENT_TYPE_NODE = 10;
    const ut = X.DOCUMENT_FRAGMENT_NODE = 11;
    const Ja = X.NOTATION_NODE = 12;
    const en = X.DOCUMENT_POSITION_DISCONNECTED = 1;
    const tn = X.DOCUMENT_POSITION_PRECEDING = 2;
    const rn = X.DOCUMENT_POSITION_FOLLOWING = 4;
    const Zi = X.DOCUMENT_POSITION_CONTAINS = 8;
    const an = X.DOCUMENT_POSITION_CONTAINED_BY = 16;
    const nn = X.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
    X.prototype = Object.create(Ji.prototype, {
        baseURI: {
            get: V.nyi
        },
        parentElement: {
            get: function() {
                if (this.parentNode && this.parentNode.nodeType === _e) {
                    return this.parentNode;
                }
                return null;
            }
        },
        hasChildNodes: {
            value: V.shouldOverride
        },
        firstChild: {
            get: V.shouldOverride
        },
        lastChild: {
            get: V.shouldOverride
        },
        isConnected: {
            get: function() {
                let e = this;
                while(e != null){
                    if (e.nodeType === X.DOCUMENT_NODE) {
                        return true;
                    }
                    e = e.parentNode;
                    if (e != null && e.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
                        e = e.host;
                    }
                }
                return false;
            }
        },
        previousSibling: {
            get: function() {
                const parentNode = this.parentNode;
                if (!parentNode) {
                    return null;
                }
                if (this === parentNode.firstChild) {
                    return null;
                }
                return this._previousSibling;
            }
        },
        nextSibling: {
            get: function() {
                const parentNode = this.parentNode;
                const _nextSibling = this._nextSibling;
                if (!parentNode) {
                    return null;
                }
                if (_nextSibling === parentNode.firstChild) {
                    return null;
                }
                return _nextSibling;
            }
        },
        textContent: {
            get: function() {
                return null;
            },
            set: function(e) {}
        },
        innerText: {
            get: function() {
                return null;
            },
            set: function(e) {}
        },
        _countChildrenOfType: {
            value: function(e) {
                let t = 0;
                for(let r = this.firstChild; r !== null; r = r.nextSibling){
                    if (r.nodeType === e) {
                        t++;
                    }
                }
                return t;
            }
        },
        _ensureInsertValid: {
            value: function(t, r, a) {
                const s = this;
                let c;
                let f;
                if (!t.nodeType) {
                    throw TypeError("not a node");
                }
                switch(s.nodeType){
                    case ar:
                    case ut:
                    case _e:
                        break;
                    default:
                        V.HierarchyRequestError();
                }
                if (t.isAncestor(s)) {
                    V.HierarchyRequestError();
                }
                if (r !== null || !a) {
                    if (r.parentNode !== s) {
                        V.NotFoundError();
                    }
                }
                switch(t.nodeType){
                    case ut:
                    case Ae:
                    case _e:
                    case Yr:
                    case Qi:
                    case $i:
                        break;
                    default:
                        V.HierarchyRequestError();
                }
                if (s.nodeType === ar) {
                    switch(t.nodeType){
                        case Yr:
                            V.HierarchyRequestError();
                            break;
                        case ut:
                            if (t._countChildrenOfType(Yr) > 0) {
                                V.HierarchyRequestError();
                            }
                            switch(t._countChildrenOfType(_e)){
                                case 0:
                                    break;
                                case 1:
                                    if (r !== null) {
                                        if (a && r.nodeType === Ae) {
                                            V.HierarchyRequestError();
                                        }
                                        for(f = r.nextSibling; f !== null; f = f.nextSibling){
                                            if (f.nodeType === Ae) {
                                                V.HierarchyRequestError();
                                            }
                                        }
                                    }
                                    c = s._countChildrenOfType(_e);
                                    if (a) {
                                        if (c > 0) {
                                            V.HierarchyRequestError();
                                        }
                                    } else if (c > 1 || c === 1 && r.nodeType !== _e) {
                                        V.HierarchyRequestError();
                                    }
                                    break;
                                default:
                                    V.HierarchyRequestError();
                            }
                            break;
                        case _e:
                            if (r !== null) {
                                if (a && r.nodeType === Ae) {
                                    V.HierarchyRequestError();
                                }
                                for(f = r.nextSibling; f !== null; f = f.nextSibling){
                                    if (f.nodeType === Ae) {
                                        V.HierarchyRequestError();
                                    }
                                }
                            }
                            c = s._countChildrenOfType(_e);
                            if (a) {
                                if (c > 0) {
                                    V.HierarchyRequestError();
                                }
                            } else if (c > 1 || c === 1 && r.nodeType !== _e) {
                                V.HierarchyRequestError();
                            }
                            break;
                        case Ae:
                            if (r === null) {
                                if (s._countChildrenOfType(_e)) {
                                    V.HierarchyRequestError();
                                }
                            } else {
                                for(f = s.firstChild; f !== null; f = f.nextSibling){
                                    if (f === r) {
                                        break;
                                    }
                                    if (f.nodeType === _e) {
                                        V.HierarchyRequestError();
                                    }
                                }
                            }
                            c = s._countChildrenOfType(Ae);
                            if (a) {
                                if (c > 0) {
                                    V.HierarchyRequestError();
                                }
                            } else if (c > 1 || c === 1 && r.nodeType !== Ae) {
                                V.HierarchyRequestError();
                            }
                            break;
                    }
                } else if (t.nodeType === Ae) {
                    V.HierarchyRequestError();
                }
            }
        },
        insertBefore: {
            value: function(t, r) {
                const a = this;
                a._ensureInsertValid(t, r, true);
                let s = r;
                if (s === t) {
                    s = t.nextSibling;
                }
                a.doc.adoptNode(t);
                t._insertOrReplace(a, s, false);
                return t;
            }
        },
        appendChild: {
            value: function(e) {
                return this.insertBefore(e, null);
            }
        },
        _appendChild: {
            value: function(e) {
                e._insertOrReplace(this, null, false);
            }
        },
        removeChild: {
            value: function(t) {
                const r = this;
                if (!t.nodeType) {
                    throw TypeError("not a node");
                }
                if (t.parentNode !== r) {
                    V.NotFoundError();
                }
                t.remove();
                return t;
            }
        },
        replaceChild: {
            value: function(t, r) {
                const a = this;
                a._ensureInsertValid(t, r, false);
                if (t.doc !== a.doc) {
                    a.doc.adoptNode(t);
                }
                t._insertOrReplace(a, r, true);
                return r;
            }
        },
        contains: {
            value: function(t) {
                if (t === null) {
                    return false;
                }
                if (this === t) {
                    return true;
                }
                return (this.compareDocumentPosition(t) & an) !== 0;
            }
        },
        compareDocumentPosition: {
            value: function(t) {
                if (this === t) {
                    return 0;
                }
                if (this.doc !== t.doc || this.rooted !== t.rooted) {
                    return en + nn;
                }
                const r = [];
                const a = [];
                for(var s = this; s !== null; s = s.parentNode){
                    r.push(s);
                }
                for(s = t; s !== null; s = s.parentNode){
                    a.push(s);
                }
                r.reverse();
                a.reverse();
                if (r[0] !== a[0]) {
                    return en + nn;
                }
                s = Math.min(r.length, a.length);
                for(let c = 1; c < s; c++){
                    if (r[c] !== a[c]) {
                        if (r[c].index < a[c].index) {
                            return rn;
                        } else {
                            return tn;
                        }
                    }
                }
                if (r.length < a.length) {
                    return rn + an;
                } else {
                    return tn + Zi;
                }
            }
        },
        isSameNode: {
            value: function(t) {
                return this === t;
            }
        },
        isEqualNode: {
            value: function(t) {
                if (!t) {
                    return false;
                }
                if (t.nodeType !== this.nodeType) {
                    return false;
                }
                if (!this.isEqual(t)) {
                    return false;
                }
                for(var r = this.firstChild, a = t.firstChild; r && a; r = r.nextSibling, a = a.nextSibling){
                    if (!r.isEqualNode(a)) {
                        return false;
                    }
                }
                return r === null && a === null;
            }
        },
        cloneNode: {
            value: function(e) {
                const t = this.clone();
                if (e) {
                    for(let r = this.firstChild; r !== null; r = r.nextSibling){
                        t._appendChild(r.cloneNode(true));
                    }
                }
                return t;
            }
        },
        lookupPrefix: {
            value: function(t) {
                let r;
                if (t === "" || t === null || t === undefined) {
                    return null;
                }
                switch(this.nodeType){
                    case _e:
                        return this._lookupNamespacePrefix(t, this);
                    case ar:
                        r = this.documentElement;
                        if (r) {
                            return r.lookupPrefix(t);
                        }
                        return null;
                    case Za:
                    case Ja:
                    case ut:
                    case Ae:
                        return null;
                    case $a:
                        r = this.ownerElement;
                        if (r) {
                            return r.lookupPrefix(t);
                        }
                        return null;
                    default:
                        r = this.parentElement;
                        if (r) {
                            return r.lookupPrefix(t);
                        }
                        return null;
                }
            }
        },
        lookupNamespaceURI: {
            value: function(t) {
                if (t === "" || t === undefined) {
                    t = null;
                }
                let r;
                switch(this.nodeType){
                    case _e:
                        return V.shouldOverride();
                    case ar:
                        r = this.documentElement;
                        if (r) {
                            return r.lookupNamespaceURI(t);
                        }
                        return null;
                    case Za:
                    case Ja:
                    case Ae:
                    case ut:
                        return null;
                    case $a:
                        r = this.ownerElement;
                        if (r) {
                            return r.lookupNamespaceURI(t);
                        }
                        return null;
                    default:
                        r = this.parentElement;
                        if (r) {
                            return r.lookupNamespaceURI(t);
                        }
                        return null;
                }
            }
        },
        isDefaultNamespace: {
            value: function(t) {
                if (t === "" || t === undefined) {
                    t = null;
                }
                const r = this.lookupNamespaceURI(null);
                return r === t;
            }
        },
        index: {
            get: function() {
                const parentNode = this.parentNode;
                if (this === parentNode.firstChild) {
                    return 0;
                }
                const e_childNodes = parentNode.childNodes;
                if (this._index === undefined || e_childNodes[this._index] !== this) {
                    for(let r = 0; r < e_childNodes.length; r++){
                        e_childNodes[r]._index = r;
                    }
                    V.assert(e_childNodes[this._index] === this);
                }
                return this._index;
            }
        },
        isAncestor: {
            value: function(e) {
                if (this.doc !== e.doc) {
                    return false;
                }
                if (this.rooted !== e.rooted) {
                    return false;
                }
                for(let t = e; t; t = t.parentNode){
                    if (t === this) {
                        return true;
                    }
                }
                return false;
            }
        },
        ensureSameDoc: {
            value: function(e) {
                if (e.ownerDocument === null) {
                    e.ownerDocument = this.doc;
                } else if (e.ownerDocument !== this.doc) {
                    V.WrongDocumentError();
                }
            }
        },
        removeChildren: {
            value: V.shouldOverride
        },
        _insertOrReplace: {
            value: function(t, r, a) {
                const s = this;
                let c;
                let f;
                if (s.nodeType === ut && s.rooted) {
                    V.HierarchyRequestError();
                }
                if (t._childNodes) {
                    c = r === null ? t._childNodes.length : r.index;
                    if (s.parentNode === t) {
                        const m = s.index;
                        if (m < c) {
                            c--;
                        }
                    }
                }
                if (a) {
                    if (r.rooted) {
                        r.doc.mutateRemove(r);
                    }
                    r.parentNode = null;
                }
                let p = r;
                if (p === null) {
                    p = t.firstChild;
                }
                const _ = s.rooted && t.rooted;
                if (s.nodeType === ut) {
                    const v = [
                        0,
                        a ? 1 : 0
                    ];
                    let ne;
                    for(let se = s.firstChild; se !== null; se = ne){
                        ne = se.nextSibling;
                        v.push(se);
                        se.parentNode = t;
                    }
                    const l = v.length;
                    if (a) {
                        Kr.replace(p, l > 2 ? v[2] : null);
                    } else if (l > 2 && p !== null) {
                        Kr.insertBefore(v[2], p);
                    }
                    if (t._childNodes) {
                        v[0] = r === null ? t._childNodes.length : r._index;
                        t._childNodes.splice.apply(t._childNodes, v);
                        for(f = 2; f < l; f++){
                            v[f]._index = v[0] + (f - 2);
                        }
                    } else if (t._firstChild === r) {
                        if (l > 2) {
                            t._firstChild = v[2];
                        } else if (a) {
                            t._firstChild = null;
                        }
                    }
                    if (s._childNodes) {
                        s._childNodes.length = 0;
                    } else {
                        s._firstChild = null;
                    }
                    if (t.rooted) {
                        t.modify();
                        for(f = 2; f < l; f++){
                            t.doc.mutateInsert(v[f]);
                        }
                    }
                } else {
                    if (r === s) {
                        return;
                    }
                    if (_) {
                        s._remove();
                    } else if (s.parentNode) {
                        s.remove();
                    }
                    s.parentNode = t;
                    if (a) {
                        Kr.replace(p, s);
                        if (t._childNodes) {
                            s._index = c;
                            t._childNodes[c] = s;
                        } else if (t._firstChild === r) {
                            t._firstChild = s;
                        }
                    } else {
                        if (p !== null) {
                            Kr.insertBefore(s, p);
                        }
                        if (t._childNodes) {
                            s._index = c;
                            t._childNodes.splice(c, 0, s);
                        } else if (t._firstChild === r) {
                            t._firstChild = s;
                        }
                    }
                    if (_) {
                        t.modify();
                        t.doc.mutateMove(s);
                    } else if (t.rooted) {
                        t.modify();
                        t.doc.mutateInsert(s);
                    }
                }
            }
        },
        lastModTime: {
            get: function() {
                if (!this._lastModTime) {
                    this._lastModTime = this.doc.modclock;
                }
                return this._lastModTime;
            }
        },
        modify: {
            value: function() {
                if (this.doc.modclock) {
                    const e = ++this.doc.modclock;
                    for(let t = this; t; t = t.parentElement){
                        if (t._lastModTime) {
                            t._lastModTime = e;
                        }
                    }
                }
            }
        },
        doc: {
            get: function() {
                return this.ownerDocument || this;
            }
        },
        rooted: {
            get: function() {
                return !!this._nid;
            }
        },
        normalize: {
            value: function() {
                let e;
                for(let t = this.firstChild; t !== null; t = e){
                    e = t.nextSibling;
                    if (t.normalize) {
                        t.normalize();
                    }
                    if (t.nodeType !== X.TEXT_NODE) {
                        continue;
                    }
                    if (t.nodeValue === "") {
                        this.removeChild(t);
                        continue;
                    }
                    const r = t.previousSibling;
                    if (r === null) {
                        continue;
                    } else if (r.nodeType === X.TEXT_NODE) {
                        r.appendData(t.nodeValue);
                        this.removeChild(t);
                    }
                }
            }
        },
        serialize: {
            value: function() {
                if (this._innerHTML) {
                    return this._innerHTML;
                }
                let e = "";
                for(let t = this.firstChild; t !== null; t = t.nextSibling){
                    e += Yi.serializeOne(t, this);
                }
                return e;
            }
        },
        outerHTML: {
            get: function() {
                return Yi.serializeOne(this, {
                    nodeType: 0
                });
            },
            set: V.nyi
        },
        ELEMENT_NODE: {
            value: _e
        },
        ATTRIBUTE_NODE: {
            value: $a
        },
        TEXT_NODE: {
            value: Yr
        },
        CDATA_SECTION_NODE: {
            value: xl
        },
        ENTITY_REFERENCE_NODE: {
            value: fl
        },
        ENTITY_NODE: {
            value: Za
        },
        PROCESSING_INSTRUCTION_NODE: {
            value: Qi
        },
        COMMENT_NODE: {
            value: $i
        },
        DOCUMENT_NODE: {
            value: ar
        },
        DOCUMENT_TYPE_NODE: {
            value: Ae
        },
        DOCUMENT_FRAGMENT_NODE: {
            value: ut
        },
        NOTATION_NODE: {
            value: Ja
        },
        DOCUMENT_POSITION_DISCONNECTED: {
            value: en
        },
        DOCUMENT_POSITION_PRECEDING: {
            value: tn
        },
        DOCUMENT_POSITION_FOLLOWING: {
            value: rn
        },
        DOCUMENT_POSITION_CONTAINS: {
            value: Zi
        },
        DOCUMENT_POSITION_CONTAINED_BY: {
            value: an
        },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
            value: nn
        }
    });
});
const rs = C(function(ld, ts) {
    ts.exports = class extends Array {
        constructor(t){
            super(t && t.length || 0);
            if (t) {
                for(var r in t){
                    this[r] = t[r];
                }
            }
        }
        item(t) {
            return this[t] || null;
        }
    };
});
const ns = C(function(xd, as) {
    function dl(e) {
        return this[e] || null;
    }
    function hl(e) {
        if (!e) {
            e = [];
        }
        e.item = dl;
        return e;
    }
    as.exports = hl;
});
const yt = C(function(fd, is) {
    let sn;
    try {
        sn = rs();
    } catch (e) {
        sn = ns();
    }
    is.exports = sn;
});
const Qr = C(function(dd, os) {
    os.exports = cs;
    var ss = xe();
    const pl = yt();
    function cs() {
        ss.call(this);
        this._firstChild = this._childNodes = null;
    }
    cs.prototype = Object.create(ss.prototype, {
        hasChildNodes: {
            value: function() {
                if (this._childNodes) {
                    return this._childNodes.length > 0;
                }
                return this._firstChild !== null;
            }
        },
        childNodes: {
            get: function() {
                this._ensureChildNodes();
                return this._childNodes;
            }
        },
        firstChild: {
            get: function() {
                if (this._childNodes) {
                    if (this._childNodes.length === 0) {
                        return null;
                    }
                    return this._childNodes[0];
                }
                return this._firstChild;
            }
        },
        lastChild: {
            get: function() {
                const _childNodes = this._childNodes;
                let t;
                if (_childNodes) {
                    if (_childNodes.length === 0) {
                        return null;
                    }
                    return _childNodes[_childNodes.length - 1];
                }
                t = this._firstChild;
                if (t === null) {
                    return null;
                }
                return t._previousSibling;
            }
        },
        _ensureChildNodes: {
            value: function() {
                if (this._childNodes) {
                    return;
                }
                const _firstChild = this._firstChild;
                let t = _firstChild;
                const r = this._childNodes = new pl;
                if (_firstChild) {
                    do {
                        r.push(t);
                        t = t._nextSibling;
                    }while (t !== _firstChild)
                }
                this._firstChild = null;
            }
        },
        removeChildren: {
            value: function() {
                const t = this.rooted ? this.ownerDocument : null;
                let firstChild = this.firstChild;
                let a;
                while(firstChild !== null){
                    a = firstChild;
                    firstChild = a.nextSibling;
                    if (t) {
                        t.mutateRemove(a);
                    }
                    a.parentNode = null;
                }
                if (this._childNodes) {
                    this._childNodes.length = 0;
                } else {
                    this._firstChild = null;
                }
                this.modify();
            }
        }
    });
});
const $r = C(function(Nl) {
    Nl.isValidName = Tl;
    Nl.isValidQName = yl;
    var ml = /^[_:A-Za-z][-.:\w]+$/;
    var gl = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/;
    let nr = "_A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿\u200C-\u200D⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-\uFFFD";
    let ir = "-._A-Za-z0-9·À-ÖØ-öø-˿̀-ͽͿ-῿\u200C\u200D‿⁀⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-\uFFFD";
    let Nt = `[${nr}][${ir}]*`;
    let cn = `${nr}:`;
    let on = `${ir}:`;
    var bl = new RegExp(`^[${cn}][${on}]*\$`);
    var El = new RegExp(`^(${Nt}|${Nt}:${Nt})\$`);
    var us = /[\uD800-\uDB7F\uDC00-\uDFFF]/;
    var ls = /[\uD800-\uDB7F\uDC00-\uDFFF]/g;
    var xs = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
    nr += "\uD800-\uDB7F\uDC00-\uDFFF";
    ir += "\uD800-\uDB7F\uDC00-\uDFFF";
    Nt = `[${nr}][${ir}]*`;
    cn = `${nr}:`;
    on = `${ir}:`;
    var _l = new RegExp(`^[${cn}][${on}]*\$`);
    var vl = new RegExp(`^(${Nt}|${Nt}:${Nt})\$`);
    function Tl(e) {
        if (ml.test(e)) {
            return true;
        }
        if (bl.test(e)) {
            return true;
        }
        if (!us.test(e)) {
            return false;
        }
        if (!_l.test(e)) {
            return false;
        }
        const t = e.match(ls);
        const r = e.match(xs);
        return r !== null && 2 * r.length === t.length;
    }
    function yl(e) {
        if (gl.test(e)) {
            return true;
        }
        if (El.test(e)) {
            return true;
        }
        if (!us.test(e)) {
            return false;
        }
        if (!vl.test(e)) {
            return false;
        }
        const t = e.match(ls);
        const r = e.match(xs);
        return r !== null && 2 * r.length === t.length;
    }
});
const un = C(function(Cl) {
    const fs = ee();
    Cl.property = function(e) {
        if (Array.isArray(e.type)) {
            const t = Object.create(null);
            e.type.forEach((s)=>{
                t[s.value || s] = s.alias || s;
            });
            let r = e.missing;
            if (r === undefined) {
                r = null;
            }
            let a = e.invalid;
            if (a === undefined) {
                a = r;
            }
            return {
                get: function() {
                    let s = this._getattr(e.name);
                    if (s === null) {
                        return r;
                    }
                    s = t[s.toLowerCase()];
                    if (s !== undefined) {
                        return s;
                    }
                    if (a !== null) {
                        return a;
                    }
                    return s;
                },
                set: function(s) {
                    this._setattr(e.name, s);
                }
            };
        } else if (e.type === Boolean) {
            return {
                get: function() {
                    return this.hasAttribute(e.name);
                },
                set: function(s) {
                    if (s) {
                        this._setattr(e.name, "");
                    } else {
                        this.removeAttribute(e.name);
                    }
                }
            };
        } else if (e.type === Number || e.type === "long" || e.type === "unsigned long" || e.type === "limited unsigned long with fallback") {
            return Al(e);
        } else if (!e.type || e.type === String) {
            return {
                get: function() {
                    return this._getattr(e.name) || "";
                },
                set: function(s) {
                    if (e.treatNullAsEmptyString && s === null) {
                        s = "";
                    }
                    this._setattr(e.name, s);
                }
            };
        } else if (typeof e.type === "function") {
            return e.type(e.name, e);
        }
        throw Error("Invalid attribute definition");
    };
    function Al(e) {
        let t;
        if (typeof e.default === "function") {
            t = e.default;
        } else if (typeof e.default === "number") {
            t = function() {
                return e.default;
            };
        } else {
            t = function() {
                fs.assert(false, typeof e.default);
            };
        }
        const r = e.type === "unsigned long";
        const a = e.type === "long";
        const s = e.type === "limited unsigned long with fallback";
        let { min, max, setmin } = e;
        if (min === undefined) {
            if (r) {
                min = 0;
            }
            if (a) {
                min = -2147483648;
            }
            if (s) {
                min = 1;
            }
        }
        if (max === undefined) {
            if (r || a || s) {
                max = 2147483647;
            }
        }
        return {
            get: function() {
                const p = this._getattr(e.name);
                let _ = e.float ? parseFloat(p) : parseInt(p, 10);
                if (p === null || !isFinite(_) || min !== undefined && _ < min || max !== undefined && _ > max) {
                    return t.call(this);
                }
                if (r || a || s) {
                    if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(p)) {
                        return t.call(this);
                    }
                    _ = _ | 0;
                }
                return _;
            },
            set: function(p) {
                if (!e.float) {
                    p = Math.floor(p);
                }
                if (setmin !== undefined && p < setmin) {
                    fs.IndexSizeError(`${e.name} set to ${p}`);
                }
                if (r) {
                    p = p < 0 || p > 2147483647 ? t.call(this) : p | 0;
                } else if (s) {
                    p = p < 1 || p > 2147483647 ? t.call(this) : p | 0;
                } else if (a) {
                    p = p < -2147483648 || p > 2147483647 ? t.call(this) : p | 0;
                }
                this._setattr(e.name, String(p));
            }
        };
    }
    Cl.registerChangeHandler = function({ prototype }, t, r) {
        if (!Object.prototype.hasOwnProperty.call(prototype, "_attributeChangeHandlers")) {
            prototype._attributeChangeHandlers = Object.create(prototype._attributeChangeHandlers || null);
        }
        prototype._attributeChangeHandlers[t] = r;
    };
});
const ps = C(function(md, hs) {
    hs.exports = ds;
    const Ll = xe();
    function ds(e, t) {
        this.root = e;
        this.filter = t;
        this.lastModTime = e.lastModTime;
        this.done = false;
        this.cache = [];
        this.traverse();
    }
    ds.prototype = Object.create(Object.prototype, {
        length: {
            get: function() {
                this.checkcache();
                if (!this.done) {
                    this.traverse();
                }
                return this.cache.length;
            }
        },
        item: {
            value: function(e) {
                this.checkcache();
                if (!this.done && e >= this.cache.length) {
                    this.traverse();
                }
                return this.cache[e];
            }
        },
        checkcache: {
            value: function() {
                if (this.lastModTime !== this.root.lastModTime) {
                    for(let e = this.cache.length - 1; e >= 0; e--){
                        this[e] = undefined;
                    }
                    this.cache.length = 0;
                    this.done = false;
                    this.lastModTime = this.root.lastModTime;
                }
            }
        },
        traverse: {
            value: function(e) {
                if (e !== undefined) {
                    e++;
                }
                let t;
                while((t = this.next()) !== null){
                    this[this.cache.length] = t;
                    this.cache.push(t);
                    if (e && this.cache.length === e) {
                        return;
                    }
                }
                this.done = true;
            }
        },
        next: {
            value: function() {
                const e = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1];
                let t;
                if (e.nodeType === Ll.DOCUMENT_NODE) {
                    t = e.documentElement;
                } else {
                    t = e.nextElement(this.root);
                }
                while(t){
                    if (this.filter(t)) {
                        return t;
                    }
                    t = t.nextElement(this.root);
                }
                return null;
            }
        }
    });
});
const xn = C(function(gd, bs) {
    const ln = ee();
    bs.exports = gs;
    function gs(e, t) {
        this._getString = e;
        this._setString = t;
        this._length = 0;
        this._lastStringValue = "";
        this._update();
    }
    Object.defineProperties(gs.prototype, {
        length: {
            get: function() {
                return this._length;
            }
        },
        item: {
            value: function(e) {
                const t = Mt(this);
                if (e < 0 || e >= t.length) {
                    return null;
                }
                return t[e];
            }
        },
        contains: {
            value: function(e) {
                e = String(e);
                const t = Mt(this);
                return t.indexOf(e) > -1;
            }
        },
        add: {
            value: function(...args) {
                const e = Mt(this);
                for(let t = 0, r = args.length; t < r; t++){
                    const a = sr(args[t]);
                    if (e.indexOf(a) < 0) {
                        e.push(a);
                    }
                }
                this._update(e);
            }
        },
        remove: {
            value: function(...args) {
                const e = Mt(this);
                for(let t = 0, r = args.length; t < r; t++){
                    const a = sr(args[t]);
                    const s = e.indexOf(a);
                    if (s > -1) {
                        e.splice(s, 1);
                    }
                }
                this._update(e);
            }
        },
        toggle: {
            value: function(t, r) {
                t = sr(t);
                if (this.contains(t)) {
                    if (r === undefined || r === false) {
                        this.remove(t);
                        return false;
                    }
                    return true;
                } else {
                    if (r === undefined || r === true) {
                        this.add(t);
                        return true;
                    }
                    return false;
                }
            }
        },
        replace: {
            value: function(t, r) {
                if (String(r) === "") {
                    ln.SyntaxError();
                }
                t = sr(t);
                r = sr(r);
                const a = Mt(this);
                const s = a.indexOf(t);
                if (s < 0) {
                    return false;
                }
                const c = a.indexOf(r);
                if (c < 0) {
                    a[s] = r;
                } else if (s < c) {
                    a[s] = r;
                    a.splice(c, 1);
                } else {
                    a.splice(s, 1);
                }
                this._update(a);
                return true;
            }
        },
        toString: {
            value: function() {
                return this._getString();
            }
        },
        value: {
            get: function() {
                return this._getString();
            },
            set: function(e) {
                this._setString(e);
                this._update();
            }
        },
        _update: {
            value: function(e) {
                if (e) {
                    ms(this, e);
                    this._setString(e.join(" ").trim());
                } else {
                    ms(this, Mt(this));
                }
                this._lastStringValue = this._getString();
            }
        }
    });
    function ms(e, t) {
        const e__length = e._length;
        let a;
        e._length = t.length;
        for(a = 0; a < t.length; a++){
            e[a] = t[a];
        }
        for(; a < e__length; a++){
            e[a] = undefined;
        }
    }
    function sr(e) {
        e = String(e);
        if (e === "") {
            ln.SyntaxError();
        }
        if (/[ \t\r\n\f]/.test(e)) {
            ln.InvalidCharacterError();
        }
        return e;
    }
    function Ml(e) {
        const e__length = e._length;
        const r = Array(e__length);
        for(let a = 0; a < e__length; a++){
            r[a] = e[a];
        }
        return r;
    }
    function Mt(e) {
        const t = e._getString();
        if (t === e._lastStringValue) {
            return Ml(e);
        }
        const r = t.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, "");
        if (r === "") {
            return [];
        } else {
            const a = Object.create(null);
            return r.split(/[ \t\r\n\f]+/g).filter((s)=>{
                const c = `\$${s}`;
                if (a[c]) {
                    return false;
                }
                a[c] = true;
                return true;
            });
        }
    }
});
const ta = C(function(Ot, Ns) {
    const Zr = Object.create(null, {
        location: {
            get: function() {
                throw Error("window.location is not supported.");
            }
        }
    });
    const Rl = (e, t)=>e.compareDocumentPosition(t);
    const Il = function(e, t) {
        if (Rl(e, t) & 2) {
            return 1;
        }
        return -1;
    };
    const ea = function(e) {
        while((e = e.nextSibling) && e.nodeType !== 1);
        return e;
    };
    const It = function(e) {
        while((e = e.previousSibling) && e.nodeType !== 1);
        return e;
    };
    const Ol = function(e) {
        if (e = e.firstChild) {
            while(e.nodeType !== 1 && (e = e.nextSibling));
        }
        return e;
    };
    const ql = function(e) {
        if (e = e.lastChild) {
            while(e.nodeType !== 1 && (e = e.previousSibling));
        }
        return e;
    };
    const Rt = (e)=>{
        if (!e.parentNode) {
            return false;
        }
        const nodeType = e.parentNode.nodeType;
        return nodeType === 1 || nodeType === 9;
    };
    const Es = (e)=>{
        if (!e) {
            return e;
        }
        const t = e[0];
        if (t === '"' || t === "'") {
            if (e[e.length - 1] === t) {
                e = e.slice(1, -1);
            } else {
                e = e.slice(1);
            }
            return e.replace(A.str_escape, (r)=>{
                const a = /^\\(?:([0-9A-Fa-f]+)|([\r\n\f]+))/.exec(r);
                if (!a) {
                    return r.slice(1);
                }
                if (a[2]) {
                    return "";
                }
                const s = parseInt(a[1], 16);
                if (String.fromCodePoint) {
                    return String.fromCodePoint(s);
                }
                return String.fromCharCode(s);
            });
        } else if (A.ident.test(e)) {
            return lt(e);
        } else {
            return e;
        }
    };
    var lt = (e)=>e.replace(A.escape, (t)=>{
            const r = /^\\([0-9A-Fa-f]+)/.exec(t);
            if (!r) {
                return t[1];
            }
            const a = parseInt(r[1], 16);
            if (String.fromCodePoint) {
                return String.fromCodePoint(a);
            }
            return String.fromCharCode(a);
        });
    const Hl = (()=>{
        if (Array.prototype.indexOf) {
            return Array.prototype.indexOf;
        }
        return function(e, t) {
            let length = this.length;
            while(length--){
                if (this[length] === t) {
                    return length;
                }
            }
            return -1;
        };
    })();
    const vs = (e, t)=>{
        const r = A.inside.source.replace(/</g, e).replace(/>/g, t);
        return new RegExp(r);
    };
    const ve = (e, t, r)=>{
        e = e.source;
        e = e.replace(t, r.source || r);
        return new RegExp(e);
    };
    const _s = (e, t)=>e.replace(/^(?:\w+:\/\/|\/+)/, "").replace(/(?:\/+|\/*#.*?)$/, "").split("/", t).join("/");
    const Fl = (e, t)=>{
        let r = e.replace(/\s+/g, "");
        let a;
        if (r === "even") {
            r = "2n+0";
        } else if (r === "odd") {
            r = "2n+1";
        } else if (r.indexOf("n") === -1) {
            r = `0n${r}`;
        }
        a = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(r);
        return {
            group: a[1] === "-" ? -(a[2] || 1) : +(a[2] || 1),
            offset: a[4] ? a[3] === "-" ? -a[4] : +a[4] : 0
        };
    };
    const fn = (e, t, r)=>{
        const a = Fl(e);
        const { group, offset } = a;
        const f = !r ? Ol : ql;
        const m = !r ? ea : It;
        return function(p) {
            if (!Rt(p)) {
                return;
            }
            let _ = f(p.parentNode);
            let v = 0;
            while(_){
                if (t(_, p)) {
                    v++;
                }
                if (_ === p) {
                    v -= offset;
                    if (group && v) {
                        return v % group === 0 && v < 0 === group < 0;
                    }
                    return !v;
                }
                _ = m(_);
            }
        };
    };
    var ce = {
        "*": function() {
            return true;
        },
        type: function(e) {
            e = e.toLowerCase();
            return function(t) {
                return t.nodeName.toLowerCase() === e;
            };
        },
        attr: function(e, t, r, a) {
            t = Ts[t];
            return function(s) {
                let c;
                switch(e){
                    case "for":
                        c = s.htmlFor;
                        break;
                    case "class":
                        c = s.className;
                        if (c === "" && s.getAttribute("class") == null) {
                            c = null;
                        }
                        break;
                    case "href":
                    case "src":
                        c = s.getAttribute(e, 2);
                        break;
                    case "title":
                        c = s.getAttribute("title") || null;
                        break;
                    case "id":
                    case "lang":
                    case "dir":
                    case "accessKey":
                    case "hidden":
                    case "tabIndex":
                    case "style":
                        if (s.getAttribute) {
                            c = s.getAttribute(e);
                            break;
                        }
                    default:
                        if (s.hasAttribute && !s.hasAttribute(e)) {
                            break;
                        }
                        c = s[e] ?? (s.getAttribute && s.getAttribute(e));
                        break;
                }
                if (c == null) {
                    return;
                }
                c = `${c}`;
                if (a) {
                    c = c.toLowerCase();
                    r = r.toLowerCase();
                }
                return t(c, r);
            };
        },
        ":first-child": function(e) {
            return !It(e) && Rt(e);
        },
        ":last-child": function(e) {
            return !ea(e) && Rt(e);
        },
        ":only-child": function(e) {
            return !It(e) && !ea(e) && Rt(e);
        },
        ":nth-child": function(e, t) {
            return fn(e, ()=>true, t);
        },
        ":nth-last-child": function(e) {
            return ce[":nth-child"](e, true);
        },
        ":root": function(e) {
            return e.ownerDocument.documentElement === e;
        },
        ":empty": function(e) {
            return !e.firstChild;
        },
        ":not": function(e) {
            const t = hn(e);
            return function(r) {
                return !t(r);
            };
        },
        ":first-of-type": function(e) {
            if (!Rt(e)) {
                return;
            }
            const e_nodeName = e.nodeName;
            while(e = It(e)){
                if (e.nodeName === e_nodeName) {
                    return;
                }
            }
            return true;
        },
        ":last-of-type": function(e) {
            if (!Rt(e)) {
                return;
            }
            const e_nodeName = e.nodeName;
            while(e = ea(e)){
                if (e.nodeName === e_nodeName) {
                    return;
                }
            }
            return true;
        },
        ":only-of-type": function(e) {
            return ce[":first-of-type"](e) && ce[":last-of-type"](e);
        },
        ":nth-of-type": function(e, t) {
            return fn(e, (r, a)=>r.nodeName === a.nodeName, t);
        },
        ":nth-last-of-type": function(e) {
            return ce[":nth-of-type"](e, true);
        },
        ":checked": function(e) {
            return !!(e.checked || e.selected);
        },
        ":indeterminate": function(e) {
            return !ce[":checked"](e);
        },
        ":enabled": function(e) {
            return !e.disabled && e.type !== "hidden";
        },
        ":disabled": function(e) {
            return !!e.disabled;
        },
        ":target": function(e) {
            return e.id === Zr.location.hash.substring(1);
        },
        ":focus": function(e) {
            return e === e.ownerDocument.activeElement;
        },
        ":is": function(e) {
            return hn(e);
        },
        ":matches": function(e) {
            return ce[":is"](e);
        },
        ":nth-match": function(e, t) {
            const r = e.split(/\s*,\s*/);
            const a = r.shift();
            const s = hn(r.join(","));
            return fn(a, s, t);
        },
        ":nth-last-match": function(e) {
            return ce[":nth-match"](e, true);
        },
        ":links-here": function(e) {
            return `${e}` === `${Zr.location}`;
        },
        ":lang": function(e) {
            return function(t) {
                while(t){
                    if (t.lang) {
                        return t.lang.indexOf(e) === 0;
                    }
                    t = t.parentNode;
                }
            };
        },
        ":dir": function(e) {
            return function(t) {
                while(t){
                    if (t.dir) {
                        return t.dir === e;
                    }
                    t = t.parentNode;
                }
            };
        },
        ":scope": function(e, t) {
            const r = t || e.ownerDocument;
            if (r.nodeType === 9) {
                return e === r.documentElement;
            }
            return e === r;
        },
        ":any-link": function(e) {
            return typeof e.href === "string";
        },
        ":local-link": function(e) {
            if (e.nodeName) {
                return e.href && e.host === Zr.location.host;
            }
            const t = +e + 1;
            return function(r) {
                if (!r.href) {
                    return;
                }
                const a = `${Zr.location}`;
                const s = `${r}`;
                return _s(a, t) === _s(s, t);
            };
        },
        ":default": function(e) {
            return !!e.defaultSelected;
        },
        ":valid": function(e) {
            return e.willValidate || e.validity && e.validity.valid;
        },
        ":invalid": function(e) {
            return !ce[":valid"](e);
        },
        ":in-range": function(e) {
            return e.value > e.min && e.value <= e.max;
        },
        ":out-of-range": function(e) {
            return !ce[":in-range"](e);
        },
        ":required": function(e) {
            return !!e.required;
        },
        ":optional": function(e) {
            return !e.required;
        },
        ":read-only": function(e) {
            if (e.readOnly) {
                return true;
            }
            const t = e.getAttribute("contenteditable");
            const e_contentEditable = e.contentEditable;
            let a = e.nodeName.toLowerCase();
            a = a !== "input" && a !== "textarea";
            return (a || e.disabled) && t == null && e_contentEditable !== "true";
        },
        ":read-write": function(e) {
            return !ce[":read-only"](e);
        },
        ":hover": function() {
            throw Error(":hover is not supported.");
        },
        ":active": function() {
            throw Error(":active is not supported.");
        },
        ":link": function() {
            throw Error(":link is not supported.");
        },
        ":visited": function() {
            throw Error(":visited is not supported.");
        },
        ":column": function() {
            throw Error(":column is not supported.");
        },
        ":nth-column": function() {
            throw Error(":nth-column is not supported.");
        },
        ":nth-last-column": function() {
            throw Error(":nth-last-column is not supported.");
        },
        ":current": function() {
            throw Error(":current is not supported.");
        },
        ":past": function() {
            throw Error(":past is not supported.");
        },
        ":future": function() {
            throw Error(":future is not supported.");
        },
        ":contains": function(e) {
            return function(t) {
                const r = t.innerText || t.textContent || t.value || "";
                return r.indexOf(e) !== -1;
            };
        },
        ":has": function(e) {
            return function(t) {
                return ys(e, t).length > 0;
            };
        }
    };
    var Ts = {
        "-": function() {
            return true;
        },
        "=": function(e, t) {
            return e === t;
        },
        "*=": function(e, t) {
            return e.indexOf(t) !== -1;
        },
        "~=": function(e, t) {
            let r;
            let a;
            let s;
            let c;
            for(a = 0;; a = r + 1){
                r = e.indexOf(t, a);
                if (r === -1) {
                    return false;
                }
                s = e[r - 1];
                c = e[r + t.length];
                if ((!s || s === " ") && (!c || c === " ")) {
                    return true;
                }
            }
        },
        "|=": function(e, t) {
            const r = e.indexOf(t);
            let a;
            if (r !== 0) {
                return;
            }
            a = e[r + t.length];
            return a === "-" || !a;
        },
        "^=": function(e, t) {
            return e.indexOf(t) === 0;
        },
        "$=": function(e, t) {
            const r = e.lastIndexOf(t);
            return r !== -1 && r + t.length === e.length;
        },
        "!=": function(e, t) {
            return e !== t;
        }
    };
    const cr = {
        " ": function(e) {
            return function(t) {
                while(t = t.parentNode){
                    if (e(t)) {
                        return t;
                    }
                }
            };
        },
        ">": function(e) {
            return function(t) {
                if (t = t.parentNode) {
                    return e(t) && t;
                }
            };
        },
        "+": function(e) {
            return function(t) {
                if (t = It(t)) {
                    return e(t) && t;
                }
            };
        },
        "~": function(e) {
            return function(t) {
                while(t = It(t)){
                    if (e(t)) {
                        return t;
                    }
                }
            };
        },
        noop: function(e) {
            return function(t) {
                return e(t) && t;
            };
        },
        ref: function(e, t) {
            let r;
            function a(s) {
                const s_ownerDocument = s.ownerDocument;
                const f = s_ownerDocument.getElementsByTagName("*");
                let f_length = f.length;
                while(f_length--){
                    r = f[f_length];
                    if (a.test(s)) {
                        r = null;
                        return true;
                    }
                }
                r = null;
            }
            a.combinator = function(s) {
                if (!r || !r.getAttribute) {
                    return;
                }
                let c = r.getAttribute(t) || "";
                if (c[0] === "#") {
                    c = c.substring(1);
                }
                if (c === s.id && e(r)) {
                    return r;
                }
            };
            return a;
        }
    };
    var A = {
        escape: /\\(?:[^0-9A-Fa-f\r\n]|[0-9A-Fa-f]{1,6}[\r\n\t ]?)/g,
        str_escape: /(escape)|\\(\n|\r\n?|\f)/g,
        nonascii: /[\u00A0-\uFFFF]/,
        cssid: /(?:(?!-?[0-9])(?:escape|nonascii|[-_a-zA-Z0-9])+)/,
        qname: /^ *(cssid|\*)/,
        simple: /^(?:([.#]cssid)|pseudo|attr)/,
        ref: /^ *\/(cssid)\/ */,
        combinator: /^(?: +([^ \w*.#\\]) +|( )+|([^ \w*.#\\]))(?! *$)/,
        attr: /^\[(cssid)(?:([^\w]?=)(inside))?\]/,
        pseudo: /^(:cssid)(?:\((inside)\))?/,
        inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/,
        ident: /^(cssid)$/
    };
    A.cssid = ve(A.cssid, "nonascii", A.nonascii);
    A.cssid = ve(A.cssid, "escape", A.escape);
    A.qname = ve(A.qname, "cssid", A.cssid);
    A.simple = ve(A.simple, "cssid", A.cssid);
    A.ref = ve(A.ref, "cssid", A.cssid);
    A.attr = ve(A.attr, "cssid", A.cssid);
    A.pseudo = ve(A.pseudo, "cssid", A.cssid);
    A.inside = ve(A.inside, `[^"'>]*`, A.inside);
    A.attr = ve(A.attr, "inside", vs("\\[", "\\]"));
    A.pseudo = ve(A.pseudo, "inside", vs("\\(", "\\)"));
    A.simple = ve(A.simple, "pseudo", A.pseudo);
    A.simple = ve(A.simple, "attr", A.attr);
    A.ident = ve(A.ident, "cssid", A.cssid);
    A.str_escape = ve(A.str_escape, "escape", A.escape);
    const or = (e)=>{
        let t = e.replace(/^\s+|\s+$/g, "");
        let r;
        const a = [];
        let s = [];
        let c;
        let f;
        let m;
        let p;
        let _;
        while(t){
            if (m = A.qname.exec(t)) {
                t = t.substring(m[0].length);
                f = lt(m[1]);
                s.push(Jr(f, true));
            } else if (m = A.simple.exec(t)) {
                t = t.substring(m[0].length);
                f = "*";
                s.push(Jr(f, true));
                s.push(Jr(m));
            } else {
                throw SyntaxError("Invalid selector.");
            }
            while(m = A.simple.exec(t)){
                t = t.substring(m[0].length);
                s.push(Jr(m));
            }
            if (t[0] === "!") {
                t = t.substring(1);
                c = Pl();
                c.qname = f;
                s.push(c.simple);
            }
            if (m = A.ref.exec(t)) {
                t = t.substring(m[0].length);
                _ = cr.ref(dn(s), lt(m[1]));
                a.push(_.combinator);
                s = [];
                continue;
            }
            if (m = A.combinator.exec(t)) {
                t = t.substring(m[0].length);
                p = m[1] || m[2] || m[3];
                if (p === ",") {
                    a.push(cr.noop(dn(s)));
                    break;
                }
            } else {
                p = "noop";
            }
            if (!cr[p]) {
                throw SyntaxError("Bad combinator.");
            }
            a.push(cr[p](dn(s)));
            s = [];
        }
        r = Bl(a);
        r.qname = f;
        r.sel = t;
        if (c) {
            c.lname = r.qname;
            c.test = r;
            c.qname = c.qname;
            c.sel = r.sel;
            r = c;
        }
        if (_) {
            _.test = r;
            _.qname = r.qname;
            _.sel = r.sel;
            r = _;
        }
        return r;
    };
    var Jr = (e, t)=>{
        if (t) {
            if (e === "*") {
                return ce["*"];
            }
            return ce.type(e);
        }
        if (e[1]) {
            if (e[1][0] === ".") {
                return ce.attr("class", "~=", lt(e[1].substring(1)), false);
            }
            return ce.attr("id", "=", lt(e[1].substring(1)), false);
        }
        if (e[2]) {
            if (e[3]) {
                return ce[lt(e[2])](Es(e[3]));
            }
            return ce[lt(e[2])];
        }
        if (e[4]) {
            let r = e[6];
            const a = /["'\s]\s*I$/i.test(r);
            if (a) {
                r = r.replace(/\s*I$/i, "");
            }
            return ce.attr(lt(e[4]), e[5] || "-", Es(r), a);
        }
        throw SyntaxError("Unknown Selector.");
    };
    var dn = (e)=>{
        const e_length = e.length;
        let r;
        if (e_length < 2) {
            return e[0];
        }
        return function(a) {
            if (!a) {
                return;
            }
            for(r = 0; r < e_length; r++){
                if (!e[r](a)) {
                    return;
                }
            }
            return true;
        };
    };
    var Bl = (e)=>{
        if (e.length < 2) {
            return function(t) {
                return !!e[0](t);
            };
        }
        return function(t) {
            let e_length = e.length;
            while(e_length--){
                if (!(t = e[e_length](t))) {
                    return;
                }
            }
            return true;
        };
    };
    var Pl = ()=>{
        let e;
        function t(r) {
            const r_ownerDocument = r.ownerDocument;
            const s = r_ownerDocument.getElementsByTagName(t.lname);
            let s_length = s.length;
            while(s_length--){
                if (t.test(s[s_length]) && e === r) {
                    e = null;
                    return true;
                }
            }
            e = null;
        }
        t.simple = function(r) {
            e = r;
            return true;
        };
        return t;
    };
    var hn = (e)=>{
        let t = or(e);
        const r = [
            t
        ];
        while(t.sel){
            t = or(t.sel);
            r.push(t);
        }
        if (r.length < 2) {
            return t;
        }
        return function(a) {
            const r_length = r.length;
            let c = 0;
            for(; c < r_length; c++){
                if (r[c](a)) {
                    return true;
                }
            }
        };
    };
    var ys = (e, t)=>{
        const r = [];
        let a = or(e);
        let s = t.getElementsByTagName(a.qname);
        let c = 0;
        let f;
        while(f = s[c++]){
            if (a(f)) {
                r.push(f);
            }
        }
        if (a.sel) {
            while(a.sel){
                a = or(a.sel);
                s = t.getElementsByTagName(a.qname);
                c = 0;
                while(f = s[c++]){
                    if (a(f) && Hl.call(r, f) === -1) {
                        r.push(f);
                    }
                }
            }
            r.sort(Il);
        }
        return r;
    };
    Ns.exports = Ot = function(e, t) {
        let r;
        let a;
        if (t.nodeType !== 11 && e.indexOf(" ") === -1) {
            if (e[0] === "#" && t.rooted && /^#[A-Z_][-A-Z0-9_]*$/i.test(e)) {
                if (t.doc._hasMultipleElementsWithId) {
                    r = e.substring(1);
                    if (!t.doc._hasMultipleElementsWithId(r)) {
                        a = t.doc.getElementById(r);
                        if (a) {
                            return [
                                a
                            ];
                        }
                        return [];
                    }
                }
            }
            if (e[0] === "." && /^\.\w+$/.test(e)) {
                return t.getElementsByClassName(e.substring(1));
            }
            if (/^\w+$/.test(e)) {
                return t.getElementsByTagName(e);
            }
        }
        return ys(e, t);
    };
    Ot.selectors = ce;
    Ot.operators = Ts;
    Ot.combinators = cr;
    Ot.matches = function(e, sel) {
        let r = {
            sel
        };
        do {
            r = or(r.sel);
            if (r(e)) {
                return true;
            }
        }while (r.sel)
        return false;
    };
});
const ra = C(function(bd, ws) {
    const Ul = xe();
    const Vl = Ya();
    const pn = (doc, t)=>{
        const r = doc.createDocumentFragment();
        for (const s of t){
            const c = s instanceof Ul;
            r.appendChild(c ? s : doc.createTextNode(String(s)));
        }
        return r;
    };
    const jl = {
        after: {
            value: function() {
                const t = Array.prototype.slice.call(arguments);
                const parentNode = this.parentNode;
                let nextSibling = this.nextSibling;
                if (parentNode === null) {
                    return;
                }
                while(nextSibling && t.some((c)=>c === nextSibling)){
                    nextSibling = nextSibling.nextSibling;
                }
                const s = pn(this.doc, t);
                parentNode.insertBefore(s, nextSibling);
            }
        },
        before: {
            value: function() {
                const t = Array.prototype.slice.call(arguments);
                const parentNode = this.parentNode;
                let previousSibling = this.previousSibling;
                if (parentNode === null) {
                    return;
                }
                while(previousSibling && t.some((f)=>f === previousSibling)){
                    previousSibling = previousSibling.previousSibling;
                }
                const s = pn(this.doc, t);
                const c = previousSibling ? previousSibling.nextSibling : parentNode.firstChild;
                parentNode.insertBefore(s, c);
            }
        },
        remove: {
            value: function() {
                if (this.parentNode === null) {
                    return;
                }
                if (this.doc) {
                    this.doc._preremoveNodeIterators(this);
                    if (this.rooted) {
                        this.doc.mutateRemove(this);
                    }
                }
                this._remove();
                this.parentNode = null;
            }
        },
        _remove: {
            value: function() {
                const parentNode = this.parentNode;
                if (parentNode === null) {
                    return;
                }
                if (parentNode._childNodes) {
                    parentNode._childNodes.splice(this.index, 1);
                } else if (parentNode._firstChild === this) {
                    if (this._nextSibling === this) {
                        parentNode._firstChild = null;
                    } else {
                        parentNode._firstChild = this._nextSibling;
                    }
                }
                Vl.remove(this);
                parentNode.modify();
            }
        },
        replaceWith: {
            value: function() {
                const t = Array.prototype.slice.call(arguments);
                const parentNode = this.parentNode;
                let nextSibling = this.nextSibling;
                if (parentNode === null) {
                    return;
                }
                while(nextSibling && t.some((c)=>c === nextSibling)){
                    nextSibling = nextSibling.nextSibling;
                }
                const s = pn(this.doc, t);
                if (this.parentNode === parentNode) {
                    parentNode.replaceChild(s, this);
                } else {
                    parentNode.insertBefore(s, nextSibling);
                }
            }
        }
    };
    ws.exports = jl;
});
const mn = C(function(Ed, As) {
    const Ss = xe();
    const Gl = {
        nextElementSibling: {
            get: function() {
                if (this.parentNode) {
                    for(let e = this.nextSibling; e !== null; e = e.nextSibling){
                        if (e.nodeType === Ss.ELEMENT_NODE) {
                            return e;
                        }
                    }
                }
                return null;
            }
        },
        previousElementSibling: {
            get: function() {
                if (this.parentNode) {
                    for(let e = this.previousSibling; e !== null; e = e.previousSibling){
                        if (e.nodeType === Ss.ELEMENT_NODE) {
                            return e;
                        }
                    }
                }
                return null;
            }
        }
    };
    As.exports = Gl;
});
const gn = C(function(_d, Ds) {
    Ds.exports = Cs;
    const qt = ee();
    function Cs(e) {
        this.element = e;
    }
    Object.defineProperties(Cs.prototype, {
        length: {
            get: qt.shouldOverride
        },
        item: {
            value: qt.shouldOverride
        },
        getNamedItem: {
            value: function(t) {
                return this.element.getAttributeNode(t);
            }
        },
        getNamedItemNS: {
            value: function(t, r) {
                return this.element.getAttributeNodeNS(t, r);
            }
        },
        setNamedItem: {
            value: qt.nyi
        },
        setNamedItemNS: {
            value: qt.nyi
        },
        removeNamedItem: {
            value: function(t) {
                const r = this.element.getAttributeNode(t);
                if (r) {
                    this.element.removeAttribute(t);
                    return r;
                }
                qt.NotFoundError();
            }
        },
        removeNamedItemNS: {
            value: function(t, r) {
                const a = this.element.getAttributeNodeNS(t, r);
                if (a) {
                    this.element.removeAttributeNS(t, r);
                    return a;
                }
                qt.NotFoundError();
            }
        }
    });
});
const Ft = C(function(vd, Is) {
    Is.exports = xt;
    const bn = $r();
    const Y = ee();
    const Y_NAMESPACE = Y.NAMESPACE;
    const na = un();
    var ke = xe();
    const En = yt();
    const zl = Qa();
    const aa = ps();
    const Ht = Wr();
    const Wl = xn();
    const _n = ta();
    var Ls = Qr();
    const Xl = ra();
    const Kl = mn();
    const Ms = gn();
    const ks = Object.create(null);
    function xt(e, t, r, a) {
        Ls.call(this);
        this.nodeType = ke.ELEMENT_NODE;
        this.ownerDocument = e;
        this.localName = t;
        this.namespaceURI = r;
        this.prefix = a;
        this._tagName = undefined;
        this._attrsByQName = Object.create(null);
        this._attrsByLName = Object.create(null);
        this._attrKeys = [];
    }
    function vn(e, t) {
        if (e.nodeType === ke.TEXT_NODE) {
            t.push(e._data);
        } else {
            for(let r = 0, a = e.childNodes.length; r < a; r++){
                vn(e.childNodes[r], t);
            }
        }
    }
    xt.prototype = Object.create(Ls.prototype, {
        isHTML: {
            get: function() {
                return this.namespaceURI === Y_NAMESPACE.HTML && this.ownerDocument.isHTML;
            }
        },
        tagName: {
            get: function() {
                if (this._tagName === undefined) {
                    let t;
                    if (this.prefix === null) {
                        t = this.localName;
                    } else {
                        t = `${this.prefix}:${this.localName}`;
                    }
                    if (this.isHTML) {
                        let r = ks[t];
                        if (!r) {
                            ks[t] = r = Y.toASCIIUpperCase(t);
                        }
                        t = r;
                    }
                    this._tagName = t;
                }
                return this._tagName;
            }
        },
        nodeName: {
            get: function() {
                return this.tagName;
            }
        },
        nodeValue: {
            get: function() {
                return null;
            },
            set: function() {}
        },
        textContent: {
            get: function() {
                const e = [];
                vn(this, e);
                return e.join("");
            },
            set: function(e) {
                this.removeChildren();
                if (e !== null && e !== undefined && e !== "") {
                    this._appendChild(this.ownerDocument.createTextNode(e));
                }
            }
        },
        innerText: {
            get: function() {
                const e = [];
                vn(this, e);
                return e.join("").replace(/[ \t\n\f\r]+/g, " ").trim();
            },
            set: function(e) {
                this.removeChildren();
                if (e !== null && e !== undefined && e !== "") {
                    this._appendChild(this.ownerDocument.createTextNode(e));
                }
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize();
            },
            set: Y.nyi
        },
        outerHTML: {
            get: function() {
                return zl.serializeOne(this, {
                    nodeType: 0
                });
            },
            set: function(e) {
                const ownerDocument = this.ownerDocument;
                let parentNode = this.parentNode;
                if (parentNode === null) {
                    return;
                }
                if (parentNode.nodeType === ke.DOCUMENT_NODE) {
                    Y.NoModificationAllowedError();
                }
                if (parentNode.nodeType === ke.DOCUMENT_FRAGMENT_NODE) {
                    parentNode = parentNode.ownerDocument.createElement("body");
                }
                const a = ownerDocument.implementation.mozHTMLParser(ownerDocument._address, parentNode);
                a.parse(e === null ? "" : String(e), true);
                this.replaceWith(a._asDocumentFragment());
            }
        },
        _insertAdjacent: {
            value: function(t, r) {
                let a = false;
                switch(t){
                    case "beforebegin":
                        a = true;
                    case "afterend":
                        const s = this.parentNode;
                        if (s === null) {
                            return null;
                        }
                        return s.insertBefore(r, a ? this : this.nextSibling);
                    case "afterbegin":
                        a = true;
                    case "beforeend":
                        return this.insertBefore(r, a ? this.firstChild : null);
                    default:
                        return Y.SyntaxError();
                }
            }
        },
        insertAdjacentElement: {
            value: function(t, r) {
                if (r.nodeType !== ke.ELEMENT_NODE) {
                    throw TypeError("not an element");
                }
                t = Y.toASCIILowerCase(String(t));
                return this._insertAdjacent(t, r);
            }
        },
        insertAdjacentText: {
            value: function(t, r) {
                const a = this.ownerDocument.createTextNode(r);
                t = Y.toASCIILowerCase(String(t));
                this._insertAdjacent(t, a);
            }
        },
        insertAdjacentHTML: {
            value: function(t, r) {
                t = Y.toASCIILowerCase(String(t));
                r = String(r);
                let a;
                switch(t){
                    case "beforebegin":
                    case "afterend":
                        a = this.parentNode;
                        if (a === null || a.nodeType === ke.DOCUMENT_NODE) {
                            Y.NoModificationAllowedError();
                        }
                        break;
                    case "afterbegin":
                    case "beforeend":
                        a = this;
                        break;
                    default:
                        Y.SyntaxError();
                }
                if (!(a instanceof xt) || a.ownerDocument.isHTML && a.localName === "html" && a.namespaceURI === Y_NAMESPACE.HTML) {
                    a = a.ownerDocument.createElementNS(Y_NAMESPACE.HTML, "body");
                }
                const s = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, a);
                s.parse(r, true);
                this._insertAdjacent(t, s._asDocumentFragment());
            }
        },
        children: {
            get: function() {
                if (!this._children) {
                    this._children = new Rs(this);
                }
                return this._children;
            }
        },
        attributes: {
            get: function() {
                if (!this._attributes) {
                    this._attributes = new yn(this);
                }
                return this._attributes;
            }
        },
        firstElementChild: {
            get: function() {
                for(let e = this.firstChild; e !== null; e = e.nextSibling){
                    if (e.nodeType === ke.ELEMENT_NODE) {
                        return e;
                    }
                }
                return null;
            }
        },
        lastElementChild: {
            get: function() {
                for(let e = this.lastChild; e !== null; e = e.previousSibling){
                    if (e.nodeType === ke.ELEMENT_NODE) {
                        return e;
                    }
                }
                return null;
            }
        },
        childElementCount: {
            get: function() {
                return this.children.length;
            }
        },
        nextElement: {
            value: function(e) {
                if (!e) {
                    e = this.ownerDocument.documentElement;
                }
                let firstElementChild = this.firstElementChild;
                if (!firstElementChild) {
                    if (this === e) {
                        return null;
                    }
                    firstElementChild = this.nextElementSibling;
                }
                if (firstElementChild) {
                    return firstElementChild;
                }
                for(let r = this.parentElement; r && r !== e; r = r.parentElement){
                    firstElementChild = r.nextElementSibling;
                    if (firstElementChild) {
                        return firstElementChild;
                    }
                }
                return null;
            }
        },
        getElementsByTagName: {
            value: function(t) {
                let r;
                if (!t) {
                    return new En;
                }
                if (t === "*") {
                    r = function() {
                        return true;
                    };
                } else if (this.isHTML) {
                    r = Yl(t);
                } else {
                    r = Tn(t);
                }
                return new aa(this, r);
            }
        },
        getElementsByTagNameNS: {
            value: function(t, r) {
                let a;
                if (t === "*" && r === "*") {
                    a = function() {
                        return true;
                    };
                } else if (t === "*") {
                    a = Tn(r);
                } else if (r === "*") {
                    a = Ql(t);
                } else {
                    a = $l(t, r);
                }
                return new aa(this, a);
            }
        },
        getElementsByClassName: {
            value: function(t) {
                t = String(t).trim();
                if (t === "") {
                    const r = new En;
                    return r;
                }
                t = t.split(/[ \t\r\n\f]+/);
                return new aa(this, Zl(t));
            }
        },
        getElementsByName: {
            value: function(t) {
                return new aa(this, Jl(String(t)));
            }
        },
        clone: {
            value: function() {
                let t;
                if (this.namespaceURI !== Y_NAMESPACE.HTML || this.prefix || !this.ownerDocument.isHTML) {
                    t = this.ownerDocument.createElementNS(this.namespaceURI, this.prefix !== null ? `${this.prefix}:${this.localName}` : this.localName);
                } else {
                    t = this.ownerDocument.createElement(this.localName);
                }
                for(let r = 0, a = this._attrKeys.length; r < a; r++){
                    const _attrKey = this._attrKeys[r];
                    const c = this._attrsByLName[_attrKey];
                    const f = c.cloneNode();
                    f._setOwnerElement(t);
                    t._attrsByLName[_attrKey] = f;
                    t._addQName(f);
                }
                t._attrKeys = this._attrKeys.concat();
                return t;
            }
        },
        isEqual: {
            value: function(t) {
                if (this.localName !== t.localName || this.namespaceURI !== t.namespaceURI || this.prefix !== t.prefix || this._numattrs !== t._numattrs) {
                    return false;
                }
                for(let r = 0, a = this._numattrs; r < a; r++){
                    const s = this._attr(r);
                    if (!t.hasAttributeNS(s.namespaceURI, s.localName)) {
                        return false;
                    }
                    if (t.getAttributeNS(s.namespaceURI, s.localName) !== s.value) {
                        return false;
                    }
                }
                return true;
            }
        },
        _lookupNamespacePrefix: {
            value: function(t, r) {
                if (this.namespaceURI && this.namespaceURI === t && this.prefix !== null && r.lookupNamespaceURI(this.prefix) === t) {
                    return this.prefix;
                }
                for(let a = 0, s = this._numattrs; a < s; a++){
                    const c = this._attr(a);
                    if (c.prefix === "xmlns" && c.value === t && r.lookupNamespaceURI(c.localName) === t) {
                        return c.localName;
                    }
                }
                const parentElement = this.parentElement;
                if (parentElement) {
                    return parentElement._lookupNamespacePrefix(t, r);
                }
                return null;
            }
        },
        lookupNamespaceURI: {
            value: function(t) {
                if (t === "" || t === undefined) {
                    t = null;
                }
                if (this.namespaceURI !== null && this.prefix === t) {
                    return this.namespaceURI;
                }
                for(let r = 0, a = this._numattrs; r < a; r++){
                    const s = this._attr(r);
                    if (s.namespaceURI === Y_NAMESPACE.XMLNS) {
                        if (s.prefix === "xmlns" && s.localName === t || t === null && s.prefix === null && s.localName === "xmlns") {
                            return s.value || null;
                        }
                    }
                }
                const parentElement = this.parentElement;
                if (parentElement) {
                    return parentElement.lookupNamespaceURI(t);
                }
                return null;
            }
        },
        getAttribute: {
            value: function(t) {
                const r = this.getAttributeNode(t);
                if (r) {
                    return r.value;
                }
                return null;
            }
        },
        getAttributeNS: {
            value: function(t, r) {
                const a = this.getAttributeNodeNS(t, r);
                if (a) {
                    return a.value;
                }
                return null;
            }
        },
        getAttributeNode: {
            value: function(t) {
                t = String(t);
                if (/[A-Z]/.test(t) && this.isHTML) {
                    t = Y.toASCIILowerCase(t);
                }
                let r = this._attrsByQName[t];
                if (!r) {
                    return null;
                }
                if (Array.isArray(r)) {
                    r = r[0];
                }
                return r;
            }
        },
        getAttributeNodeNS: {
            value: function(t, r) {
                t = t === undefined || t === null ? "" : String(t);
                r = String(r);
                const a = this._attrsByLName[`${t}|${r}`];
                if (a) {
                    return a;
                }
                return null;
            }
        },
        hasAttribute: {
            value: function(t) {
                t = String(t);
                if (/[A-Z]/.test(t) && this.isHTML) {
                    t = Y.toASCIILowerCase(t);
                }
                return this._attrsByQName[t] !== undefined;
            }
        },
        hasAttributeNS: {
            value: function(t, r) {
                t = t === undefined || t === null ? "" : String(t);
                r = String(r);
                const a = `${t}|${r}`;
                return this._attrsByLName[a] !== undefined;
            }
        },
        hasAttributes: {
            value: function() {
                return this._numattrs > 0;
            }
        },
        toggleAttribute: {
            value: function(t, r) {
                t = String(t);
                if (!bn.isValidName(t)) {
                    Y.InvalidCharacterError();
                }
                if (/[A-Z]/.test(t) && this.isHTML) {
                    t = Y.toASCIILowerCase(t);
                }
                const a = this._attrsByQName[t];
                if (a === undefined) {
                    if (r === undefined || r === true) {
                        this._setAttribute(t, "");
                        return true;
                    }
                    return false;
                } else {
                    if (r === undefined || r === false) {
                        this.removeAttribute(t);
                        return false;
                    }
                    return true;
                }
            }
        },
        _setAttribute: {
            value: function(t, r) {
                let a = this._attrsByQName[t];
                let s;
                if (!a) {
                    a = this._newattr(t);
                    s = true;
                } else if (Array.isArray(a)) {
                    a = a[0];
                }
                a.value = r;
                if (this._attributes) {
                    this._attributes[t] = a;
                }
                if (s && this._newattrhook) {
                    this._newattrhook(t, r);
                }
            }
        },
        setAttribute: {
            value: function(t, r) {
                t = String(t);
                if (!bn.isValidName(t)) {
                    Y.InvalidCharacterError();
                }
                if (/[A-Z]/.test(t) && this.isHTML) {
                    t = Y.toASCIILowerCase(t);
                }
                this._setAttribute(t, String(r));
            }
        },
        _setAttributeNS: {
            value: function(t, r, a) {
                const s = r.indexOf(":");
                let c;
                let f;
                if (s < 0) {
                    c = null;
                    f = r;
                } else {
                    c = r.substring(0, s);
                    f = r.substring(s + 1);
                }
                if (t === "" || t === undefined) {
                    t = null;
                }
                const m = `${t === null ? "" : t}|${f}`;
                let p = this._attrsByLName[m];
                let _;
                if (!p) {
                    p = new ur(this, f, c, t);
                    _ = true;
                    this._attrsByLName[m] = p;
                    if (this._attributes) {
                        this._attributes[this._attrKeys.length] = p;
                    }
                    this._attrKeys.push(m);
                    this._addQName(p);
                }
                p.value = a;
                if (_ && this._newattrhook) {
                    this._newattrhook(r, a);
                }
            }
        },
        setAttributeNS: {
            value: function(t, r, a) {
                t = t === null || t === undefined || t === "" ? null : String(t);
                r = String(r);
                if (!bn.isValidQName(r)) {
                    Y.InvalidCharacterError();
                }
                const s = r.indexOf(":");
                const c = s < 0 ? null : r.substring(0, s);
                if (c !== null && t === null || c === "xml" && t !== Y_NAMESPACE.XML || (r === "xmlns" || c === "xmlns") && t !== Y_NAMESPACE.XMLNS || t === Y_NAMESPACE.XMLNS && !(r === "xmlns" || c === "xmlns")) {
                    Y.NamespaceError();
                }
                this._setAttributeNS(t, r, String(a));
            }
        },
        setAttributeNode: {
            value: function(t) {
                if (t.ownerElement !== null && t.ownerElement !== this) {
                    throw new Ht(Ht.INUSE_ATTRIBUTE_ERR);
                }
                let r = null;
                let a = this._attrsByQName[t.name];
                if (a) {
                    if (!Array.isArray(a)) {
                        a = [
                            a
                        ];
                    }
                    if (a.some((s)=>s === t)) {
                        return t;
                    } else if (t.ownerElement !== null) {
                        throw new Ht(Ht.INUSE_ATTRIBUTE_ERR);
                    }
                    a.forEach(function(s) {
                        this.removeAttributeNode(s);
                    }, this);
                    r = a[0];
                }
                this.setAttributeNodeNS(t);
                return r;
            }
        },
        setAttributeNodeNS: {
            value: function(t) {
                if (t.ownerElement !== null) {
                    throw new Ht(Ht.INUSE_ATTRIBUTE_ERR);
                }
                const t_namespaceURI = t.namespaceURI;
                const a = `${t_namespaceURI === null ? "" : t_namespaceURI}|${t.localName}`;
                const s = this._attrsByLName[a];
                if (s) {
                    this.removeAttributeNode(s);
                }
                t._setOwnerElement(this);
                this._attrsByLName[a] = t;
                if (this._attributes) {
                    this._attributes[this._attrKeys.length] = t;
                }
                this._attrKeys.push(a);
                this._addQName(t);
                if (this._newattrhook) {
                    this._newattrhook(t.name, t.value);
                }
                return s || null;
            }
        },
        removeAttribute: {
            value: function(t) {
                t = String(t);
                if (/[A-Z]/.test(t) && this.isHTML) {
                    t = Y.toASCIILowerCase(t);
                }
                let r = this._attrsByQName[t];
                if (!r) {
                    return;
                }
                if (Array.isArray(r)) {
                    if (r.length > 2) {
                        r = r.shift();
                    } else {
                        this._attrsByQName[t] = r[1];
                        r = r[0];
                    }
                } else {
                    this._attrsByQName[t] = undefined;
                }
                const r_namespaceURI = r.namespaceURI;
                const s = `${r_namespaceURI === null ? "" : r_namespaceURI}|${r.localName}`;
                this._attrsByLName[s] = undefined;
                const c = this._attrKeys.indexOf(s);
                if (this._attributes) {
                    Array.prototype.splice.call(this._attributes, c, 1);
                    this._attributes[t] = undefined;
                }
                this._attrKeys.splice(c, 1);
                const r_onchange = r.onchange;
                r._setOwnerElement(null);
                if (r_onchange) {
                    r_onchange.call(r, this, r.localName, r.value, null);
                }
                if (this.rooted) {
                    this.ownerDocument.mutateRemoveAttr(r);
                }
            }
        },
        removeAttributeNS: {
            value: function(t, r) {
                t = t === undefined || t === null ? "" : String(t);
                r = String(r);
                const a = `${t}|${r}`;
                const s = this._attrsByLName[a];
                if (!s) {
                    return;
                }
                this._attrsByLName[a] = undefined;
                const c = this._attrKeys.indexOf(a);
                if (this._attributes) {
                    Array.prototype.splice.call(this._attributes, c, 1);
                }
                this._attrKeys.splice(c, 1);
                this._removeQName(s);
                const s_onchange = s.onchange;
                s._setOwnerElement(null);
                if (s_onchange) {
                    s_onchange.call(s, this, s.localName, s.value, null);
                }
                if (this.rooted) {
                    this.ownerDocument.mutateRemoveAttr(s);
                }
            }
        },
        removeAttributeNode: {
            value: function(t) {
                const t_namespaceURI = t.namespaceURI;
                const a = `${t_namespaceURI === null ? "" : t_namespaceURI}|${t.localName}`;
                if (this._attrsByLName[a] !== t) {
                    Y.NotFoundError();
                }
                this.removeAttributeNS(t_namespaceURI, t.localName);
                return t;
            }
        },
        getAttributeNames: {
            value: function() {
                const t = this;
                return this._attrKeys.map((r)=>t._attrsByLName[r].name);
            }
        },
        _getattr: {
            value: function(t) {
                const r = this._attrsByQName[t];
                if (r) {
                    return r.value;
                }
                return null;
            }
        },
        _setattr: {
            value: function(t, r) {
                let a = this._attrsByQName[t];
                let s;
                if (!a) {
                    a = this._newattr(t);
                    s = true;
                }
                a.value = String(r);
                if (this._attributes) {
                    this._attributes[t] = a;
                }
                if (s && this._newattrhook) {
                    this._newattrhook(t, r);
                }
            }
        },
        _newattr: {
            value: function(t) {
                const r = new ur(this, t, null, null);
                const a = `|${t}`;
                this._attrsByQName[t] = r;
                this._attrsByLName[a] = r;
                if (this._attributes) {
                    this._attributes[this._attrKeys.length] = r;
                }
                this._attrKeys.push(a);
                return r;
            }
        },
        _addQName: {
            value: function(e) {
                const e_name = e.name;
                const r = this._attrsByQName[e_name];
                if (!r) {
                    this._attrsByQName[e_name] = e;
                } else if (Array.isArray(r)) {
                    r.push(e);
                } else {
                    this._attrsByQName[e_name] = [
                        r,
                        e
                    ];
                }
                if (this._attributes) {
                    this._attributes[e_name] = e;
                }
            }
        },
        _removeQName: {
            value: function(e) {
                const e_name = e.name;
                const r = this._attrsByQName[e_name];
                if (Array.isArray(r)) {
                    const a = r.indexOf(e);
                    Y.assert(a !== -1);
                    if (r.length === 2) {
                        this._attrsByQName[e_name] = r[1 - a];
                        if (this._attributes) {
                            this._attributes[e_name] = this._attrsByQName[e_name];
                        }
                    } else {
                        r.splice(a, 1);
                        if (this._attributes && this._attributes[e_name] === e) {
                            this._attributes[e_name] = r[0];
                        }
                    }
                } else {
                    Y.assert(r === e);
                    this._attrsByQName[e_name] = undefined;
                    if (this._attributes) {
                        this._attributes[e_name] = undefined;
                    }
                }
            }
        },
        _numattrs: {
            get: function() {
                return this._attrKeys.length;
            }
        },
        _attr: {
            value: function(e) {
                return this._attrsByLName[this._attrKeys[e]];
            }
        },
        id: na.property({
            name: "id"
        }),
        className: na.property({
            name: "class"
        }),
        classList: {
            get: function() {
                const e = this;
                if (this._classList) {
                    return this._classList;
                }
                const t = new Wl(function() {
                    return e.className || "";
                }, function(r) {
                    e.className = r;
                });
                this._classList = t;
                return t;
            },
            set: function(e) {
                this.className = e;
            }
        },
        matches: {
            value: function(e) {
                return _n.matches(this, e);
            }
        },
        closest: {
            value: function(e) {
                let t = this;
                do {
                    if (t.matches && t.matches(e)) {
                        return t;
                    }
                    t = t.parentElement || t.parentNode;
                }while (t !== null && t.nodeType === ke.ELEMENT_NODE)
                return null;
            }
        },
        querySelector: {
            value: function(e) {
                return _n(e, this)[0];
            }
        },
        querySelectorAll: {
            value: function(e) {
                const t = _n(e, this);
                if (t.item) {
                    return t;
                }
                return new En(t);
            }
        }
    });
    Object.defineProperties(xt.prototype, Xl);
    Object.defineProperties(xt.prototype, Kl);
    na.registerChangeHandler(xt, "id", function(e, t, r, a) {
        if (e.rooted) {
            if (r) {
                e.ownerDocument.delId(r, e);
            }
            if (a) {
                e.ownerDocument.addId(a, e);
            }
        }
    });
    na.registerChangeHandler(xt, "class", function(e, t, r, a) {
        if (e._classList) {
            e._classList._update();
        }
    });
    function ur(e, t, r, a, s) {
        this.localName = t;
        this.prefix = r === null || r === "" ? null : `${r}`;
        this.namespaceURI = a === null || a === "" ? null : `${a}`;
        this.data = s;
        this._setOwnerElement(e);
    }
    ur.prototype = Object.create(Object.prototype, {
        ownerElement: {
            get: function() {
                return this._ownerElement;
            }
        },
        _setOwnerElement: {
            value: function(t) {
                this._ownerElement = t;
                if (this.prefix === null && this.namespaceURI === null && t) {
                    this.onchange = t._attributeChangeHandlers[this.localName];
                } else {
                    this.onchange = null;
                }
            }
        },
        name: {
            get: function() {
                if (this.prefix) {
                    return `${this.prefix}:${this.localName}`;
                }
                return this.localName;
            }
        },
        specified: {
            get: function() {
                return true;
            }
        },
        value: {
            get: function() {
                return this.data;
            },
            set: function(e) {
                const data = this.data;
                e = e === undefined ? "" : `${e}`;
                if (e === data) {
                    return;
                }
                this.data = e;
                if (this.ownerElement) {
                    if (this.onchange) {
                        this.onchange(this.ownerElement, this.localName, data, e);
                    }
                    if (this.ownerElement.rooted) {
                        this.ownerElement.ownerDocument.mutateAttr(this, data);
                    }
                }
            }
        },
        cloneNode: {
            value: function(t) {
                return new ur(null, this.localName, this.prefix, this.namespaceURI, this.data);
            }
        },
        nodeType: {
            get: function() {
                return ke.ATTRIBUTE_NODE;
            }
        },
        nodeName: {
            get: function() {
                return this.name;
            }
        },
        nodeValue: {
            get: function() {
                return this.value;
            },
            set: function(e) {
                this.value = e;
            }
        },
        textContent: {
            get: function() {
                return this.value;
            },
            set: function(e) {
                if (e === null || e === undefined) {
                    e = "";
                }
                this.value = e;
            }
        },
        innerText: {
            get: function() {
                return this.value;
            },
            set: function(e) {
                if (e === null || e === undefined) {
                    e = "";
                }
                this.value = e;
            }
        }
    });
    xt._Attr = ur;
    function yn(e) {
        Ms.call(this, e);
        for(const t in e._attrsByQName){
            this[t] = e._attrsByQName[t];
        }
        for(let r = 0; r < e._attrKeys.length; r++){
            this[r] = e._attrsByLName[e._attrKeys[r]];
        }
    }
    yn.prototype = Object.create(Ms.prototype, {
        length: {
            get: function() {
                return this.element._attrKeys.length;
            },
            set: function() {}
        },
        item: {
            value: function(e) {
                e = e >>> 0;
                if (e >= this.length) {
                    return null;
                }
                return this.element._attrsByLName[this.element._attrKeys[e]];
            }
        }
    });
    if (globalThis.Symbol?.iterator) {
        yn.prototype[globalThis.Symbol.iterator] = function() {
            let e = 0;
            const length = this.length;
            const r = this;
            return {
                next: function() {
                    if (e < length) {
                        return {
                            value: r.item(e++)
                        };
                    }
                    return {
                        done: true
                    };
                }
            };
        };
    }
    function Rs(e) {
        this.element = e;
        this.updateCache();
    }
    Rs.prototype = Object.create(Object.prototype, {
        length: {
            get: function() {
                this.updateCache();
                return this.childrenByNumber.length;
            }
        },
        item: {
            value: function(t) {
                this.updateCache();
                return this.childrenByNumber[t] || null;
            }
        },
        namedItem: {
            value: function(t) {
                this.updateCache();
                return this.childrenByName[t] || null;
            }
        },
        namedItems: {
            get: function() {
                this.updateCache();
                return this.childrenByName;
            }
        },
        updateCache: {
            value: function() {
                const t = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/;
                if (this.lastModTime !== this.element.lastModTime) {
                    this.lastModTime = this.element.lastModTime;
                    const r = this.childrenByNumber && this.childrenByNumber.length || 0;
                    for(let a = 0; a < r; a++){
                        this[a] = undefined;
                    }
                    this.childrenByNumber = [];
                    this.childrenByName = Object.create(null);
                    for(let s = this.element.firstChild; s !== null; s = s.nextSibling){
                        if (s.nodeType === ke.ELEMENT_NODE) {
                            this[this.childrenByNumber.length] = s;
                            this.childrenByNumber.push(s);
                            const c = s.getAttribute("id");
                            if (c && !this.childrenByName[c]) {
                                this.childrenByName[c] = s;
                            }
                            const f = s.getAttribute("name");
                            if (f && this.element.namespaceURI === Y_NAMESPACE.HTML && t.test(this.element.localName) && !this.childrenByName[f]) {
                                this.childrenByName[c] = s;
                            }
                        }
                    }
                }
            }
        }
    });
    function Tn(e) {
        return function(t) {
            return t.localName === e;
        };
    }
    function Yl(e) {
        const t = Y.toASCIILowerCase(e);
        if (t === e) {
            return Tn(e);
        }
        return function(r) {
            if (r.isHTML) {
                return r.localName === t;
            }
            return r.localName === e;
        };
    }
    function Ql(e) {
        return function(t) {
            return t.namespaceURI === e;
        };
    }
    function $l(e, t) {
        return function(r) {
            return r.namespaceURI === e && r.localName === t;
        };
    }
    function Zl(e) {
        return function(t) {
            return e.every((r)=>t.classList.contains(r));
        };
    }
    function Jl(e) {
        return function(t) {
            if (t.namespaceURI !== Y_NAMESPACE.HTML) {
                return false;
            }
            return t.getAttribute("name") === e;
        };
    }
});
const Nn = C(function(Td, Bs) {
    Bs.exports = Fs;
    var qs = xe();
    const ex = yt();
    const Hs = ee();
    const { HierarchyRequestError, NotFoundError } = Hs;
    function Fs() {
        qs.call(this);
    }
    Fs.prototype = Object.create(qs.prototype, {
        hasChildNodes: {
            value: function() {
                return false;
            }
        },
        firstChild: {
            value: null
        },
        lastChild: {
            value: null
        },
        insertBefore: {
            value: function(e, t) {
                if (!e.nodeType) {
                    throw TypeError("not a node");
                }
                HierarchyRequestError();
            }
        },
        replaceChild: {
            value: function(e, t) {
                if (!e.nodeType) {
                    throw TypeError("not a node");
                }
                HierarchyRequestError();
            }
        },
        removeChild: {
            value: function(e) {
                if (!e.nodeType) {
                    throw TypeError("not a node");
                }
                NotFoundError();
            }
        },
        removeChildren: {
            value: function() {}
        },
        childNodes: {
            get: function() {
                if (!this._childNodes) {
                    this._childNodes = new ex;
                }
                return this._childNodes;
            }
        }
    });
});
const lr = C(function(yd, Vs) {
    Vs.exports = ia;
    var Us = Nn();
    const Ps = ee();
    const rx = ra();
    const ax = mn();
    function ia() {
        Us.call(this);
    }
    ia.prototype = Object.create(Us.prototype, {
        substringData: {
            value: function(t, r) {
                if (arguments.length < 2) {
                    throw TypeError("Not enough arguments");
                }
                t = t >>> 0;
                r = r >>> 0;
                if (t > this.data.length || t < 0 || r < 0) {
                    Ps.IndexSizeError();
                }
                return this.data.substring(t, t + r);
            }
        },
        appendData: {
            value: function(t) {
                if (arguments.length < 1) {
                    throw TypeError("Not enough arguments");
                }
                this.data += String(t);
            }
        },
        insertData: {
            value: function(t, r) {
                return this.replaceData(t, 0, r);
            }
        },
        deleteData: {
            value: function(t, r) {
                return this.replaceData(t, r, "");
            }
        },
        replaceData: {
            value: function(t, r, a) {
                const data = this.data;
                const s_length = data.length;
                t = t >>> 0;
                r = r >>> 0;
                a = String(a);
                if (t > s_length || t < 0) {
                    Ps.IndexSizeError();
                }
                if (t + r > s_length) {
                    r = s_length - t;
                }
                const f = data.substring(0, t);
                const m = data.substring(t + r);
                this.data = f + a + m;
            }
        },
        isEqual: {
            value: function(t) {
                return this._data === t._data;
            }
        },
        length: {
            get: function() {
                return this.data.length;
            }
        }
    });
    Object.defineProperties(ia.prototype, rx);
    Object.defineProperties(ia.prototype, ax);
});
const Sn = C(function(Nd, Ws) {
    Ws.exports = wn;
    const js = ee();
    var Gs = xe();
    var zs = lr();
    function wn(e, t) {
        zs.call(this);
        this.nodeType = Gs.TEXT_NODE;
        this.ownerDocument = e;
        this._data = t;
        this._index = undefined;
    }
    const xr = {
        get: function() {
            return this._data;
        },
        set: function(e) {
            if (e === null || e === undefined) {
                e = "";
            } else {
                e = String(e);
            }
            if (e === this._data) {
                return;
            }
            this._data = e;
            if (this.rooted) {
                this.ownerDocument.mutateValue(this);
            }
            if (this.parentNode && this.parentNode._textchangehook) {
                this.parentNode._textchangehook(this);
            }
        }
    };
    wn.prototype = Object.create(zs.prototype, {
        nodeName: {
            value: "#text"
        },
        nodeValue: xr,
        textContent: xr,
        innerText: xr,
        data: {
            get: xr.get,
            set: function(e) {
                xr.set.call(this, e === null ? "" : String(e));
            }
        },
        splitText: {
            value: function(t) {
                if (t > this._data.length || t < 0) {
                    js.IndexSizeError();
                }
                const r = this._data.substring(t);
                const a = this.ownerDocument.createTextNode(r);
                this.data = this.data.substring(0, t);
                const parentNode = this.parentNode;
                if (parentNode !== null) {
                    parentNode.insertBefore(a, this.nextSibling);
                }
                return a;
            }
        },
        wholeText: {
            get: function() {
                let textContent = this.textContent;
                for(let r = this.nextSibling; r; r = r.nextSibling){
                    if (r.nodeType !== Gs.TEXT_NODE) {
                        break;
                    }
                    textContent += r.textContent;
                }
                return textContent;
            }
        },
        replaceWholeText: {
            value: js.nyi
        },
        clone: {
            value: function() {
                return new wn(this.ownerDocument, this._data);
            }
        }
    });
});
const Cn = C(function(wd, Ks) {
    Ks.exports = An;
    var nx = xe();
    var Xs = lr();
    function An(e, t) {
        Xs.call(this);
        this.nodeType = nx.COMMENT_NODE;
        this.ownerDocument = e;
        this._data = t;
    }
    const fr = {
        get: function() {
            return this._data;
        },
        set: function(e) {
            if (e === null || e === undefined) {
                e = "";
            } else {
                e = String(e);
            }
            this._data = e;
            if (this.rooted) {
                this.ownerDocument.mutateValue(this);
            }
        }
    };
    An.prototype = Object.create(Xs.prototype, {
        nodeName: {
            value: "#comment"
        },
        nodeValue: fr,
        textContent: fr,
        innerText: fr,
        data: {
            get: fr.get,
            set: function(e) {
                fr.set.call(this, e === null ? "" : String(e));
            }
        },
        clone: {
            value: function() {
                return new An(this.ownerDocument, this._data);
            }
        }
    });
});
const kn = C(function(Sd, $s) {
    $s.exports = Dn;
    var ix = xe();
    const sx = yt();
    var Qs = Qr();
    const sa = Ft();
    const cx = ta();
    const Ys = ee();
    function Dn(e) {
        Qs.call(this);
        this.nodeType = ix.DOCUMENT_FRAGMENT_NODE;
        this.ownerDocument = e;
    }
    Dn.prototype = Object.create(Qs.prototype, {
        nodeName: {
            value: "#document-fragment"
        },
        nodeValue: {
            get: function() {
                return null;
            },
            set: function() {}
        },
        textContent: Object.getOwnPropertyDescriptor(sa.prototype, "textContent"),
        innerText: Object.getOwnPropertyDescriptor(sa.prototype, "innerText"),
        querySelector: {
            value: function(e) {
                const t = this.querySelectorAll(e);
                if (t.length) {
                    return t[0];
                }
                return null;
            }
        },
        querySelectorAll: {
            value: function(e) {
                const t = Object.create(this);
                t.isHTML = true;
                t.getElementsByTagName = sa.prototype.getElementsByTagName;
                t.nextElement = Object.getOwnPropertyDescriptor(sa.prototype, "firstElementChild").get;
                const r = cx(e, t);
                if (r.item) {
                    return r;
                }
                return new sx(r);
            }
        },
        clone: {
            value: function() {
                return new Dn(this.ownerDocument);
            }
        },
        isEqual: {
            value: function(t) {
                return true;
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize();
            },
            set: Ys.nyi
        },
        outerHTML: {
            get: function() {
                return this.serialize();
            },
            set: Ys.nyi
        }
    });
});
const Mn = C(function(Ad, Js) {
    Js.exports = Ln;
    var ox = xe();
    var Zs = lr();
    function Ln(e, t, r) {
        Zs.call(this);
        this.nodeType = ox.PROCESSING_INSTRUCTION_NODE;
        this.ownerDocument = e;
        this.target = t;
        this._data = r;
    }
    const dr = {
        get: function() {
            return this._data;
        },
        set: function(e) {
            if (e === null || e === undefined) {
                e = "";
            } else {
                e = String(e);
            }
            this._data = e;
            if (this.rooted) {
                this.ownerDocument.mutateValue(this);
            }
        }
    };
    Ln.prototype = Object.create(Zs.prototype, {
        nodeName: {
            get: function() {
                return this.target;
            }
        },
        nodeValue: dr,
        textContent: dr,
        innerText: dr,
        data: {
            get: dr.get,
            set: function(e) {
                dr.set.call(this, e === null ? "" : String(e));
            }
        },
        clone: {
            value: function() {
                return new Ln(this.ownerDocument, this.target, this._data);
            }
        },
        isEqual: {
            value: function(t) {
                return this.target === t.target && this._data === t._data;
            }
        }
    });
});
const hr = C(function(Cd, e0) {
    const Rn = {
        FILTER_ACCEPT: 1,
        FILTER_REJECT: 2,
        FILTER_SKIP: 3,
        SHOW_ALL: 4294967295,
        SHOW_ELEMENT: 1,
        SHOW_ATTRIBUTE: 2,
        SHOW_TEXT: 4,
        SHOW_CDATA_SECTION: 8,
        SHOW_ENTITY_REFERENCE: 16,
        SHOW_ENTITY: 32,
        SHOW_PROCESSING_INSTRUCTION: 64,
        SHOW_COMMENT: 128,
        SHOW_DOCUMENT: 256,
        SHOW_DOCUMENT_TYPE: 512,
        SHOW_DOCUMENT_FRAGMENT: 1024,
        SHOW_NOTATION: 2048
    };
    e0.exports = Rn.constructor = Rn.prototype = Rn;
});
const On = C(function(kd, r0) {
    const Dd = r0.exports = {
        nextSkippingChildren,
        nextAncestorSibling,
        next,
        previous,
        deepLastChild
    };
    function nextSkippingChildren(e, t) {
        if (e === t) {
            return null;
        }
        if (e.nextSibling !== null) {
            return e.nextSibling;
        }
        return nextAncestorSibling(e, t);
    }
    function nextAncestorSibling(e, t) {
        for(e = e.parentNode; e !== null; e = e.parentNode){
            if (e === t) {
                return null;
            }
            if (e.nextSibling !== null) {
                return e.nextSibling;
            }
        }
        return null;
    }
    function next(e, t) {
        let e_firstChild = e.firstChild;
        if (e_firstChild !== null) {
            return e_firstChild;
        }
        if (e === t) {
            return null;
        }
        e_firstChild = e.nextSibling;
        if (e_firstChild !== null) {
            return e_firstChild;
        }
        return nextAncestorSibling(e, t);
    }
    function deepLastChild(e) {
        while(e.lastChild){
            e = e.lastChild;
        }
        return e;
    }
    function previous(e, t) {
        let e_previousSibling = e.previousSibling;
        if (e_previousSibling !== null) {
            return deepLastChild(e_previousSibling);
        }
        e_previousSibling = e.parentNode;
        if (e_previousSibling === t) {
            return null;
        }
        return e_previousSibling;
    }
});
const u0 = C(function(Ld, o0) {
    o0.exports = c0;
    const fx = xe();
    const fe = hr();
    const a0 = On();
    var s0 = ee();
    const qn = {
        first: "firstChild",
        last: "lastChild",
        next: "firstChild",
        previous: "lastChild"
    };
    const Hn = {
        first: "nextSibling",
        last: "previousSibling",
        next: "nextSibling",
        previous: "previousSibling"
    };
    function n0(e, t) {
        let r;
        let a;
        let s;
        let c;
        let f;
        a = e._currentNode[qn[t]];
        while(a !== null){
            c = e._internalFilter(a);
            if (c === fe.FILTER_ACCEPT) {
                e._currentNode = a;
                return a;
            }
            if (c === fe.FILTER_SKIP) {
                r = a[qn[t]];
                if (r !== null) {
                    a = r;
                    continue;
                }
            }
            while(a !== null){
                f = a[Hn[t]];
                if (f !== null) {
                    a = f;
                    break;
                }
                s = a.parentNode;
                if (s === null || s === e.root || s === e._currentNode) {
                    return null;
                } else {
                    a = s;
                }
            }
        }
        return null;
    }
    function i0(e, t) {
        let r;
        let a;
        let s;
        r = e._currentNode;
        if (r === e.root) {
            return null;
        }
        while(true){
            s = r[Hn[t]];
            while(s !== null){
                r = s;
                a = e._internalFilter(r);
                if (a === fe.FILTER_ACCEPT) {
                    e._currentNode = r;
                    return r;
                }
                s = r[qn[t]];
                if (a === fe.FILTER_REJECT || s === null) {
                    s = r[Hn[t]];
                }
            }
            r = r.parentNode;
            if (r === null || r === e.root) {
                return null;
            }
            if (e._internalFilter(r) === fe.FILTER_ACCEPT) {
                return null;
            }
        }
    }
    function c0(e, t, r) {
        if (!e || !e.nodeType) {
            s0.NotSupportedError();
        }
        this._root = e;
        this._whatToShow = Number(t) || 0;
        this._filter = r || null;
        this._active = false;
        this._currentNode = e;
    }
    Object.defineProperties(c0.prototype, {
        root: {
            get: function() {
                return this._root;
            }
        },
        whatToShow: {
            get: function() {
                return this._whatToShow;
            }
        },
        filter: {
            get: function() {
                return this._filter;
            }
        },
        currentNode: {
            get: function() {
                return this._currentNode;
            },
            set: function(t) {
                if (!(t instanceof fx)) {
                    throw TypeError("Not a Node");
                }
                this._currentNode = t;
            }
        },
        _internalFilter: {
            value: function(t) {
                let r;
                let a;
                if (this._active) {
                    s0.InvalidStateError();
                }
                if (!(1 << t.nodeType - 1 & this._whatToShow)) {
                    return fe.FILTER_SKIP;
                }
                a = this._filter;
                if (a === null) {
                    r = fe.FILTER_ACCEPT;
                } else {
                    this._active = true;
                    try {
                        if (typeof a === "function") {
                            r = a(t);
                        } else {
                            r = a.acceptNode(t);
                        }
                    } finally{
                        this._active = false;
                    }
                }
                return +r;
            }
        },
        parentNode: {
            value: function() {
                let _currentNode = this._currentNode;
                while(_currentNode !== this.root){
                    _currentNode = _currentNode.parentNode;
                    if (_currentNode === null) {
                        return null;
                    }
                    if (this._internalFilter(_currentNode) === fe.FILTER_ACCEPT) {
                        this._currentNode = _currentNode;
                        return _currentNode;
                    }
                }
                return null;
            }
        },
        firstChild: {
            value: function() {
                return n0(this, "first");
            }
        },
        lastChild: {
            value: function() {
                return n0(this, "last");
            }
        },
        previousSibling: {
            value: function() {
                return i0(this, "previous");
            }
        },
        nextSibling: {
            value: function() {
                return i0(this, "next");
            }
        },
        previousNode: {
            value: function() {
                let t;
                let r;
                let a;
                let s;
                t = this._currentNode;
                while(t !== this._root){
                    for(a = t.previousSibling; a; a = t.previousSibling){
                        t = a;
                        r = this._internalFilter(t);
                        if (r === fe.FILTER_REJECT) {
                            continue;
                        }
                        for(s = t.lastChild; s; s = t.lastChild){
                            t = s;
                            r = this._internalFilter(t);
                            if (r === fe.FILTER_REJECT) {
                                break;
                            }
                        }
                        if (r === fe.FILTER_ACCEPT) {
                            this._currentNode = t;
                            return t;
                        }
                    }
                    if (t === this.root || t.parentNode === null) {
                        return null;
                    }
                    t = t.parentNode;
                    if (this._internalFilter(t) === fe.FILTER_ACCEPT) {
                        this._currentNode = t;
                        return t;
                    }
                }
                return null;
            }
        },
        nextNode: {
            value: function() {
                let t;
                let r;
                let a;
                let s;
                t = this._currentNode;
                r = fe.FILTER_ACCEPT;
                e: while(true){
                    for(a = t.firstChild; a; a = t.firstChild){
                        t = a;
                        r = this._internalFilter(t);
                        if (r === fe.FILTER_ACCEPT) {
                            this._currentNode = t;
                            return t;
                        } else if (r === fe.FILTER_REJECT) {
                            break;
                        }
                    }
                    for(s = a0.nextSkippingChildren(t, this.root); s; s = a0.nextSkippingChildren(t, this.root)){
                        t = s;
                        r = this._internalFilter(t);
                        if (r === fe.FILTER_ACCEPT) {
                            this._currentNode = t;
                            return t;
                        } else if (r === fe.FILTER_SKIP) {
                            continue e;
                        }
                    }
                    return null;
                }
            }
        },
        toString: {
            value: function() {
                return "[object TreeWalker]";
            }
        }
    });
});
const p0 = C(function(Md, h0) {
    h0.exports = d0;
    const Fn = hr();
    const Bn = On();
    var f0 = ee();
    function dx(e, _root, r) {
        if (r) {
            return Bn.next(e, _root);
        } else {
            if (e === _root) {
                return null;
            }
            return Bn.previous(e, null);
        }
    }
    function l0(e, t) {
        for(; t; t = t.parentNode){
            if (e === t) {
                return true;
            }
        }
        return false;
    }
    function x0(e, t) {
        let r;
        let a;
        r = e._referenceNode;
        a = e._pointerBeforeReferenceNode;
        while(true){
            if (a === t) {
                a = !a;
            } else {
                r = dx(r, e._root, t);
                if (r === null) {
                    return null;
                }
            }
            const s = e._internalFilter(r);
            if (s === Fn.FILTER_ACCEPT) {
                break;
            }
        }
        e._referenceNode = r;
        e._pointerBeforeReferenceNode = a;
        return r;
    }
    function d0(e, t, r) {
        if (!e || !e.nodeType) {
            f0.NotSupportedError();
        }
        this._root = e;
        this._referenceNode = e;
        this._pointerBeforeReferenceNode = true;
        this._whatToShow = Number(t) || 0;
        this._filter = r || null;
        this._active = false;
        e.doc._attachNodeIterator(this);
    }
    Object.defineProperties(d0.prototype, {
        root: {
            get: function() {
                return this._root;
            }
        },
        referenceNode: {
            get: function() {
                return this._referenceNode;
            }
        },
        pointerBeforeReferenceNode: {
            get: function() {
                return this._pointerBeforeReferenceNode;
            }
        },
        whatToShow: {
            get: function() {
                return this._whatToShow;
            }
        },
        filter: {
            get: function() {
                return this._filter;
            }
        },
        _internalFilter: {
            value: function(t) {
                let r;
                let a;
                if (this._active) {
                    f0.InvalidStateError();
                }
                if (!(1 << t.nodeType - 1 & this._whatToShow)) {
                    return Fn.FILTER_SKIP;
                }
                a = this._filter;
                if (a === null) {
                    r = Fn.FILTER_ACCEPT;
                } else {
                    this._active = true;
                    try {
                        if (typeof a === "function") {
                            r = a(t);
                        } else {
                            r = a.acceptNode(t);
                        }
                    } finally{
                        this._active = false;
                    }
                }
                return +r;
            }
        },
        _preremove: {
            value: function(t) {
                if (l0(t, this._root)) {
                    return;
                }
                if (!l0(t, this._referenceNode)) {
                    return;
                }
                if (this._pointerBeforeReferenceNode) {
                    let r = t;
                    while(r.lastChild){
                        r = r.lastChild;
                    }
                    r = Bn.next(r, this.root);
                    if (r) {
                        this._referenceNode = r;
                        return;
                    }
                    this._pointerBeforeReferenceNode = false;
                }
                if (t.previousSibling === null) {
                    this._referenceNode = t.parentNode;
                } else {
                    this._referenceNode = t.previousSibling;
                    let a;
                    for(a = this._referenceNode.lastChild; a; a = this._referenceNode.lastChild){
                        this._referenceNode = a;
                    }
                }
            }
        },
        nextNode: {
            value: function() {
                return x0(this, true);
            }
        },
        previousNode: {
            value: function() {
                return x0(this, false);
            }
        },
        detach: {
            value: function() {}
        },
        toString: {
            value: function() {
                return "[object NodeIterator]";
            }
        }
    });
});
const ca = C(function(Rd, m0) {
    m0.exports = constructor;
    function constructor(e) {
        if (!e) {
            return Object.create(constructor.prototype);
        }
        this.url = e.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "");
        const t = constructor.pattern.exec(this.url);
        if (t) {
            if (t[2]) {
                this.scheme = t[2];
            }
            if (t[4]) {
                const r = t[4].match(constructor.userinfoPattern);
                if (r) {
                    this.username = r[1];
                    this.password = r[3];
                    t[4] = t[4].substring(r[0].length);
                }
                if (t[4].match(constructor.portPattern)) {
                    const a = t[4].lastIndexOf(":");
                    this.host = t[4].substring(0, a);
                    this.port = t[4].substring(a + 1);
                } else {
                    this.host = t[4];
                }
            }
            if (t[5]) {
                this.path = t[5];
            }
            if (t[6]) {
                this.query = t[7];
            }
            if (t[8]) {
                this.fragment = t[9];
            }
        }
    }
    constructor.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
    constructor.userinfoPattern = /^([^@:]*)(:([^@]*))?@/;
    constructor.portPattern = /:\d+$/;
    constructor.authorityPattern = /^[^:\/?#]+:\/\//;
    constructor.hierarchyPattern = /^[^:\/?#]+:\//;
    constructor.percentEncode = function(t) {
        const r = t.charCodeAt(0);
        if (r < 256) {
            return `%${r.toString(16)}`;
        } else {
            throw Error("can't percent-encode codepoints > 255 yet");
        }
    };
    constructor.prototype = {
        constructor,
        isAbsolute: function() {
            return !!this.scheme;
        },
        isAuthorityBased: function() {
            return constructor.authorityPattern.test(this.url);
        },
        isHierarchical: function() {
            return constructor.hierarchyPattern.test(this.url);
        },
        toString: function() {
            let e = "";
            if (this.scheme !== undefined) {
                e += `${this.scheme}:`;
            }
            if (this.isAbsolute()) {
                e += "//";
                if (this.username || this.password) {
                    e += this.username || "";
                    if (this.password) {
                        e += `:${this.password}`;
                    }
                    e += "@";
                }
                if (this.host) {
                    e += this.host;
                }
            }
            if (this.port !== undefined) {
                e += `:${this.port}`;
            }
            if (this.path !== undefined) {
                e += this.path;
            }
            if (this.query !== undefined) {
                e += `?${this.query}`;
            }
            if (this.fragment !== undefined) {
                e += `#${this.fragment}`;
            }
            return e;
        },
        resolve: function(e) {
            const t = this;
            const r = new constructor(e);
            const a = new constructor;
            if (r.scheme !== undefined) {
                a.scheme = r.scheme;
                a.username = r.username;
                a.password = r.password;
                a.host = r.host;
                a.port = r.port;
                a.path = c(r.path);
                a.query = r.query;
            } else {
                a.scheme = t.scheme;
                if (r.host !== undefined) {
                    a.username = r.username;
                    a.password = r.password;
                    a.host = r.host;
                    a.port = r.port;
                    a.path = c(r.path);
                    a.query = r.query;
                } else {
                    a.username = t.username;
                    a.password = t.password;
                    a.host = t.host;
                    a.port = t.port;
                    if (!r.path) {
                        a.path = t.path;
                        if (r.query !== undefined) {
                            a.query = r.query;
                        } else {
                            a.query = t.query;
                        }
                    } else {
                        if (r.path.charAt(0) === "/") {
                            a.path = c(r.path);
                        } else {
                            a.path = s(t.path, r.path);
                            a.path = c(a.path);
                        }
                        a.query = r.query;
                    }
                }
            }
            a.fragment = r.fragment;
            return a.toString();
            function s(path, m) {
                if (t.host !== undefined && !t.path) {
                    return `/${m}`;
                }
                const p = path.lastIndexOf("/");
                if (p === -1) {
                    return m;
                } else {
                    return path.substring(0, p + 1) + m;
                }
            }
            function c(f) {
                if (!f) {
                    return f;
                }
                let m = "";
                while(f.length > 0){
                    if (f === "." || f === "..") {
                        f = "";
                        break;
                    }
                    const p = f.substring(0, 2);
                    const _ = f.substring(0, 3);
                    const v = f.substring(0, 4);
                    if (_ === "../") {
                        f = f.substring(3);
                    } else if (p === "./") {
                        f = f.substring(2);
                    } else if (_ === "/./") {
                        f = `/${f.substring(3)}`;
                    } else if (p === "/." && f.length === 2) {
                        f = "/";
                    } else if (v === "/../" || _ === "/.." && f.length === 3) {
                        f = `/${f.substring(4)}`;
                        m = m.replace(/\/?[^\/]*$/, "");
                    } else {
                        const ne = f.match(/(\/?([^\/]*))/)[0];
                        m += ne;
                        f = f.substring(ne.length);
                    }
                }
                return m;
            }
        }
    };
});
const E0 = C(function(Id, b0) {
    b0.exports = Pn;
    var g0 = Lt();
    function Pn(e, t) {
        g0.call(this, e, t);
    }
    Pn.prototype = Object.create(g0.prototype, {
        constructor: {
            value: Pn
        }
    });
});
const Un = C(function(Od, _0) {
    _0.exports = {
        Event: Lt(),
        UIEvent: za(),
        MouseEvent: Xa(),
        CustomEvent: E0()
    };
});
const N0 = C(function(T0) {
    Object.defineProperty(T0, "__esModule", {
        value: true
    });
    T0.hyphenate = T0.parse = undefined;
    function hx(e) {
        let t = [];
        let r = 0;
        let a = 0;
        let s = 0;
        let c = 0;
        let f = 0;
        let m = null;
        while(r < e.length){
            switch(e.charCodeAt(r++)){
                case 40:
                    a++;
                    break;
                case 41:
                    a--;
                    break;
                case 39:
                    if (s === 0) {
                        s = 39;
                    } else if (s === 39 && e.charCodeAt(r - 1) !== 92) {
                        s = 0;
                    }
                    break;
                case 34:
                    if (s === 0) {
                        s = 34;
                    } else if (s === 34 && e.charCodeAt(r - 1) !== 92) {
                        s = 0;
                    }
                    break;
                case 58:
                    if (!m && a === 0 && s === 0) {
                        m = v0(e.substring(f, r - 1).trim());
                        c = r;
                    }
                    break;
                case 59:
                    if (m && c > 0 && a === 0 && s === 0) {
                        let _ = e.substring(c, r - 1).trim();
                        t.push(m, _);
                        f = r;
                        c = 0;
                        m = null;
                    }
                    break;
            }
        }
        if (m && c) {
            let p = e.slice(c).trim();
            t.push(m, p);
        }
        return t;
    }
    T0.parse = hx;
    function v0(e) {
        return e.replace(/[a-z][A-Z]/g, (t)=>`${t.charAt(0)}-${t.charAt(1)}`).toLowerCase();
    }
    T0.hyphenate = v0;
});
const oa = C(function(Hd, D0) {
    const { parse } = N0();
    D0.exports = function(e) {
        let t = new C0(e);
        return new Proxy(t, {
            get: function(a, s) {
                if (s in a) {
                    return a[s];
                }
                return a.getPropertyValue(w0(s));
            },
            has: function(a, s) {
                return true;
            },
            set: function(a, s, c) {
                if (s in a) {
                    a[s] = c;
                } else {
                    a.setProperty(w0(s), c ?? undefined);
                }
                return true;
            }
        });
    };
    function w0(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function C0(e) {
        this._element = e;
    }
    const S0 = "!important";
    function A0(e) {
        let t = {
            property: {},
            priority: {}
        };
        if (!e) {
            return t;
        }
        let r = parse(e);
        if (r.length < 2) {
            return t;
        }
        for(let a = 0; a < r.length; a += 2){
            let s = r[a];
            let c = r[a + 1];
            if (c.endsWith(S0)) {
                t.priority[s] = "important";
                c = c.slice(0, -S0.length).trim();
            }
            t.property[s] = c;
        }
        return t;
    }
    const Bt = {};
    C0.prototype = Object.create(Object.prototype, {
        _parsed: {
            get: function() {
                if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
                    const e = this.cssText;
                    this._parsedStyles = A0(e);
                    this._lastParsedText = e;
                    delete this._names;
                }
                return this._parsedStyles;
            }
        },
        _serialize: {
            value: function() {
                const _parsed = this._parsed;
                let t = "";
                for(const r in _parsed.property){
                    if (t) {
                        t += " ";
                    }
                    t += `${r}: ${_parsed.property[r]}`;
                    if (_parsed.priority[r]) {
                        t += ` !${_parsed.priority[r]}`;
                    }
                    t += ";";
                }
                this.cssText = t;
                this._lastParsedText = t;
                delete this._names;
            }
        },
        cssText: {
            get: function() {
                return this._element.getAttribute("style");
            },
            set: function(e) {
                this._element.setAttribute("style", e);
            }
        },
        length: {
            get: function() {
                if (!this._names) {
                    this._names = Object.getOwnPropertyNames(this._parsed.property);
                }
                return this._names.length;
            }
        },
        item: {
            value: function(e) {
                if (!this._names) {
                    this._names = Object.getOwnPropertyNames(this._parsed.property);
                }
                return this._names[e];
            }
        },
        getPropertyValue: {
            value: function(e) {
                e = e.toLowerCase();
                return this._parsed.property[e] || "";
            }
        },
        getPropertyPriority: {
            value: function(e) {
                e = e.toLowerCase();
                return this._parsed.priority[e] || "";
            }
        },
        setProperty: {
            value: function(e, t, r) {
                e = e.toLowerCase();
                if (t === null || t === undefined) {
                    t = "";
                }
                if (r === null || r === undefined) {
                    r = "";
                }
                if (t !== Bt) {
                    t = `${t}`;
                }
                t = t.trim();
                if (t === "") {
                    this.removeProperty(e);
                    return;
                }
                if (r !== "" && r !== Bt && !/^important$/i.test(r)) {
                    return;
                }
                const _parsed = this._parsed;
                if (t === Bt) {
                    if (!_parsed.property[e]) {
                        return;
                    }
                    if (r !== "") {
                        _parsed.priority[e] = "important";
                    } else {
                        delete _parsed.priority[e];
                    }
                } else {
                    if (t.indexOf(";") !== -1) {
                        return;
                    }
                    const s = A0(`${e}:${t}`);
                    if (Object.getOwnPropertyNames(s.property).length === 0) {
                        return;
                    }
                    if (Object.getOwnPropertyNames(s.priority).length !== 0) {
                        return;
                    }
                    for(const c in s.property){
                        _parsed.property[c] = s.property[c];
                        if (r === Bt) {
                            continue;
                        } else if (r !== "") {
                            _parsed.priority[c] = "important";
                        } else if (_parsed.priority[c]) {
                            delete _parsed.priority[c];
                        }
                    }
                }
                this._serialize();
            }
        },
        setPropertyValue: {
            value: function(e, t) {
                return this.setProperty(e, t, Bt);
            }
        },
        setPropertyPriority: {
            value: function(e, t) {
                return this.setProperty(e, Bt, t);
            }
        },
        removeProperty: {
            value: function(e) {
                e = e.toLowerCase();
                const _parsed = this._parsed;
                if (e in _parsed.property) {
                    delete _parsed.property[e];
                    delete _parsed.priority[e];
                    this._serialize();
                }
            }
        }
    });
});
const Vn = C(function(Fd, k0) {
    const oe = ca();
    k0.exports = pr;
    function pr() {}
    pr.prototype = Object.create(Object.prototype, {
        _url: {
            get: function() {
                return new oe(this.href);
            }
        },
        protocol: {
            get: function() {
                const _url = this._url;
                if (_url && _url.scheme) {
                    return `${_url.scheme}:`;
                } else {
                    return ":";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute()) {
                    e = e.replace(/:+$/, "");
                    e = e.replace(/[^-+\.a-zA-Z0-9]/g, oe.percentEncode);
                    if (e.length > 0) {
                        r.scheme = e;
                        href = r.toString();
                    }
                }
                this.href = href;
            }
        },
        host: {
            get: function() {
                const _url = this._url;
                if (_url.isAbsolute() && _url.isAuthorityBased()) {
                    return _url.host + (_url.port ? `:${_url.port}` : "");
                } else {
                    return "";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute() && r.isAuthorityBased()) {
                    e = e.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, oe.percentEncode);
                    if (e.length > 0) {
                        r.host = e;
                        delete r.port;
                        href = r.toString();
                    }
                }
                this.href = href;
            }
        },
        hostname: {
            get: function() {
                const _url = this._url;
                if (_url.isAbsolute() && _url.isAuthorityBased()) {
                    return _url.host;
                } else {
                    return "";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute() && r.isAuthorityBased()) {
                    e = e.replace(/^\/+/, "");
                    e = e.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, oe.percentEncode);
                    if (e.length > 0) {
                        r.host = e;
                        href = r.toString();
                    }
                }
                this.href = href;
            }
        },
        port: {
            get: function() {
                const _url = this._url;
                if (_url.isAbsolute() && _url.isAuthorityBased() && _url.port !== undefined) {
                    return _url.port;
                } else {
                    return "";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute() && r.isAuthorityBased()) {
                    e = `${e}`;
                    e = e.replace(/[^0-9].*$/, "");
                    e = e.replace(/^0+/, "");
                    if (e.length === 0) {
                        e = "0";
                    }
                    if (parseInt(e, 10) <= 65535) {
                        r.port = e;
                        href = r.toString();
                    }
                }
                this.href = href;
            }
        },
        pathname: {
            get: function() {
                const _url = this._url;
                if (_url.isAbsolute() && _url.isHierarchical()) {
                    return _url.path;
                } else {
                    return "";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute() && r.isHierarchical()) {
                    if (e.charAt(0) !== "/") {
                        e = `/${e}`;
                    }
                    e = e.replace(/[^-+\._~!$&'()*,;:=@\/a-zA-Z0-9]/g, oe.percentEncode);
                    r.path = e;
                    href = r.toString();
                }
                this.href = href;
            }
        },
        search: {
            get: function() {
                const _url = this._url;
                if (_url.isAbsolute() && _url.isHierarchical() && _url.query !== undefined) {
                    return `?${_url.query}`;
                } else {
                    return "";
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute() && r.isHierarchical()) {
                    if (e.charAt(0) === "?") {
                        e = e.substring(1);
                    }
                    e = e.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, oe.percentEncode);
                    r.query = e;
                    href = r.toString();
                }
                this.href = href;
            }
        },
        hash: {
            get: function() {
                const _url = this._url;
                if (_url == null || _url.fragment == null || _url.fragment === "") {
                    return "";
                } else {
                    return `#${_url.fragment}`;
                }
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (e.charAt(0) === "#") {
                    e = e.substring(1);
                }
                e = e.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, oe.percentEncode);
                r.fragment = e;
                href = r.toString();
                this.href = href;
            }
        },
        username: {
            get: function() {
                const _url = this._url;
                return _url.username || "";
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute()) {
                    e = e.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\:]/g, oe.percentEncode);
                    r.username = e;
                    href = r.toString();
                }
                this.href = href;
            }
        },
        password: {
            get: function() {
                const _url = this._url;
                return _url.password || "";
            },
            set: function(e) {
                let href = this.href;
                const r = new oe(href);
                if (r.isAbsolute()) {
                    if (e === "") {
                        r.password = null;
                    } else {
                        e = e.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\]/g, oe.percentEncode);
                        r.password = e;
                    }
                    href = r.toString();
                }
                this.href = href;
            }
        },
        origin: {
            get: function() {
                const _url = this._url;
                if (_url == null) {
                    return "";
                }
                const t = (r)=>{
                    const a = [
                        _url.scheme,
                        _url.host,
                        +_url.port || r
                    ];
                    return `${a[0]}://${a[1]}${a[2] === r ? "" : `:${a[2]}`}`;
                };
                switch(_url.scheme){
                    case "ftp":
                        return t(21);
                    case "gopher":
                        return t(70);
                    case "http":
                    case "ws":
                        return t(80);
                    case "https":
                    case "wss":
                        return t(443);
                    default:
                        return `${_url.scheme}://`;
                }
            }
        }
    });
    pr._inherit = function(e) {
        Object.getOwnPropertyNames(pr.prototype).forEach((t)=>{
            if (t === "constructor" || t === "href") {
                return;
            }
            const r = Object.getOwnPropertyDescriptor(pr.prototype, t);
            Object.defineProperty(e, t, r);
        });
    };
});
const jn = C(function(Bd, R0) {
    const L0 = un();
    const isApiWritable = Xr().isApiWritable;
    R0.exports = function(e, t, r, a) {
        let e_ctor = e.ctor;
        if (e_ctor) {
            const c = e.props || {};
            if (e.attributes) {
                for(const f in e.attributes){
                    let m = e.attributes[f];
                    if (typeof m !== "object" || Array.isArray(m)) {
                        m = {
                            type: m
                        };
                    }
                    if (!m.name) {
                        m.name = f.toLowerCase();
                    }
                    c[f] = L0.property(m);
                }
            }
            c.constructor = {
                value: e_ctor,
                writable: isApiWritable
            };
            e_ctor.prototype = Object.create((e.superclass || t).prototype, c);
            if (e.events) {
                Ex(e_ctor, e.events);
            }
            r[e.name] = e_ctor;
        } else {
            e_ctor = t;
        }
        (e.tags || e.tag && [
            e.tag
        ] || []).forEach((p)=>{
            a[p] = e_ctor;
        });
        return e_ctor;
    };
    class M0 {
        constructor(e, t, r, a){
            this.body = e;
            this.document = t;
            this.form = r;
            this.element = a;
        }
        build() {
            return ()=>{};
        }
    }
    function bx(e, t, r, a) {
        const s = e.ownerDocument || Object.create(null);
        const c = e.form || Object.create(null);
        e[t] = new M0(a, s, c, e).build();
    }
    function Ex(e, events) {
        const e_prototype = e.prototype;
        events.forEach((a)=>{
            Object.defineProperty(e_prototype, `on${a}`, {
                get: function() {
                    return this._getEventHandler(a);
                },
                set: function(s) {
                    this._setEventHandler(a, s);
                }
            });
            L0.registerChangeHandler(e, `on${a}`, bx);
        });
    }
});
const la = C(function(Nx) {
    const Gn = xe();
    const I0 = Ft();
    const _x = oa();
    const Te = ee();
    const O0 = Vn();
    const vx = jn();
    const Xe = Nx.elements = {};
    const mr = Object.create(null);
    Nx.createElement = function(e, t, r) {
        const a = mr[t] || yx;
        return new a(e, t, r);
    };
    function E(e) {
        return vx(e, T, Xe, mr);
    }
    function te(e) {
        return {
            get: function() {
                const t = this._getattr(e);
                if (t === null) {
                    return "";
                }
                const r = this.doc._resolve(t);
                if (r === null) {
                    return t;
                }
                return r;
            },
            set: function(t) {
                this._setattr(e, t);
            }
        };
    }
    function crossOrigin(e) {
        return {
            get: function() {
                const t = this._getattr(e);
                if (t === null) {
                    return null;
                }
                if (t.toLowerCase() === "use-credentials") {
                    return "use-credentials";
                }
                return "anonymous";
            },
            set: function(t) {
                if (t === null || t === undefined) {
                    this.removeAttribute(e);
                } else {
                    this._setattr(e, t);
                }
            }
        };
    }
    const referrerPolicy = {
        type: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url"
        ],
        missing: ""
    };
    const Tx = {
        A: true,
        LINK: true,
        BUTTON: true,
        INPUT: true,
        SELECT: true,
        TEXTAREA: true,
        COMMAND: true
    };
    const Le = function(e, t, r) {
        T.call(this, e, t, r);
        this._form = null;
    };
    var T = Nx.HTMLElement = E({
        superclass: I0,
        name: "HTMLElement",
        ctor: function(t, r, a) {
            I0.call(this, t, r, Te.NAMESPACE.HTML, a);
        },
        props: {
            dangerouslySetInnerHTML: {
                set: function(e) {
                    this._innerHTML = e;
                }
            },
            innerHTML: {
                get: function() {
                    return this.serialize();
                },
                set: function(e) {
                    const t = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, this);
                    t.parse(e === null ? "" : String(e), true);
                    const r = this instanceof mr.template ? this.content : this;
                    while(r.hasChildNodes()){
                        r.removeChild(r.firstChild);
                    }
                    r.appendChild(t._asDocumentFragment());
                }
            },
            style: {
                get: function() {
                    if (!this._style) {
                        this._style = new _x(this);
                    }
                    return this._style;
                },
                set: function(e) {
                    if (e === null || e === undefined) {
                        e = "";
                    }
                    this._setattr("style", String(e));
                }
            },
            blur: {
                value: function() {}
            },
            focus: {
                value: function() {}
            },
            forceSpellCheck: {
                value: function() {}
            },
            click: {
                value: function() {
                    if (this._click_in_progress) {
                        return;
                    }
                    this._click_in_progress = true;
                    try {
                        if (this._pre_click_activation_steps) {
                            this._pre_click_activation_steps();
                        }
                        const e = this.ownerDocument.createEvent("MouseEvent");
                        e.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        const t = this.dispatchEvent(e);
                        if (t) {
                            if (this._post_click_activation_steps) {
                                this._post_click_activation_steps(e);
                            }
                        } else if (this._cancelled_activation_steps) {
                            this._cancelled_activation_steps();
                        }
                    } finally{
                        this._click_in_progress = false;
                    }
                }
            },
            submit: {
                value: Te.nyi
            }
        },
        attributes: {
            title: String,
            lang: String,
            dir: {
                type: [
                    "ltr",
                    "rtl",
                    "auto"
                ],
                missing: ""
            },
            draggable: {
                type: [
                    "true",
                    "false"
                ],
                treatNullAsEmptyString: true
            },
            spellcheck: {
                type: [
                    "true",
                    "false"
                ],
                missing: ""
            },
            enterKeyHint: {
                type: [
                    "enter",
                    "done",
                    "go",
                    "next",
                    "previous",
                    "search",
                    "send"
                ],
                missing: ""
            },
            autoCapitalize: {
                type: [
                    "off",
                    "on",
                    "none",
                    "sentences",
                    "words",
                    "characters"
                ],
                missing: ""
            },
            autoFocus: Boolean,
            accessKey: String,
            nonce: String,
            hidden: Boolean,
            translate: {
                type: [
                    "no",
                    "yes"
                ],
                missing: ""
            },
            tabIndex: {
                type: "long",
                default: function() {
                    if (this.tagName in Tx || this.contentEditable) {
                        return 0;
                    } else {
                        return -1;
                    }
                }
            }
        },
        events: [
            "abort",
            "canplay",
            "canplaythrough",
            "change",
            "click",
            "contextmenu",
            "cuechange",
            "dblclick",
            "drag",
            "dragend",
            "dragenter",
            "dragleave",
            "dragover",
            "dragstart",
            "drop",
            "durationchange",
            "emptied",
            "ended",
            "input",
            "invalid",
            "keydown",
            "keypress",
            "keyup",
            "loadeddata",
            "loadedmetadata",
            "loadstart",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "mousewheel",
            "pause",
            "play",
            "playing",
            "progress",
            "ratechange",
            "readystatechange",
            "reset",
            "seeked",
            "seeking",
            "select",
            "show",
            "stalled",
            "submit",
            "suspend",
            "timeupdate",
            "volumechange",
            "waiting",
            "blur",
            "error",
            "focus",
            "load",
            "scroll"
        ]
    });
    var yx = E({
        name: "HTMLUnknownElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    const props = {
        form: {
            get: function() {
                return this._form;
            }
        }
    };
    E({
        tag: "a",
        name: "HTMLAnchorElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            _post_click_activation_steps: {
                value: function(e) {
                    if (this.href) {
                        this.ownerDocument.defaultView.location = this.href;
                    }
                }
            }
        },
        attributes: {
            href: te,
            ping: String,
            download: String,
            target: String,
            rel: String,
            media: String,
            hreflang: String,
            type: String,
            referrerPolicy,
            coords: String,
            charset: String,
            name: String,
            rev: String,
            shape: String
        }
    });
    O0._inherit(mr.a.prototype);
    E({
        tag: "area",
        name: "HTMLAreaElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            alt: String,
            target: String,
            download: String,
            rel: String,
            media: String,
            href: te,
            hreflang: String,
            type: String,
            shape: String,
            coords: String,
            ping: String,
            referrerPolicy,
            noHref: Boolean
        }
    });
    O0._inherit(mr.area.prototype);
    E({
        tag: "br",
        name: "HTMLBRElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            clear: String
        }
    });
    E({
        tag: "base",
        name: "HTMLBaseElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            target: String
        }
    });
    E({
        tag: "body",
        name: "HTMLBodyElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        events: [
            "afterprint",
            "beforeprint",
            "beforeunload",
            "blur",
            "error",
            "focus",
            "hashchange",
            "load",
            "message",
            "offline",
            "online",
            "pagehide",
            "pageshow",
            "popstate",
            "resize",
            "scroll",
            "storage",
            "unload"
        ],
        attributes: {
            text: {
                type: String,
                treatNullAsEmptyString: true
            },
            link: {
                type: String,
                treatNullAsEmptyString: true
            },
            vLink: {
                type: String,
                treatNullAsEmptyString: true
            },
            aLink: {
                type: String,
                treatNullAsEmptyString: true
            },
            bgColor: {
                type: String,
                treatNullAsEmptyString: true
            },
            background: String
        }
    });
    E({
        tag: "button",
        name: "HTMLButtonElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            name: String,
            value: String,
            disabled: Boolean,
            autofocus: Boolean,
            type: {
                type: [
                    "submit",
                    "reset",
                    "button",
                    "menu"
                ],
                missing: "submit"
            },
            formTarget: String,
            formAction: te,
            formNoValidate: Boolean,
            formMethod: {
                type: [
                    "get",
                    "post",
                    "dialog"
                ],
                invalid: "get",
                missing: ""
            },
            formEnctype: {
                type: [
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain"
                ],
                invalid: "application/x-www-form-urlencoded",
                missing: ""
            }
        }
    });
    E({
        tag: "dl",
        name: "HTMLDListElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            compact: Boolean
        }
    });
    E({
        tag: "data",
        name: "HTMLDataElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            value: String
        }
    });
    E({
        tag: "datalist",
        name: "HTMLDataListElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    E({
        tag: "details",
        name: "HTMLDetailsElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            open: Boolean
        }
    });
    E({
        tag: "div",
        name: "HTMLDivElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String
        }
    });
    E({
        tag: "embed",
        name: "HTMLEmbedElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            src: te,
            type: String,
            width: String,
            height: String,
            align: String,
            name: String
        }
    });
    E({
        tag: "fieldset",
        name: "HTMLFieldSetElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            disabled: Boolean,
            name: String
        }
    });
    E({
        tag: "form",
        name: "HTMLFormElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            action: String,
            autocomplete: {
                type: [
                    "on",
                    "off"
                ],
                missing: "on"
            },
            name: String,
            acceptCharset: {
                name: "accept-charset"
            },
            target: String,
            noValidate: Boolean,
            method: {
                type: [
                    "get",
                    "post",
                    "dialog"
                ],
                invalid: "get",
                missing: "get"
            },
            enctype: {
                type: [
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain"
                ],
                invalid: "application/x-www-form-urlencoded",
                missing: "application/x-www-form-urlencoded"
            },
            encoding: {
                name: "enctype",
                type: [
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain"
                ],
                invalid: "application/x-www-form-urlencoded",
                missing: "application/x-www-form-urlencoded"
            }
        }
    });
    E({
        tag: "hr",
        name: "HTMLHRElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String,
            color: String,
            noShade: Boolean,
            size: String,
            width: String
        }
    });
    E({
        tag: "head",
        name: "HTMLHeadElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    E({
        tags: [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ],
        name: "HTMLHeadingElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String
        }
    });
    E({
        tag: "html",
        name: "HTMLHtmlElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            xmlns: te,
            version: String
        }
    });
    E({
        tag: "iframe",
        name: "HTMLIFrameElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            src: te,
            srcdoc: String,
            name: String,
            width: String,
            height: String,
            seamless: Boolean,
            allow: Boolean,
            allowFullscreen: Boolean,
            allowUserMedia: Boolean,
            allowPaymentRequest: Boolean,
            referrerPolicy,
            loading: {
                type: [
                    "eager",
                    "lazy"
                ],
                treatNullAsEmptyString: true
            },
            align: String,
            scrolling: String,
            frameBorder: String,
            longDesc: te,
            marginHeight: {
                type: String,
                treatNullAsEmptyString: true
            },
            marginWidth: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tag: "img",
        name: "HTMLImageElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            alt: String,
            src: te,
            srcset: String,
            crossOrigin,
            useMap: String,
            isMap: Boolean,
            sizes: String,
            height: {
                type: "unsigned long",
                default: 0
            },
            width: {
                type: "unsigned long",
                default: 0
            },
            referrerPolicy,
            loading: {
                type: [
                    "eager",
                    "lazy"
                ],
                missing: ""
            },
            name: String,
            lowsrc: te,
            align: String,
            hspace: {
                type: "unsigned long",
                default: 0
            },
            vspace: {
                type: "unsigned long",
                default: 0
            },
            longDesc: te,
            border: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tag: "input",
        name: "HTMLInputElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props: {
            form: props.form,
            _post_click_activation_steps: {
                value: function(e) {
                    if (this.type === "checkbox") {
                        this.checked = !this.checked;
                    } else if (this.type === "radio") {
                        const t = this.form.getElementsByName(this.name);
                        for(let r = t.length - 1; r >= 0; r--){
                            const a = t[r];
                            a.checked = a === this;
                        }
                    }
                }
            }
        },
        attributes: {
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            accept: String,
            alt: String,
            max: String,
            min: String,
            pattern: String,
            placeholder: String,
            step: String,
            dirName: String,
            defaultValue: {
                name: "value"
            },
            multiple: Boolean,
            required: Boolean,
            readOnly: Boolean,
            checked: Boolean,
            value: String,
            src: te,
            defaultChecked: {
                name: "checked",
                type: Boolean
            },
            size: {
                type: "unsigned long",
                default: 20,
                min: 1,
                setmin: 1
            },
            width: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: 0
            },
            height: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: 0
            },
            minLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            maxLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            autocomplete: String,
            type: {
                type: [
                    "text",
                    "hidden",
                    "search",
                    "tel",
                    "url",
                    "email",
                    "password",
                    "datetime",
                    "date",
                    "month",
                    "week",
                    "time",
                    "datetime-local",
                    "number",
                    "range",
                    "color",
                    "checkbox",
                    "radio",
                    "file",
                    "submit",
                    "image",
                    "reset",
                    "button"
                ],
                missing: "text"
            },
            formTarget: String,
            formNoValidate: Boolean,
            formMethod: {
                type: [
                    "get",
                    "post"
                ],
                invalid: "get",
                missing: ""
            },
            formEnctype: {
                type: [
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain"
                ],
                invalid: "application/x-www-form-urlencoded",
                missing: ""
            },
            inputMode: {
                type: [
                    "verbatim",
                    "latin",
                    "latin-name",
                    "latin-prose",
                    "full-width-latin",
                    "kana",
                    "kana-name",
                    "katakana",
                    "numeric",
                    "tel",
                    "email",
                    "url"
                ],
                missing: ""
            },
            align: String,
            useMap: String
        }
    });
    E({
        tag: "keygen",
        name: "HTMLKeygenElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            challenge: String,
            keytype: {
                type: [
                    "rsa"
                ],
                missing: ""
            }
        }
    });
    E({
        tag: "li",
        name: "HTMLLIElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            value: {
                type: "long",
                default: 0
            },
            type: String
        }
    });
    E({
        tag: "label",
        name: "HTMLLabelElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            htmlFor: {
                name: "for",
                type: String
            }
        }
    });
    E({
        tag: "legend",
        name: "HTMLLegendElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String
        }
    });
    E({
        tag: "link",
        name: "HTMLLinkElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            href: te,
            rel: String,
            media: String,
            hreflang: String,
            type: String,
            crossOrigin,
            nonce: String,
            integrity: String,
            referrerPolicy,
            imageSizes: String,
            imageSrcset: String,
            charset: String,
            rev: String,
            target: String
        }
    });
    E({
        tag: "map",
        name: "HTMLMapElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            name: String
        }
    });
    E({
        tag: "menu",
        name: "HTMLMenuElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            type: {
                type: [
                    "context",
                    "popup",
                    "toolbar"
                ],
                missing: "toolbar"
            },
            label: String,
            compact: Boolean
        }
    });
    E({
        tag: "meta",
        name: "HTMLMetaElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            name: String,
            content: String,
            httpEquiv: {
                name: "http-equiv",
                type: String
            },
            scheme: String
        }
    });
    E({
        tag: "meter",
        name: "HTMLMeterElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props
    });
    E({
        tags: [
            "ins",
            "del"
        ],
        name: "HTMLModElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            cite: te,
            dateTime: String
        }
    });
    E({
        tag: "ol",
        name: "HTMLOListElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            _numitems: {
                get: function() {
                    let e = 0;
                    this.childNodes.forEach((t)=>{
                        if (t.nodeType === Gn.ELEMENT_NODE && t.tagName === "LI") {
                            e++;
                        }
                    });
                    return e;
                }
            }
        },
        attributes: {
            type: String,
            reversed: Boolean,
            start: {
                type: "long",
                default: function() {
                    if (this.reversed) {
                        return this._numitems;
                    } else {
                        return 1;
                    }
                }
            },
            compact: Boolean
        }
    });
    E({
        tag: "object",
        name: "HTMLObjectElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            data: te,
            type: String,
            name: String,
            useMap: String,
            typeMustMatch: Boolean,
            width: String,
            height: String,
            align: String,
            archive: String,
            code: String,
            declare: Boolean,
            hspace: {
                type: "unsigned long",
                default: 0
            },
            standby: String,
            vspace: {
                type: "unsigned long",
                default: 0
            },
            codeBase: te,
            codeType: String,
            border: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tag: "optgroup",
        name: "HTMLOptGroupElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            disabled: Boolean,
            label: String
        }
    });
    E({
        tag: "option",
        name: "HTMLOptionElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            form: {
                get: function() {
                    let parentNode = this.parentNode;
                    while(parentNode && parentNode.nodeType === Gn.ELEMENT_NODE){
                        if (parentNode.localName === "select") {
                            return parentNode.form;
                        }
                        parentNode = parentNode.parentNode;
                    }
                }
            },
            value: {
                get: function() {
                    return this._getattr("value") || this.text;
                },
                set: function(e) {
                    this._setattr("value", e);
                }
            },
            text: {
                get: function() {
                    return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim();
                },
                set: function(e) {
                    this.textContent = e;
                }
            }
        },
        attributes: {
            disabled: Boolean,
            defaultSelected: {
                name: "selected",
                type: Boolean
            },
            label: String
        }
    });
    E({
        tag: "output",
        name: "HTMLOutputElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            name: String
        }
    });
    E({
        tag: "p",
        name: "HTMLParagraphElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String
        }
    });
    E({
        tag: "param",
        name: "HTMLParamElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            name: String,
            value: String,
            type: String,
            valueType: String
        }
    });
    E({
        tags: [
            "pre",
            "listing",
            "xmp"
        ],
        name: "HTMLPreElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            width: {
                type: "long",
                default: 0
            }
        }
    });
    E({
        tag: "progress",
        name: "HTMLProgressElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props,
        attributes: {
            max: {
                type: Number,
                float: true,
                default: 1,
                min: 0
            }
        }
    });
    E({
        tags: [
            "q",
            "blockquote"
        ],
        name: "HTMLQuoteElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            cite: te
        }
    });
    E({
        tag: "script",
        name: "HTMLScriptElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            text: {
                get: function() {
                    let e = "";
                    for(let t = 0, r = this.childNodes.length; t < r; t++){
                        const childNode = this.childNodes[t];
                        if (childNode.nodeType === Gn.TEXT_NODE) {
                            e += childNode._data;
                        }
                    }
                    return e;
                },
                set: function(e) {
                    this.removeChildren();
                    if (e !== null && e !== "") {
                        this.appendChild(this.ownerDocument.createTextNode(e));
                    }
                }
            }
        },
        attributes: {
            src: te,
            type: String,
            charset: String,
            referrerPolicy,
            defer: Boolean,
            async: Boolean,
            nomodule: Boolean,
            crossOrigin,
            nonce: String,
            integrity: String
        }
    });
    E({
        tag: "select",
        name: "HTMLSelectElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props: {
            form: props.form,
            options: {
                get: function() {
                    return this.getElementsByTagName("option");
                }
            }
        },
        attributes: {
            autocomplete: String,
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            multiple: Boolean,
            required: Boolean,
            size: {
                type: "unsigned long",
                default: 0
            }
        }
    });
    E({
        tag: "span",
        name: "HTMLSpanElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    E({
        tag: "style",
        name: "HTMLStyleElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            media: String,
            type: String,
            scoped: Boolean
        }
    });
    E({
        tag: "caption",
        name: "HTMLTableCaptionElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            align: String
        }
    });
    E({
        name: "HTMLTableCellElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            colSpan: {
                type: "unsigned long",
                default: 1
            },
            rowSpan: {
                type: "unsigned long",
                default: 1
            },
            scope: {
                type: [
                    "row",
                    "col",
                    "rowgroup",
                    "colgroup"
                ],
                missing: ""
            },
            abbr: String,
            align: String,
            axis: String,
            height: String,
            width: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            noWrap: Boolean,
            vAlign: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tags: [
            "col",
            "colgroup"
        ],
        name: "HTMLTableColElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            span: {
                type: "limited unsigned long with fallback",
                default: 1,
                min: 1
            },
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String,
            width: String
        }
    });
    E({
        tag: "table",
        name: "HTMLTableElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            rows: {
                get: function() {
                    return this.getElementsByTagName("tr");
                }
            }
        },
        attributes: {
            align: String,
            border: String,
            frame: String,
            rules: String,
            summary: String,
            width: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: true
            },
            cellPadding: {
                type: String,
                treatNullAsEmptyString: true
            },
            cellSpacing: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tag: "template",
        name: "HTMLTemplateElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
            this._contentFragment = t._templateDoc.createDocumentFragment();
        },
        props: {
            content: {
                get: function() {
                    return this._contentFragment;
                }
            },
            serialize: {
                value: function() {
                    return this.content.serialize();
                }
            }
        }
    });
    E({
        tag: "tr",
        name: "HTMLTableRowElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            cells: {
                get: function() {
                    return this.querySelectorAll("td,th");
                }
            }
        },
        attributes: {
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: true
            }
        }
    });
    E({
        tags: [
            "thead",
            "tfoot",
            "tbody"
        ],
        name: "HTMLTableSectionElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            rows: {
                get: function() {
                    return this.getElementsByTagName("tr");
                }
            }
        },
        attributes: {
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String
        }
    });
    E({
        tag: "textarea",
        name: "HTMLTextAreaElement",
        ctor: function(t, r, a) {
            Le.call(this, t, r, a);
        },
        props: {
            form: props.form,
            type: {
                get: function() {
                    return "textarea";
                }
            },
            defaultValue: {
                get: function() {
                    return this.textContent;
                },
                set: function(e) {
                    this.textContent = e;
                }
            },
            value: {
                get: function() {
                    return this.defaultValue;
                },
                set: function(e) {
                    this.defaultValue = e;
                }
            },
            textLength: {
                get: function() {
                    return this.value.length;
                }
            }
        },
        attributes: {
            autocomplete: String,
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            placeholder: String,
            wrap: String,
            dirName: String,
            required: Boolean,
            readOnly: Boolean,
            rows: {
                type: "limited unsigned long with fallback",
                default: 2
            },
            cols: {
                type: "limited unsigned long with fallback",
                default: 20
            },
            maxLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            minLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            inputMode: {
                type: [
                    "verbatim",
                    "latin",
                    "latin-name",
                    "latin-prose",
                    "full-width-latin",
                    "kana",
                    "kana-name",
                    "katakana",
                    "numeric",
                    "tel",
                    "email",
                    "url"
                ],
                missing: ""
            }
        }
    });
    E({
        tag: "time",
        name: "HTMLTimeElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            dateTime: String,
            pubDate: Boolean
        }
    });
    E({
        tag: "title",
        name: "HTMLTitleElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            text: {
                get: function() {
                    return this.textContent;
                }
            }
        }
    });
    E({
        tag: "ul",
        name: "HTMLUListElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            type: String,
            compact: Boolean
        }
    });
    E({
        name: "HTMLMediaElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            src: te,
            crossOrigin,
            preload: {
                type: [
                    "metadata",
                    "none",
                    "auto",
                    {
                        value: "",
                        alias: "auto"
                    }
                ],
                missing: "auto"
            },
            loop: Boolean,
            autoplay: Boolean,
            mediaGroup: String,
            controls: Boolean,
            defaultMuted: {
                name: "muted",
                type: Boolean
            }
        }
    });
    E({
        name: "HTMLAudioElement",
        tag: "audio",
        superclass: Xe.HTMLMediaElement,
        ctor: function(t, r, a) {
            Xe.HTMLMediaElement.call(this, t, r, a);
        }
    });
    E({
        name: "HTMLVideoElement",
        tag: "video",
        superclass: Xe.HTMLMediaElement,
        ctor: function(t, r, a) {
            Xe.HTMLMediaElement.call(this, t, r, a);
        },
        attributes: {
            poster: te,
            width: {
                type: "unsigned long",
                min: 0,
                default: 0
            },
            height: {
                type: "unsigned long",
                min: 0,
                default: 0
            }
        }
    });
    E({
        tag: "td",
        name: "HTMLTableDataCellElement",
        superclass: Xe.HTMLTableCellElement,
        ctor: function(t, r, a) {
            Xe.HTMLTableCellElement.call(this, t, r, a);
        }
    });
    E({
        tag: "th",
        name: "HTMLTableHeaderCellElement",
        superclass: Xe.HTMLTableCellElement,
        ctor: function(t, r, a) {
            Xe.HTMLTableCellElement.call(this, t, r, a);
        }
    });
    E({
        tag: "frameset",
        name: "HTMLFrameSetElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    E({
        tag: "frame",
        name: "HTMLFrameElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        }
    });
    E({
        tag: "canvas",
        name: "HTMLCanvasElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            getContext: {
                value: Te.nyi
            },
            probablySupportsContext: {
                value: Te.nyi
            },
            setContext: {
                value: Te.nyi
            },
            transferControlToProxy: {
                value: Te.nyi
            },
            toDataURL: {
                value: Te.nyi
            },
            toBlob: {
                value: Te.nyi
            }
        },
        attributes: {
            width: {
                type: "unsigned long",
                default: 300
            },
            height: {
                type: "unsigned long",
                default: 150
            }
        }
    });
    E({
        tag: "dialog",
        name: "HTMLDialogElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            show: {
                value: Te.nyi
            },
            showModal: {
                value: Te.nyi
            },
            close: {
                value: Te.nyi
            }
        },
        attributes: {
            open: Boolean,
            returnValue: String
        }
    });
    E({
        tag: "menuitem",
        name: "HTMLMenuItemElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        props: {
            _label: {
                get: function() {
                    let e = this._getattr("label");
                    if (e !== null && e !== "") {
                        return e;
                    }
                    e = this.textContent;
                    return e.replace(/[ \t\n\f\r]+/g, " ").trim();
                }
            },
            label: {
                get: function() {
                    const e = this._getattr("label");
                    if (e !== null) {
                        return e;
                    }
                    return this._label;
                },
                set: function(e) {
                    this._setattr("label", e);
                }
            }
        },
        attributes: {
            type: {
                type: [
                    "command",
                    "checkbox",
                    "radio"
                ],
                missing: "command"
            },
            icon: te,
            disabled: Boolean,
            checked: Boolean,
            radiogroup: String,
            default: Boolean
        }
    });
    E({
        tag: "source",
        name: "HTMLSourceElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            srcset: String,
            sizes: String,
            media: String,
            src: te,
            type: String,
            width: String,
            height: String
        }
    });
    E({
        tag: "track",
        name: "HTMLTrackElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            src: te,
            srclang: String,
            label: String,
            default: Boolean,
            kind: {
                type: [
                    "subtitles",
                    "captions",
                    "descriptions",
                    "chapters",
                    "metadata"
                ],
                missing: "subtitles",
                invalid: "metadata"
            }
        },
        props: {
            NONE: {
                get: function() {
                    return 0;
                }
            },
            LOADING: {
                get: function() {
                    return 1;
                }
            },
            LOADED: {
                get: function() {
                    return 2;
                }
            },
            ERROR: {
                get: function() {
                    return 3;
                }
            },
            readyState: {
                get: Te.nyi
            },
            track: {
                get: Te.nyi
            }
        }
    });
    E({
        tag: "font",
        name: "HTMLFontElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            color: {
                type: String,
                treatNullAsEmptyString: true
            },
            face: {
                type: String
            },
            size: {
                type: String
            }
        }
    });
    E({
        tag: "dir",
        name: "HTMLDirectoryElement",
        ctor: function(t, r, a) {
            T.call(this, t, r, a);
        },
        attributes: {
            compact: Boolean
        }
    });
    E({
        tags: [
            "abbr",
            "address",
            "article",
            "aside",
            "b",
            "bdi",
            "bdo",
            "cite",
            "content",
            "code",
            "dd",
            "dfn",
            "dt",
            "em",
            "figcaption",
            "figure",
            "footer",
            "header",
            "hgroup",
            "i",
            "kbd",
            "main",
            "mark",
            "nav",
            "noscript",
            "rb",
            "rp",
            "rt",
            "rtc",
            "ruby",
            "s",
            "samp",
            "section",
            "small",
            "strong",
            "sub",
            "summary",
            "sup",
            "u",
            "var",
            "wbr",
            "acronym",
            "basefont",
            "big",
            "center",
            "nobr",
            "noembed",
            "noframes",
            "plaintext",
            "strike",
            "tt"
        ]
    });
});
const Xn = C(function(F0) {
    const q0 = Ft();
    const Sx = jn();
    const Ax = ee();
    const Cx = oa();
    const Dx = F0.elements = {};
    const H0 = Object.create(null);
    F0.createElement = function(e, t, r) {
        const a = H0[t] || Wn;
        return new a(e, t, r);
    };
    function zn(e) {
        return Sx(e, Wn, Dx, H0);
    }
    var Wn = zn({
        superclass: q0,
        name: "SVGElement",
        ctor: function(t, r, a) {
            q0.call(this, t, r, Ax.NAMESPACE.SVG, a);
        },
        props: {
            style: {
                get: function() {
                    if (!this._style) {
                        this._style = new Cx(this);
                    }
                    return this._style;
                }
            }
        }
    });
    zn({
        name: "SVGSVGElement",
        ctor: function(t, r, a) {
            Wn.call(this, t, r, a);
        },
        tag: "svg",
        props: {
            createSVGRect: {
                value: function() {
                    return F0.createElement(this.ownerDocument, "rect", null);
                }
            }
        }
    });
    zn({
        tags: [
            "a",
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "font",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignObject",
            "g",
            "glyph",
            "glyphRef",
            "hkern",
            "image",
            "line",
            "linearGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern"
        ]
    });
});
const U0 = C(function(zd, P0) {
    P0.exports = {
        VALUE: 1,
        ATTR: 2,
        REMOVE_ATTR: 3,
        REMOVE: 4,
        MOVE: 5,
        INSERT: 6
    };
});
const fa = C(function(Wd, $0) {
    $0.exports = br;
    var he = xe();
    const kx = yt();
    var X0 = Qr();
    const ft = Ft();
    const Lx = Sn();
    const Mx = Cn();
    const gr = Lt();
    const Rx = kn();
    const Ix = Mn();
    var Ox = Er();
    const qx = u0();
    const Hx = p0();
    const V0 = hr();
    const j0 = ca();
    const G0 = ta();
    const Fx = Un();
    const xa = $r();
    const Kn = la();
    const Bx = Xn();
    const B = ee();
    const Ut = U0();
    const B_NAMESPACE = B.NAMESPACE;
    const isApiWritable = Xr().isApiWritable;
    function br(e, t) {
        X0.call(this);
        this.nodeType = he.DOCUMENT_NODE;
        this.isHTML = e;
        this._address = t || "about:blank";
        this.readyState = "loading";
        this.implementation = new Ox(this);
        this.ownerDocument = null;
        this._contentType = e ? "text/html" : "application/xml";
        this.doctype = null;
        this.documentElement = null;
        this._templateDocCache = null;
        this._nodeIterators = null;
        this._nid = 1;
        this._nextnid = 2;
        this._nodes = [
            null,
            this
        ];
        this.byId = Object.create(null);
        this.modclock = 0;
    }
    const Px = {
        event: "Event",
        customevent: "CustomEvent",
        uievent: "UIEvent",
        mouseevent: "MouseEvent"
    };
    const Ux = {
        events: "event",
        htmlevents: "event",
        mouseevents: "mouseevent",
        mutationevents: "mutationevent",
        uievents: "uievent"
    };
    const Vt = (e, t, r)=>({
            get: function() {
                const a = e.call(this);
                if (a) {
                    return a[t];
                }
                return r;
            },
            set: function(a) {
                const s = e.call(this);
                if (s) {
                    s[t] = a;
                }
            }
        });
    function z0(namespace, t) {
        let prefix;
        let localName;
        let s;
        if (namespace === "") {
            namespace = null;
        }
        if (!xa.isValidQName(t)) {
            B.InvalidCharacterError();
        }
        prefix = null;
        localName = t;
        s = t.indexOf(":");
        if (s >= 0) {
            prefix = t.substring(0, s);
            localName = t.substring(s + 1);
        }
        if (prefix !== null && namespace === null) {
            B.NamespaceError();
        }
        if (prefix === "xml" && namespace !== B_NAMESPACE.XML) {
            B.NamespaceError();
        }
        if ((prefix === "xmlns" || t === "xmlns") && namespace !== B_NAMESPACE.XMLNS) {
            B.NamespaceError();
        }
        if (namespace === B_NAMESPACE.XMLNS && !(prefix === "xmlns" || t === "xmlns")) {
            B.NamespaceError();
        }
        return {
            namespace,
            prefix,
            localName
        };
    }
    br.prototype = Object.create(X0.prototype, {
        _setMutationHandler: {
            value: function(e) {
                this.mutationHandler = e;
            }
        },
        _dispatchRendererEvent: {
            value: function(e, t, r) {
                const a = this._nodes[e];
                if (!a) {
                    return;
                }
                a._dispatchEvent(new gr(t, r), true);
            }
        },
        nodeName: {
            value: "#document"
        },
        nodeValue: {
            get: function() {
                return null;
            },
            set: function() {}
        },
        documentURI: {
            get: function() {
                return this._address;
            },
            set: B.nyi
        },
        compatMode: {
            get: function() {
                if (this._quirks) {
                    return "BackCompat";
                }
                return "CSS1Compat";
            }
        },
        createTextNode: {
            value: function(e) {
                return new Lx(this, String(e));
            }
        },
        createComment: {
            value: function(e) {
                return new Mx(this, e);
            }
        },
        createDocumentFragment: {
            value: function() {
                return new Rx(this);
            }
        },
        createProcessingInstruction: {
            value: function(e, t) {
                if (!xa.isValidName(e) || t.indexOf("?>") !== -1) {
                    B.InvalidCharacterError();
                }
                return new Ix(this, e, t);
            }
        },
        createAttribute: {
            value: function(e) {
                e = String(e);
                if (!xa.isValidName(e)) {
                    B.InvalidCharacterError();
                }
                if (this.isHTML) {
                    e = B.toASCIILowerCase(e);
                }
                return new ft._Attr(null, e, null, null, "");
            }
        },
        createAttributeNS: {
            value: function(e, t) {
                e = e === null || e === undefined || e === "" ? null : String(e);
                t = String(t);
                const r = z0(e, t);
                return new ft._Attr(null, r.localName, r.prefix, r.namespace, "");
            }
        },
        createElement: {
            value: function(e) {
                e = String(e);
                if (!xa.isValidName(e)) {
                    B.InvalidCharacterError();
                }
                if (this.isHTML) {
                    if (/[A-Z]/.test(e)) {
                        e = B.toASCIILowerCase(e);
                    }
                    return Kn.createElement(this, e, null);
                } else if (this.contentType === "application/xhtml+xml") {
                    return Kn.createElement(this, e, null);
                } else {
                    return new ft(this, e, null, null);
                }
            },
            writable: isApiWritable
        },
        createElementNS: {
            value: function(e, t) {
                e = e === null || e === undefined || e === "" ? null : String(e);
                t = String(t);
                const r = z0(e, t);
                return this._createElementNS(r.localName, r.namespace, r.prefix);
            },
            writable: isApiWritable
        },
        _createElementNS: {
            value: function(e, t, r) {
                if (t === B_NAMESPACE.HTML) {
                    return Kn.createElement(this, e, r);
                } else if (t === B_NAMESPACE.SVG) {
                    return Bx.createElement(this, e, r);
                }
                return new ft(this, e, t, r);
            }
        },
        createEvent: {
            value: function(t) {
                t = t.toLowerCase();
                const r = Ux[t] || t;
                const a = Fx[Px[r]];
                if (a) {
                    const s = new a;
                    s._initialized = false;
                    return s;
                } else {
                    B.NotSupportedError();
                }
            }
        },
        createTreeWalker: {
            value: function(e, t, r) {
                if (!e) {
                    throw TypeError("root argument is required");
                }
                if (!(e instanceof he)) {
                    throw TypeError("root not a node");
                }
                t = t === undefined ? V0.SHOW_ALL : +t;
                r = r === undefined ? null : r;
                return new qx(e, t, r);
            }
        },
        createNodeIterator: {
            value: function(e, t, r) {
                if (!e) {
                    throw TypeError("root argument is required");
                }
                if (!(e instanceof he)) {
                    throw TypeError("root not a node");
                }
                t = t === undefined ? V0.SHOW_ALL : +t;
                r = r === undefined ? null : r;
                return new Hx(e, t, r);
            }
        },
        _attachNodeIterator: {
            value: function(e) {
                if (!this._nodeIterators) {
                    this._nodeIterators = [];
                }
                this._nodeIterators.push(e);
            }
        },
        _detachNodeIterator: {
            value: function(e) {
                const t = this._nodeIterators.indexOf(e);
                this._nodeIterators.splice(t, 1);
            }
        },
        _preremoveNodeIterators: {
            value: function(e) {
                if (this._nodeIterators) {
                    this._nodeIterators.forEach((t)=>{
                        t._preremove(e);
                    });
                }
            }
        },
        _updateDocTypeElement: {
            value: function() {
                this.doctype = this.documentElement = null;
                for(let t = this.firstChild; t !== null; t = t.nextSibling){
                    if (t.nodeType === he.DOCUMENT_TYPE_NODE) {
                        this.doctype = t;
                    } else if (t.nodeType === he.ELEMENT_NODE) {
                        this.documentElement = t;
                    }
                }
            }
        },
        insertBefore: {
            value: function(t, r) {
                he.prototype.insertBefore.call(this, t, r);
                this._updateDocTypeElement();
                return t;
            }
        },
        replaceChild: {
            value: function(t, r) {
                he.prototype.replaceChild.call(this, t, r);
                this._updateDocTypeElement();
                return r;
            }
        },
        removeChild: {
            value: function(t) {
                he.prototype.removeChild.call(this, t);
                this._updateDocTypeElement();
                return t;
            }
        },
        getElementById: {
            value: function(e) {
                const t = this.byId[e];
                if (!t) {
                    return null;
                }
                if (t instanceof Ke) {
                    return t.getFirst();
                }
                return t;
            }
        },
        _hasMultipleElementsWithId: {
            value: function(e) {
                return this.byId[e] instanceof Ke;
            }
        },
        getElementsByName: {
            value: ft.prototype.getElementsByName
        },
        getElementsByTagName: {
            value: ft.prototype.getElementsByTagName
        },
        getElementsByTagNameNS: {
            value: ft.prototype.getElementsByTagNameNS
        },
        getElementsByClassName: {
            value: ft.prototype.getElementsByClassName
        },
        adoptNode: {
            value: function(t) {
                if (t.nodeType === he.DOCUMENT_NODE) {
                    B.NotSupportedError();
                }
                if (t.nodeType === he.ATTRIBUTE_NODE) {
                    return t;
                }
                if (t.parentNode) {
                    t.parentNode.removeChild(t);
                }
                if (t.ownerDocument !== this) {
                    Q0(t, this);
                }
                return t;
            }
        },
        importNode: {
            value: function(t, r) {
                return this.adoptNode(t.cloneNode(r));
            },
            writable: isApiWritable
        },
        origin: {
            get: function() {
                return null;
            }
        },
        characterSet: {
            get: function() {
                return "UTF-8";
            }
        },
        contentType: {
            get: function() {
                return this._contentType;
            }
        },
        URL: {
            get: function() {
                return this._address;
            }
        },
        domain: {
            get: B.nyi,
            set: B.nyi
        },
        referrer: {
            get: B.nyi
        },
        cookie: {
            get: B.nyi,
            set: B.nyi
        },
        lastModified: {
            get: B.nyi
        },
        location: {
            get: function() {
                if (this.defaultView) {
                    return this.defaultView.location;
                }
                return null;
            },
            set: B.nyi
        },
        _titleElement: {
            get: function() {
                return this.getElementsByTagName("title").item(0) || null;
            }
        },
        title: {
            get: function() {
                const _titleElement = this._titleElement;
                const t = _titleElement ? _titleElement.textContent : "";
                return t.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, "");
            },
            set: function(e) {
                let _titleElement = this._titleElement;
                const head = this.head;
                if (!_titleElement && !head) {
                    return;
                }
                if (!_titleElement) {
                    _titleElement = this.createElement("title");
                    head.appendChild(_titleElement);
                }
                _titleElement.textContent = e;
            }
        },
        dir: Vt(function() {
            const documentElement = this.documentElement;
            if (documentElement && documentElement.tagName === "HTML") {
                return documentElement;
            }
        }, "dir", ""),
        fgColor: Vt(function() {
            return this.body;
        }, "text", ""),
        linkColor: Vt(function() {
            return this.body;
        }, "link", ""),
        vlinkColor: Vt(function() {
            return this.body;
        }, "vLink", ""),
        alinkColor: Vt(function() {
            return this.body;
        }, "aLink", ""),
        bgColor: Vt(function() {
            return this.body;
        }, "bgColor", ""),
        charset: {
            get: function() {
                return this.characterSet;
            }
        },
        inputEncoding: {
            get: function() {
                return this.characterSet;
            }
        },
        scrollingElement: {
            get: function() {
                if (this._quirks) {
                    return this.body;
                }
                return this.documentElement;
            }
        },
        body: {
            get: function() {
                return W0(this.documentElement, "body");
            },
            set: B.nyi
        },
        head: {
            get: function() {
                return W0(this.documentElement, "head");
            }
        },
        images: {
            get: B.nyi
        },
        embeds: {
            get: B.nyi
        },
        plugins: {
            get: B.nyi
        },
        links: {
            get: B.nyi
        },
        forms: {
            get: B.nyi
        },
        scripts: {
            get: B.nyi
        },
        applets: {
            get: function() {
                return [];
            }
        },
        activeElement: {
            get: function() {
                return null;
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize();
            },
            set: B.nyi
        },
        outerHTML: {
            get: function() {
                return this.serialize();
            },
            set: B.nyi
        },
        write: {
            value: function(e) {
                if (!this.isHTML) {
                    B.InvalidStateError();
                }
                if (!this._parser) {
                    return;
                }
                if (!this._parser) ;
                const t = arguments.join("");
                this._parser.parse(t);
            }
        },
        writeln: {
            value: function(t) {
                this.write(Array.prototype.join.call(arguments, "") + `
`);
            }
        },
        open: {
            value: function() {
                this.documentElement = null;
            }
        },
        close: {
            value: function() {
                this.readyState = "interactive";
                this._dispatchEvent(new gr("readystatechange"), true);
                this._dispatchEvent(new gr("DOMContentLoaded"), true);
                this.readyState = "complete";
                this._dispatchEvent(new gr("readystatechange"), true);
                if (this.defaultView) {
                    this.defaultView._dispatchEvent(new gr("load"), true);
                }
            }
        },
        clone: {
            value: function() {
                const t = new br(this.isHTML, this._address);
                t._quirks = this._quirks;
                t._contentType = this._contentType;
                return t;
            }
        },
        cloneNode: {
            value: function(t) {
                const r = he.prototype.cloneNode.call(this, false);
                if (t) {
                    for(let a = this.firstChild; a !== null; a = a.nextSibling){
                        r._appendChild(r.importNode(a, true));
                    }
                }
                r._updateDocTypeElement();
                return r;
            }
        },
        isEqual: {
            value: function(t) {
                return true;
            }
        },
        mutateValue: {
            value: function(target) {
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.VALUE,
                        target,
                        data: target.data
                    });
                }
            }
        },
        mutateAttr: {
            value: function(e, t) {
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.ATTR,
                        target: e.ownerElement,
                        attr: e
                    });
                }
            }
        },
        mutateRemoveAttr: {
            value: function(e) {
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.REMOVE_ATTR,
                        target: e.ownerElement,
                        attr: e
                    });
                }
            }
        },
        mutateRemove: {
            value: function(e) {
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.REMOVE,
                        target: e.parentNode,
                        node: e
                    });
                }
                Y0(e);
            }
        },
        mutateInsert: {
            value: function(e) {
                K0(e);
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.INSERT,
                        target: e.parentNode,
                        node: e
                    });
                }
            }
        },
        mutateMove: {
            value: function(target) {
                if (this.mutationHandler) {
                    this.mutationHandler({
                        type: Ut.MOVE,
                        target
                    });
                }
            }
        },
        addId: {
            value: function(t, r) {
                let a = this.byId[t];
                if (!a) {
                    this.byId[t] = r;
                } else {
                    if (!(a instanceof Ke)) {
                        a = new Ke(a);
                        this.byId[t] = a;
                    }
                    a.add(r);
                }
            }
        },
        delId: {
            value: function(t, r) {
                const a = this.byId[t];
                B.assert(a);
                if (a instanceof Ke) {
                    a.del(r);
                    if (a.length === 1) {
                        this.byId[t] = a.downgrade();
                    }
                } else {
                    this.byId[t] = undefined;
                }
            }
        },
        _resolve: {
            value: function(e) {
                return new j0(this._documentBaseURL).resolve(e);
            }
        },
        _documentBaseURL: {
            get: function() {
                let _address = this._address;
                if (_address === "about:blank") {
                    _address = "/";
                }
                const t = this.querySelector("base[href]");
                if (t) {
                    return new j0(_address).resolve(t.getAttribute("href"));
                }
                return _address;
            }
        },
        _templateDoc: {
            get: function() {
                if (!this._templateDocCache) {
                    const e = new br(this.isHTML, this._address);
                    this._templateDocCache = e._templateDocCache = e;
                }
                return this._templateDocCache;
            }
        },
        querySelector: {
            value: function(e) {
                return G0(e, this)[0];
            }
        },
        querySelectorAll: {
            value: function(e) {
                const t = G0(e, this);
                if (t.item) {
                    return t;
                }
                return new kx(t);
            }
        }
    });
    const Vx = [
        "abort",
        "canplay",
        "canplaythrough",
        "change",
        "click",
        "contextmenu",
        "cuechange",
        "dblclick",
        "drag",
        "dragend",
        "dragenter",
        "dragleave",
        "dragover",
        "dragstart",
        "drop",
        "durationchange",
        "emptied",
        "ended",
        "input",
        "invalid",
        "keydown",
        "keypress",
        "keyup",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "mousedown",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "mousewheel",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "readystatechange",
        "reset",
        "seeked",
        "seeking",
        "select",
        "show",
        "stalled",
        "submit",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting",
        "blur",
        "error",
        "focus",
        "load",
        "scroll"
    ];
    Vx.forEach((e)=>{
        Object.defineProperty(br.prototype, `on${e}`, {
            get: function() {
                return this._getEventHandler(e);
            },
            set: function(t) {
                this._setEventHandler(e, t);
            }
        });
    });
    function W0(documentElement, t) {
        if (documentElement && documentElement.isHTML) {
            for(let r = documentElement.firstChild; r !== null; r = r.nextSibling){
                if (r.nodeType === he.ELEMENT_NODE && r.localName === t && r.namespaceURI === B_NAMESPACE.HTML) {
                    return r;
                }
            }
        }
        return null;
    }
    function jx(e) {
        e._nid = e.ownerDocument._nextnid++;
        e.ownerDocument._nodes[e._nid] = e;
        if (e.nodeType === he.ELEMENT_NODE) {
            const t = e.getAttribute("id");
            if (t) {
                e.ownerDocument.addId(t, e);
            }
            if (e._roothook) {
                e._roothook();
            }
        }
    }
    function Gx(e) {
        if (e.nodeType === he.ELEMENT_NODE) {
            const t = e.getAttribute("id");
            if (t) {
                e.ownerDocument.delId(t, e);
            }
        }
        e.ownerDocument._nodes[e._nid] = undefined;
        e._nid = undefined;
    }
    function K0(e) {
        jx(e);
        if (e.nodeType === he.ELEMENT_NODE) {
            for(let t = e.firstChild; t !== null; t = t.nextSibling){
                K0(t);
            }
        }
    }
    function Y0(e) {
        Gx(e);
        for(let t = e.firstChild; t !== null; t = t.nextSibling){
            Y0(t);
        }
    }
    function Q0(e, t) {
        e.ownerDocument = t;
        e._lastModTime = undefined;
        if (Object.prototype.hasOwnProperty.call(e, "_tagName")) {
            e._tagName = undefined;
        }
        for(let r = e.firstChild; r !== null; r = r.nextSibling){
            Q0(r, t);
        }
    }
    class Ke {
        constructor(e){
            this.nodes = Object.create(null);
            this.nodes[e._nid] = e;
            this.length = 1;
            this.firstNode = undefined;
        }
        add(e) {
            if (!this.nodes[e._nid]) {
                this.nodes[e._nid] = e;
                this.length++;
                this.firstNode = undefined;
            }
        }
        del(e) {
            if (this.nodes[e._nid]) {
                delete this.nodes[e._nid];
                this.length--;
                this.firstNode = undefined;
            }
        }
        getFirst() {
            if (!this.firstNode) {
                let e;
                for(e in this.nodes){
                    if (this.firstNode === undefined || this.firstNode.compareDocumentPosition(this.nodes[e]) & he.DOCUMENT_POSITION_PRECEDING) {
                        this.firstNode = this.nodes[e];
                    }
                }
            }
            return this.firstNode;
        }
        downgrade() {
            if (this.length === 1) {
                let e;
                for(e in this.nodes){
                    return this.nodes[e];
                }
            }
            return this;
        }
    }
});
const ha = C(function(Xd, J0) {
    J0.exports = da;
    var zx = xe();
    var Z0 = Nn();
    const Wx = ra();
    function da(e, t, r, a) {
        Z0.call(this);
        this.nodeType = zx.DOCUMENT_TYPE_NODE;
        this.ownerDocument = e || null;
        this.name = t;
        this.publicId = r || "";
        this.systemId = a || "";
    }
    da.prototype = Object.create(Z0.prototype, {
        nodeName: {
            get: function() {
                return this.name;
            }
        },
        nodeValue: {
            get: function() {
                return null;
            },
            set: function() {}
        },
        clone: {
            value: function() {
                return new da(this.ownerDocument, this.name, this.publicId, this.systemId);
            }
        },
        isEqual: {
            value: function(t) {
                return this.name === t.name && this.publicId === t.publicId && this.systemId === t.systemId;
            }
        }
    });
    Object.defineProperties(da.prototype, Wx);
});
const va = C(function(Kd, Tc) {
    Tc.exports = q;
    var Xx = fa();
    var Kx = ha();
    var Qn = xe();
    var NAMESPACE = ee().NAMESPACE;
    var hc = la();
    var hc_elements = hc.elements;
    var wt = Function.prototype.apply.bind(Array.prototype.push);
    var pa = -1;
    var Gt = 1;
    var pe = 2;
    var I = 3;
    var Fe = 4;
    var Yx = 5;
    var Qx = [];
    var $x = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i;
    var Zx = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var ec = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i;
    var Jx = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i;
    var At = Object.create(null);
    At[NAMESPACE.HTML] = {
        __proto__: null,
        address: true,
        applet: true,
        area: true,
        article: true,
        aside: true,
        base: true,
        basefont: true,
        bgsound: true,
        blockquote: true,
        body: true,
        br: true,
        button: true,
        caption: true,
        center: true,
        col: true,
        colgroup: true,
        dd: true,
        details: true,
        dir: true,
        div: true,
        dl: true,
        dt: true,
        embed: true,
        fieldset: true,
        figcaption: true,
        figure: true,
        footer: true,
        form: true,
        frame: true,
        frameset: true,
        h1: true,
        h2: true,
        h3: true,
        h4: true,
        h5: true,
        h6: true,
        head: true,
        header: true,
        hgroup: true,
        hr: true,
        html: true,
        iframe: true,
        img: true,
        input: true,
        li: true,
        link: true,
        listing: true,
        main: true,
        marquee: true,
        menu: true,
        meta: true,
        nav: true,
        noembed: true,
        noframes: true,
        noscript: true,
        object: true,
        ol: true,
        p: true,
        param: true,
        plaintext: true,
        pre: true,
        script: true,
        section: true,
        select: true,
        source: true,
        style: true,
        summary: true,
        table: true,
        tbody: true,
        td: true,
        template: true,
        textarea: true,
        tfoot: true,
        th: true,
        thead: true,
        title: true,
        tr: true,
        track: true,
        ul: true,
        wbr: true,
        xmp: true
    };
    At[NAMESPACE.SVG] = {
        __proto__: null,
        foreignObject: true,
        desc: true,
        title: true
    };
    At[NAMESPACE.MATHML] = {
        __proto__: null,
        mi: true,
        mo: true,
        mn: true,
        ms: true,
        mtext: true,
        "annotation-xml": true
    };
    var Jn = Object.create(null);
    Jn[NAMESPACE.HTML] = {
        __proto__: null,
        address: true,
        div: true,
        p: true
    };
    var pc = Object.create(null);
    pc[NAMESPACE.HTML] = {
        __proto__: null,
        dd: true,
        dt: true
    };
    var zt = Object.create(null);
    zt[NAMESPACE.HTML] = {
        __proto__: null,
        table: true,
        thead: true,
        tbody: true,
        tfoot: true,
        tr: true
    };
    const mc = Object.create(null);
    mc[NAMESPACE.HTML] = {
        __proto__: null,
        dd: true,
        dt: true,
        li: true,
        menuitem: true,
        optgroup: true,
        option: true,
        p: true,
        rb: true,
        rp: true,
        rt: true,
        rtc: true
    };
    const gc = Object.create(null);
    gc[NAMESPACE.HTML] = {
        __proto__: null,
        caption: true,
        colgroup: true,
        dd: true,
        dt: true,
        li: true,
        optgroup: true,
        option: true,
        p: true,
        rb: true,
        rp: true,
        rt: true,
        rtc: true,
        tbody: true,
        td: true,
        tfoot: true,
        th: true,
        thead: true,
        tr: true
    };
    var ba = Object.create(null);
    ba[NAMESPACE.HTML] = {
        __proto__: null,
        table: true,
        template: true,
        html: true
    };
    var Ea = Object.create(null);
    Ea[NAMESPACE.HTML] = {
        __proto__: null,
        tbody: true,
        tfoot: true,
        thead: true,
        template: true,
        html: true
    };
    var ei = Object.create(null);
    ei[NAMESPACE.HTML] = {
        __proto__: null,
        tr: true,
        template: true,
        html: true
    };
    var bc = Object.create(null);
    bc[NAMESPACE.HTML] = {
        __proto__: null,
        button: true,
        fieldset: true,
        input: true,
        keygen: true,
        object: true,
        output: true,
        select: true,
        textarea: true,
        img: true
    };
    const Be = Object.create(null);
    Be[NAMESPACE.HTML] = {
        __proto__: null,
        applet: true,
        caption: true,
        html: true,
        table: true,
        td: true,
        th: true,
        marquee: true,
        object: true,
        template: true
    };
    Be[NAMESPACE.MATHML] = {
        __proto__: null,
        mi: true,
        mo: true,
        mn: true,
        ms: true,
        mtext: true,
        "annotation-xml": true
    };
    Be[NAMESPACE.SVG] = {
        __proto__: null,
        foreignObject: true,
        desc: true,
        title: true
    };
    const _a = Object.create(Be);
    _a[NAMESPACE.HTML] = Object.create(Be[NAMESPACE.HTML]);
    _a[NAMESPACE.HTML].ol = true;
    _a[NAMESPACE.HTML].ul = true;
    const ti = Object.create(Be);
    ti[NAMESPACE.HTML] = Object.create(Be[NAMESPACE.HTML]);
    ti[NAMESPACE.HTML].button = true;
    const Ec = Object.create(null);
    Ec[NAMESPACE.HTML] = {
        __proto__: null,
        html: true,
        table: true,
        template: true
    };
    const ef = Object.create(null);
    ef[NAMESPACE.HTML] = {
        __proto__: null,
        optgroup: true,
        option: true
    };
    var _c = Object.create(null);
    _c[NAMESPACE.MATHML] = {
        __proto__: null,
        mi: true,
        mo: true,
        mn: true,
        ms: true,
        mtext: true
    };
    var vc = Object.create(null);
    vc[NAMESPACE.SVG] = {
        __proto__: null,
        foreignObject: true,
        desc: true,
        title: true
    };
    var tc = {
        __proto__: null,
        "xlink:actuate": NAMESPACE.XLINK,
        "xlink:arcrole": NAMESPACE.XLINK,
        "xlink:href": NAMESPACE.XLINK,
        "xlink:role": NAMESPACE.XLINK,
        "xlink:show": NAMESPACE.XLINK,
        "xlink:title": NAMESPACE.XLINK,
        "xlink:type": NAMESPACE.XLINK,
        "xml:base": NAMESPACE.XML,
        "xml:lang": NAMESPACE.XML,
        "xml:space": NAMESPACE.XML,
        xmlns: NAMESPACE.XMLNS,
        "xmlns:xlink": NAMESPACE.XMLNS
    };
    var rc = {
        __proto__: null,
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
    };
    var ac = {
        __proto__: null,
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
    };
    var nc = {
        __proto__: null,
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
    };
    var tf = {
        __proto__: null,
        AElig: 198,
        "AElig;": 198,
        AMP: 38,
        "AMP;": 38,
        Aacute: 193,
        "Aacute;": 193,
        "Abreve;": 258,
        Acirc: 194,
        "Acirc;": 194,
        "Acy;": 1040,
        "Afr;": [
            55349,
            56580
        ],
        Agrave: 192,
        "Agrave;": 192,
        "Alpha;": 913,
        "Amacr;": 256,
        "And;": 10835,
        "Aogon;": 260,
        "Aopf;": [
            55349,
            56632
        ],
        "ApplyFunction;": 8289,
        Aring: 197,
        "Aring;": 197,
        "Ascr;": [
            55349,
            56476
        ],
        "Assign;": 8788,
        Atilde: 195,
        "Atilde;": 195,
        Auml: 196,
        "Auml;": 196,
        "Backslash;": 8726,
        "Barv;": 10983,
        "Barwed;": 8966,
        "Bcy;": 1041,
        "Because;": 8757,
        "Bernoullis;": 8492,
        "Beta;": 914,
        "Bfr;": [
            55349,
            56581
        ],
        "Bopf;": [
            55349,
            56633
        ],
        "Breve;": 728,
        "Bscr;": 8492,
        "Bumpeq;": 8782,
        "CHcy;": 1063,
        COPY: 169,
        "COPY;": 169,
        "Cacute;": 262,
        "Cap;": 8914,
        "CapitalDifferentialD;": 8517,
        "Cayleys;": 8493,
        "Ccaron;": 268,
        Ccedil: 199,
        "Ccedil;": 199,
        "Ccirc;": 264,
        "Cconint;": 8752,
        "Cdot;": 266,
        "Cedilla;": 184,
        "CenterDot;": 183,
        "Cfr;": 8493,
        "Chi;": 935,
        "CircleDot;": 8857,
        "CircleMinus;": 8854,
        "CirclePlus;": 8853,
        "CircleTimes;": 8855,
        "ClockwiseContourIntegral;": 8754,
        "CloseCurlyDoubleQuote;": 8221,
        "CloseCurlyQuote;": 8217,
        "Colon;": 8759,
        "Colone;": 10868,
        "Congruent;": 8801,
        "Conint;": 8751,
        "ContourIntegral;": 8750,
        "Copf;": 8450,
        "Coproduct;": 8720,
        "CounterClockwiseContourIntegral;": 8755,
        "Cross;": 10799,
        "Cscr;": [
            55349,
            56478
        ],
        "Cup;": 8915,
        "CupCap;": 8781,
        "DD;": 8517,
        "DDotrahd;": 10513,
        "DJcy;": 1026,
        "DScy;": 1029,
        "DZcy;": 1039,
        "Dagger;": 8225,
        "Darr;": 8609,
        "Dashv;": 10980,
        "Dcaron;": 270,
        "Dcy;": 1044,
        "Del;": 8711,
        "Delta;": 916,
        "Dfr;": [
            55349,
            56583
        ],
        "DiacriticalAcute;": 180,
        "DiacriticalDot;": 729,
        "DiacriticalDoubleAcute;": 733,
        "DiacriticalGrave;": 96,
        "DiacriticalTilde;": 732,
        "Diamond;": 8900,
        "DifferentialD;": 8518,
        "Dopf;": [
            55349,
            56635
        ],
        "Dot;": 168,
        "DotDot;": 8412,
        "DotEqual;": 8784,
        "DoubleContourIntegral;": 8751,
        "DoubleDot;": 168,
        "DoubleDownArrow;": 8659,
        "DoubleLeftArrow;": 8656,
        "DoubleLeftRightArrow;": 8660,
        "DoubleLeftTee;": 10980,
        "DoubleLongLeftArrow;": 10232,
        "DoubleLongLeftRightArrow;": 10234,
        "DoubleLongRightArrow;": 10233,
        "DoubleRightArrow;": 8658,
        "DoubleRightTee;": 8872,
        "DoubleUpArrow;": 8657,
        "DoubleUpDownArrow;": 8661,
        "DoubleVerticalBar;": 8741,
        "DownArrow;": 8595,
        "DownArrowBar;": 10515,
        "DownArrowUpArrow;": 8693,
        "DownBreve;": 785,
        "DownLeftRightVector;": 10576,
        "DownLeftTeeVector;": 10590,
        "DownLeftVector;": 8637,
        "DownLeftVectorBar;": 10582,
        "DownRightTeeVector;": 10591,
        "DownRightVector;": 8641,
        "DownRightVectorBar;": 10583,
        "DownTee;": 8868,
        "DownTeeArrow;": 8615,
        "Downarrow;": 8659,
        "Dscr;": [
            55349,
            56479
        ],
        "Dstrok;": 272,
        "ENG;": 330,
        ETH: 208,
        "ETH;": 208,
        Eacute: 201,
        "Eacute;": 201,
        "Ecaron;": 282,
        Ecirc: 202,
        "Ecirc;": 202,
        "Ecy;": 1069,
        "Edot;": 278,
        "Efr;": [
            55349,
            56584
        ],
        Egrave: 200,
        "Egrave;": 200,
        "Element;": 8712,
        "Emacr;": 274,
        "EmptySmallSquare;": 9723,
        "EmptyVerySmallSquare;": 9643,
        "Eogon;": 280,
        "Eopf;": [
            55349,
            56636
        ],
        "Epsilon;": 917,
        "Equal;": 10869,
        "EqualTilde;": 8770,
        "Equilibrium;": 8652,
        "Escr;": 8496,
        "Esim;": 10867,
        "Eta;": 919,
        Euml: 203,
        "Euml;": 203,
        "Exists;": 8707,
        "ExponentialE;": 8519,
        "Fcy;": 1060,
        "Ffr;": [
            55349,
            56585
        ],
        "FilledSmallSquare;": 9724,
        "FilledVerySmallSquare;": 9642,
        "Fopf;": [
            55349,
            56637
        ],
        "ForAll;": 8704,
        "Fouriertrf;": 8497,
        "Fscr;": 8497,
        "GJcy;": 1027,
        GT: 62,
        "GT;": 62,
        "Gamma;": 915,
        "Gammad;": 988,
        "Gbreve;": 286,
        "Gcedil;": 290,
        "Gcirc;": 284,
        "Gcy;": 1043,
        "Gdot;": 288,
        "Gfr;": [
            55349,
            56586
        ],
        "Gg;": 8921,
        "Gopf;": [
            55349,
            56638
        ],
        "GreaterEqual;": 8805,
        "GreaterEqualLess;": 8923,
        "GreaterFullEqual;": 8807,
        "GreaterGreater;": 10914,
        "GreaterLess;": 8823,
        "GreaterSlantEqual;": 10878,
        "GreaterTilde;": 8819,
        "Gscr;": [
            55349,
            56482
        ],
        "Gt;": 8811,
        "HARDcy;": 1066,
        "Hacek;": 711,
        "Hat;": 94,
        "Hcirc;": 292,
        "Hfr;": 8460,
        "HilbertSpace;": 8459,
        "Hopf;": 8461,
        "HorizontalLine;": 9472,
        "Hscr;": 8459,
        "Hstrok;": 294,
        "HumpDownHump;": 8782,
        "HumpEqual;": 8783,
        "IEcy;": 1045,
        "IJlig;": 306,
        "IOcy;": 1025,
        Iacute: 205,
        "Iacute;": 205,
        Icirc: 206,
        "Icirc;": 206,
        "Icy;": 1048,
        "Idot;": 304,
        "Ifr;": 8465,
        Igrave: 204,
        "Igrave;": 204,
        "Im;": 8465,
        "Imacr;": 298,
        "ImaginaryI;": 8520,
        "Implies;": 8658,
        "Int;": 8748,
        "Integral;": 8747,
        "Intersection;": 8898,
        "InvisibleComma;": 8291,
        "InvisibleTimes;": 8290,
        "Iogon;": 302,
        "Iopf;": [
            55349,
            56640
        ],
        "Iota;": 921,
        "Iscr;": 8464,
        "Itilde;": 296,
        "Iukcy;": 1030,
        Iuml: 207,
        "Iuml;": 207,
        "Jcirc;": 308,
        "Jcy;": 1049,
        "Jfr;": [
            55349,
            56589
        ],
        "Jopf;": [
            55349,
            56641
        ],
        "Jscr;": [
            55349,
            56485
        ],
        "Jsercy;": 1032,
        "Jukcy;": 1028,
        "KHcy;": 1061,
        "KJcy;": 1036,
        "Kappa;": 922,
        "Kcedil;": 310,
        "Kcy;": 1050,
        "Kfr;": [
            55349,
            56590
        ],
        "Kopf;": [
            55349,
            56642
        ],
        "Kscr;": [
            55349,
            56486
        ],
        "LJcy;": 1033,
        LT: 60,
        "LT;": 60,
        "Lacute;": 313,
        "Lambda;": 923,
        "Lang;": 10218,
        "Laplacetrf;": 8466,
        "Larr;": 8606,
        "Lcaron;": 317,
        "Lcedil;": 315,
        "Lcy;": 1051,
        "LeftAngleBracket;": 10216,
        "LeftArrow;": 8592,
        "LeftArrowBar;": 8676,
        "LeftArrowRightArrow;": 8646,
        "LeftCeiling;": 8968,
        "LeftDoubleBracket;": 10214,
        "LeftDownTeeVector;": 10593,
        "LeftDownVector;": 8643,
        "LeftDownVectorBar;": 10585,
        "LeftFloor;": 8970,
        "LeftRightArrow;": 8596,
        "LeftRightVector;": 10574,
        "LeftTee;": 8867,
        "LeftTeeArrow;": 8612,
        "LeftTeeVector;": 10586,
        "LeftTriangle;": 8882,
        "LeftTriangleBar;": 10703,
        "LeftTriangleEqual;": 8884,
        "LeftUpDownVector;": 10577,
        "LeftUpTeeVector;": 10592,
        "LeftUpVector;": 8639,
        "LeftUpVectorBar;": 10584,
        "LeftVector;": 8636,
        "LeftVectorBar;": 10578,
        "Leftarrow;": 8656,
        "Leftrightarrow;": 8660,
        "LessEqualGreater;": 8922,
        "LessFullEqual;": 8806,
        "LessGreater;": 8822,
        "LessLess;": 10913,
        "LessSlantEqual;": 10877,
        "LessTilde;": 8818,
        "Lfr;": [
            55349,
            56591
        ],
        "Ll;": 8920,
        "Lleftarrow;": 8666,
        "Lmidot;": 319,
        "LongLeftArrow;": 10229,
        "LongLeftRightArrow;": 10231,
        "LongRightArrow;": 10230,
        "Longleftarrow;": 10232,
        "Longleftrightarrow;": 10234,
        "Longrightarrow;": 10233,
        "Lopf;": [
            55349,
            56643
        ],
        "LowerLeftArrow;": 8601,
        "LowerRightArrow;": 8600,
        "Lscr;": 8466,
        "Lsh;": 8624,
        "Lstrok;": 321,
        "Lt;": 8810,
        "Map;": 10501,
        "Mcy;": 1052,
        "MediumSpace;": 8287,
        "Mellintrf;": 8499,
        "Mfr;": [
            55349,
            56592
        ],
        "MinusPlus;": 8723,
        "Mopf;": [
            55349,
            56644
        ],
        "Mscr;": 8499,
        "Mu;": 924,
        "NJcy;": 1034,
        "Nacute;": 323,
        "Ncaron;": 327,
        "Ncedil;": 325,
        "Ncy;": 1053,
        "NegativeMediumSpace;": 8203,
        "NegativeThickSpace;": 8203,
        "NegativeThinSpace;": 8203,
        "NegativeVeryThinSpace;": 8203,
        "NestedGreaterGreater;": 8811,
        "NestedLessLess;": 8810,
        "NewLine;": 10,
        "Nfr;": [
            55349,
            56593
        ],
        "NoBreak;": 8288,
        "NonBreakingSpace;": 160,
        "Nopf;": 8469,
        "Not;": 10988,
        "NotCongruent;": 8802,
        "NotCupCap;": 8813,
        "NotDoubleVerticalBar;": 8742,
        "NotElement;": 8713,
        "NotEqual;": 8800,
        "NotEqualTilde;": [
            8770,
            824
        ],
        "NotExists;": 8708,
        "NotGreater;": 8815,
        "NotGreaterEqual;": 8817,
        "NotGreaterFullEqual;": [
            8807,
            824
        ],
        "NotGreaterGreater;": [
            8811,
            824
        ],
        "NotGreaterLess;": 8825,
        "NotGreaterSlantEqual;": [
            10878,
            824
        ],
        "NotGreaterTilde;": 8821,
        "NotHumpDownHump;": [
            8782,
            824
        ],
        "NotHumpEqual;": [
            8783,
            824
        ],
        "NotLeftTriangle;": 8938,
        "NotLeftTriangleBar;": [
            10703,
            824
        ],
        "NotLeftTriangleEqual;": 8940,
        "NotLess;": 8814,
        "NotLessEqual;": 8816,
        "NotLessGreater;": 8824,
        "NotLessLess;": [
            8810,
            824
        ],
        "NotLessSlantEqual;": [
            10877,
            824
        ],
        "NotLessTilde;": 8820,
        "NotNestedGreaterGreater;": [
            10914,
            824
        ],
        "NotNestedLessLess;": [
            10913,
            824
        ],
        "NotPrecedes;": 8832,
        "NotPrecedesEqual;": [
            10927,
            824
        ],
        "NotPrecedesSlantEqual;": 8928,
        "NotReverseElement;": 8716,
        "NotRightTriangle;": 8939,
        "NotRightTriangleBar;": [
            10704,
            824
        ],
        "NotRightTriangleEqual;": 8941,
        "NotSquareSubset;": [
            8847,
            824
        ],
        "NotSquareSubsetEqual;": 8930,
        "NotSquareSuperset;": [
            8848,
            824
        ],
        "NotSquareSupersetEqual;": 8931,
        "NotSubset;": [
            8834,
            8402
        ],
        "NotSubsetEqual;": 8840,
        "NotSucceeds;": 8833,
        "NotSucceedsEqual;": [
            10928,
            824
        ],
        "NotSucceedsSlantEqual;": 8929,
        "NotSucceedsTilde;": [
            8831,
            824
        ],
        "NotSuperset;": [
            8835,
            8402
        ],
        "NotSupersetEqual;": 8841,
        "NotTilde;": 8769,
        "NotTildeEqual;": 8772,
        "NotTildeFullEqual;": 8775,
        "NotTildeTilde;": 8777,
        "NotVerticalBar;": 8740,
        "Nscr;": [
            55349,
            56489
        ],
        Ntilde: 209,
        "Ntilde;": 209,
        "Nu;": 925,
        "OElig;": 338,
        Oacute: 211,
        "Oacute;": 211,
        Ocirc: 212,
        "Ocirc;": 212,
        "Ocy;": 1054,
        "Odblac;": 336,
        "Ofr;": [
            55349,
            56594
        ],
        Ograve: 210,
        "Ograve;": 210,
        "Omacr;": 332,
        "Omega;": 937,
        "Omicron;": 927,
        "Oopf;": [
            55349,
            56646
        ],
        "OpenCurlyDoubleQuote;": 8220,
        "OpenCurlyQuote;": 8216,
        "Or;": 10836,
        "Oscr;": [
            55349,
            56490
        ],
        Oslash: 216,
        "Oslash;": 216,
        Otilde: 213,
        "Otilde;": 213,
        "Otimes;": 10807,
        Ouml: 214,
        "Ouml;": 214,
        "OverBar;": 8254,
        "OverBrace;": 9182,
        "OverBracket;": 9140,
        "OverParenthesis;": 9180,
        "PartialD;": 8706,
        "Pcy;": 1055,
        "Pfr;": [
            55349,
            56595
        ],
        "Phi;": 934,
        "Pi;": 928,
        "PlusMinus;": 177,
        "Poincareplane;": 8460,
        "Popf;": 8473,
        "Pr;": 10939,
        "Precedes;": 8826,
        "PrecedesEqual;": 10927,
        "PrecedesSlantEqual;": 8828,
        "PrecedesTilde;": 8830,
        "Prime;": 8243,
        "Product;": 8719,
        "Proportion;": 8759,
        "Proportional;": 8733,
        "Pscr;": [
            55349,
            56491
        ],
        "Psi;": 936,
        QUOT: 34,
        "QUOT;": 34,
        "Qfr;": [
            55349,
            56596
        ],
        "Qopf;": 8474,
        "Qscr;": [
            55349,
            56492
        ],
        "RBarr;": 10512,
        REG: 174,
        "REG;": 174,
        "Racute;": 340,
        "Rang;": 10219,
        "Rarr;": 8608,
        "Rarrtl;": 10518,
        "Rcaron;": 344,
        "Rcedil;": 342,
        "Rcy;": 1056,
        "Re;": 8476,
        "ReverseElement;": 8715,
        "ReverseEquilibrium;": 8651,
        "ReverseUpEquilibrium;": 10607,
        "Rfr;": 8476,
        "Rho;": 929,
        "RightAngleBracket;": 10217,
        "RightArrow;": 8594,
        "RightArrowBar;": 8677,
        "RightArrowLeftArrow;": 8644,
        "RightCeiling;": 8969,
        "RightDoubleBracket;": 10215,
        "RightDownTeeVector;": 10589,
        "RightDownVector;": 8642,
        "RightDownVectorBar;": 10581,
        "RightFloor;": 8971,
        "RightTee;": 8866,
        "RightTeeArrow;": 8614,
        "RightTeeVector;": 10587,
        "RightTriangle;": 8883,
        "RightTriangleBar;": 10704,
        "RightTriangleEqual;": 8885,
        "RightUpDownVector;": 10575,
        "RightUpTeeVector;": 10588,
        "RightUpVector;": 8638,
        "RightUpVectorBar;": 10580,
        "RightVector;": 8640,
        "RightVectorBar;": 10579,
        "Rightarrow;": 8658,
        "Ropf;": 8477,
        "RoundImplies;": 10608,
        "Rrightarrow;": 8667,
        "Rscr;": 8475,
        "Rsh;": 8625,
        "RuleDelayed;": 10740,
        "SHCHcy;": 1065,
        "SHcy;": 1064,
        "SOFTcy;": 1068,
        "Sacute;": 346,
        "Sc;": 10940,
        "Scaron;": 352,
        "Scedil;": 350,
        "Scirc;": 348,
        "Scy;": 1057,
        "Sfr;": [
            55349,
            56598
        ],
        "ShortDownArrow;": 8595,
        "ShortLeftArrow;": 8592,
        "ShortRightArrow;": 8594,
        "ShortUpArrow;": 8593,
        "Sigma;": 931,
        "SmallCircle;": 8728,
        "Sopf;": [
            55349,
            56650
        ],
        "Sqrt;": 8730,
        "Square;": 9633,
        "SquareIntersection;": 8851,
        "SquareSubset;": 8847,
        "SquareSubsetEqual;": 8849,
        "SquareSuperset;": 8848,
        "SquareSupersetEqual;": 8850,
        "SquareUnion;": 8852,
        "Sscr;": [
            55349,
            56494
        ],
        "Star;": 8902,
        "Sub;": 8912,
        "Subset;": 8912,
        "SubsetEqual;": 8838,
        "Succeeds;": 8827,
        "SucceedsEqual;": 10928,
        "SucceedsSlantEqual;": 8829,
        "SucceedsTilde;": 8831,
        "SuchThat;": 8715,
        "Sum;": 8721,
        "Sup;": 8913,
        "Superset;": 8835,
        "SupersetEqual;": 8839,
        "Supset;": 8913,
        THORN: 222,
        "THORN;": 222,
        "TRADE;": 8482,
        "TSHcy;": 1035,
        "TScy;": 1062,
        "Tab;": 9,
        "Tau;": 932,
        "Tcaron;": 356,
        "Tcedil;": 354,
        "Tcy;": 1058,
        "Tfr;": [
            55349,
            56599
        ],
        "Therefore;": 8756,
        "Theta;": 920,
        "ThickSpace;": [
            8287,
            8202
        ],
        "ThinSpace;": 8201,
        "Tilde;": 8764,
        "TildeEqual;": 8771,
        "TildeFullEqual;": 8773,
        "TildeTilde;": 8776,
        "Topf;": [
            55349,
            56651
        ],
        "TripleDot;": 8411,
        "Tscr;": [
            55349,
            56495
        ],
        "Tstrok;": 358,
        Uacute: 218,
        "Uacute;": 218,
        "Uarr;": 8607,
        "Uarrocir;": 10569,
        "Ubrcy;": 1038,
        "Ubreve;": 364,
        Ucirc: 219,
        "Ucirc;": 219,
        "Ucy;": 1059,
        "Udblac;": 368,
        "Ufr;": [
            55349,
            56600
        ],
        Ugrave: 217,
        "Ugrave;": 217,
        "Umacr;": 362,
        "UnderBar;": 95,
        "UnderBrace;": 9183,
        "UnderBracket;": 9141,
        "UnderParenthesis;": 9181,
        "Union;": 8899,
        "UnionPlus;": 8846,
        "Uogon;": 370,
        "Uopf;": [
            55349,
            56652
        ],
        "UpArrow;": 8593,
        "UpArrowBar;": 10514,
        "UpArrowDownArrow;": 8645,
        "UpDownArrow;": 8597,
        "UpEquilibrium;": 10606,
        "UpTee;": 8869,
        "UpTeeArrow;": 8613,
        "Uparrow;": 8657,
        "Updownarrow;": 8661,
        "UpperLeftArrow;": 8598,
        "UpperRightArrow;": 8599,
        "Upsi;": 978,
        "Upsilon;": 933,
        "Uring;": 366,
        "Uscr;": [
            55349,
            56496
        ],
        "Utilde;": 360,
        Uuml: 220,
        "Uuml;": 220,
        "VDash;": 8875,
        "Vbar;": 10987,
        "Vcy;": 1042,
        "Vdash;": 8873,
        "Vdashl;": 10982,
        "Vee;": 8897,
        "Verbar;": 8214,
        "Vert;": 8214,
        "VerticalBar;": 8739,
        "VerticalLine;": 124,
        "VerticalSeparator;": 10072,
        "VerticalTilde;": 8768,
        "VeryThinSpace;": 8202,
        "Vfr;": [
            55349,
            56601
        ],
        "Vopf;": [
            55349,
            56653
        ],
        "Vscr;": [
            55349,
            56497
        ],
        "Vvdash;": 8874,
        "Wcirc;": 372,
        "Wedge;": 8896,
        "Wfr;": [
            55349,
            56602
        ],
        "Wopf;": [
            55349,
            56654
        ],
        "Wscr;": [
            55349,
            56498
        ],
        "Xfr;": [
            55349,
            56603
        ],
        "Xi;": 926,
        "Xopf;": [
            55349,
            56655
        ],
        "Xscr;": [
            55349,
            56499
        ],
        "YAcy;": 1071,
        "YIcy;": 1031,
        "YUcy;": 1070,
        Yacute: 221,
        "Yacute;": 221,
        "Ycirc;": 374,
        "Ycy;": 1067,
        "Yfr;": [
            55349,
            56604
        ],
        "Yopf;": [
            55349,
            56656
        ],
        "Yscr;": [
            55349,
            56500
        ],
        "Yuml;": 376,
        "ZHcy;": 1046,
        "Zacute;": 377,
        "Zcaron;": 381,
        "Zcy;": 1047,
        "Zdot;": 379,
        "ZeroWidthSpace;": 8203,
        "Zeta;": 918,
        "Zfr;": 8488,
        "Zopf;": 8484,
        "Zscr;": [
            55349,
            56501
        ],
        aacute: 225,
        "aacute;": 225,
        "abreve;": 259,
        "ac;": 8766,
        "acE;": [
            8766,
            819
        ],
        "acd;": 8767,
        acirc: 226,
        "acirc;": 226,
        acute: 180,
        "acute;": 180,
        "acy;": 1072,
        aelig: 230,
        "aelig;": 230,
        "af;": 8289,
        "afr;": [
            55349,
            56606
        ],
        agrave: 224,
        "agrave;": 224,
        "alefsym;": 8501,
        "aleph;": 8501,
        "alpha;": 945,
        "amacr;": 257,
        "amalg;": 10815,
        amp: 38,
        "amp;": 38,
        "and;": 8743,
        "andand;": 10837,
        "andd;": 10844,
        "andslope;": 10840,
        "andv;": 10842,
        "ang;": 8736,
        "ange;": 10660,
        "angle;": 8736,
        "angmsd;": 8737,
        "angmsdaa;": 10664,
        "angmsdab;": 10665,
        "angmsdac;": 10666,
        "angmsdad;": 10667,
        "angmsdae;": 10668,
        "angmsdaf;": 10669,
        "angmsdag;": 10670,
        "angmsdah;": 10671,
        "angrt;": 8735,
        "angrtvb;": 8894,
        "angrtvbd;": 10653,
        "angsph;": 8738,
        "angst;": 197,
        "angzarr;": 9084,
        "aogon;": 261,
        "aopf;": [
            55349,
            56658
        ],
        "ap;": 8776,
        "apE;": 10864,
        "apacir;": 10863,
        "ape;": 8778,
        "apid;": 8779,
        "apos;": 39,
        "approx;": 8776,
        "approxeq;": 8778,
        aring: 229,
        "aring;": 229,
        "ascr;": [
            55349,
            56502
        ],
        "ast;": 42,
        "asymp;": 8776,
        "asympeq;": 8781,
        atilde: 227,
        "atilde;": 227,
        auml: 228,
        "auml;": 228,
        "awconint;": 8755,
        "awint;": 10769,
        "bNot;": 10989,
        "backcong;": 8780,
        "backepsilon;": 1014,
        "backprime;": 8245,
        "backsim;": 8765,
        "backsimeq;": 8909,
        "barvee;": 8893,
        "barwed;": 8965,
        "barwedge;": 8965,
        "bbrk;": 9141,
        "bbrktbrk;": 9142,
        "bcong;": 8780,
        "bcy;": 1073,
        "bdquo;": 8222,
        "becaus;": 8757,
        "because;": 8757,
        "bemptyv;": 10672,
        "bepsi;": 1014,
        "bernou;": 8492,
        "beta;": 946,
        "beth;": 8502,
        "between;": 8812,
        "bfr;": [
            55349,
            56607
        ],
        "bigcap;": 8898,
        "bigcirc;": 9711,
        "bigcup;": 8899,
        "bigodot;": 10752,
        "bigoplus;": 10753,
        "bigotimes;": 10754,
        "bigsqcup;": 10758,
        "bigstar;": 9733,
        "bigtriangledown;": 9661,
        "bigtriangleup;": 9651,
        "biguplus;": 10756,
        "bigvee;": 8897,
        "bigwedge;": 8896,
        "bkarow;": 10509,
        "blacklozenge;": 10731,
        "blacksquare;": 9642,
        "blacktriangle;": 9652,
        "blacktriangledown;": 9662,
        "blacktriangleleft;": 9666,
        "blacktriangleright;": 9656,
        "blank;": 9251,
        "blk12;": 9618,
        "blk14;": 9617,
        "blk34;": 9619,
        "block;": 9608,
        "bne;": [
            61,
            8421
        ],
        "bnequiv;": [
            8801,
            8421
        ],
        "bnot;": 8976,
        "bopf;": [
            55349,
            56659
        ],
        "bot;": 8869,
        "bottom;": 8869,
        "bowtie;": 8904,
        "boxDL;": 9559,
        "boxDR;": 9556,
        "boxDl;": 9558,
        "boxDr;": 9555,
        "boxH;": 9552,
        "boxHD;": 9574,
        "boxHU;": 9577,
        "boxHd;": 9572,
        "boxHu;": 9575,
        "boxUL;": 9565,
        "boxUR;": 9562,
        "boxUl;": 9564,
        "boxUr;": 9561,
        "boxV;": 9553,
        "boxVH;": 9580,
        "boxVL;": 9571,
        "boxVR;": 9568,
        "boxVh;": 9579,
        "boxVl;": 9570,
        "boxVr;": 9567,
        "boxbox;": 10697,
        "boxdL;": 9557,
        "boxdR;": 9554,
        "boxdl;": 9488,
        "boxdr;": 9484,
        "boxh;": 9472,
        "boxhD;": 9573,
        "boxhU;": 9576,
        "boxhd;": 9516,
        "boxhu;": 9524,
        "boxminus;": 8863,
        "boxplus;": 8862,
        "boxtimes;": 8864,
        "boxuL;": 9563,
        "boxuR;": 9560,
        "boxul;": 9496,
        "boxur;": 9492,
        "boxv;": 9474,
        "boxvH;": 9578,
        "boxvL;": 9569,
        "boxvR;": 9566,
        "boxvh;": 9532,
        "boxvl;": 9508,
        "boxvr;": 9500,
        "bprime;": 8245,
        "breve;": 728,
        brvbar: 166,
        "brvbar;": 166,
        "bscr;": [
            55349,
            56503
        ],
        "bsemi;": 8271,
        "bsim;": 8765,
        "bsime;": 8909,
        "bsol;": 92,
        "bsolb;": 10693,
        "bsolhsub;": 10184,
        "bull;": 8226,
        "bullet;": 8226,
        "bump;": 8782,
        "bumpE;": 10926,
        "bumpe;": 8783,
        "bumpeq;": 8783,
        "cacute;": 263,
        "cap;": 8745,
        "capand;": 10820,
        "capbrcup;": 10825,
        "capcap;": 10827,
        "capcup;": 10823,
        "capdot;": 10816,
        "caps;": [
            8745,
            65024
        ],
        "caret;": 8257,
        "caron;": 711,
        "ccaps;": 10829,
        "ccaron;": 269,
        ccedil: 231,
        "ccedil;": 231,
        "ccirc;": 265,
        "ccups;": 10828,
        "ccupssm;": 10832,
        "cdot;": 267,
        cedil: 184,
        "cedil;": 184,
        "cemptyv;": 10674,
        cent: 162,
        "cent;": 162,
        "centerdot;": 183,
        "cfr;": [
            55349,
            56608
        ],
        "chcy;": 1095,
        "check;": 10003,
        "checkmark;": 10003,
        "chi;": 967,
        "cir;": 9675,
        "cirE;": 10691,
        "circ;": 710,
        "circeq;": 8791,
        "circlearrowleft;": 8634,
        "circlearrowright;": 8635,
        "circledR;": 174,
        "circledS;": 9416,
        "circledast;": 8859,
        "circledcirc;": 8858,
        "circleddash;": 8861,
        "cire;": 8791,
        "cirfnint;": 10768,
        "cirmid;": 10991,
        "cirscir;": 10690,
        "clubs;": 9827,
        "clubsuit;": 9827,
        "colon;": 58,
        "colone;": 8788,
        "coloneq;": 8788,
        "comma;": 44,
        "commat;": 64,
        "comp;": 8705,
        "compfn;": 8728,
        "complement;": 8705,
        "complexes;": 8450,
        "cong;": 8773,
        "congdot;": 10861,
        "conint;": 8750,
        "copf;": [
            55349,
            56660
        ],
        "coprod;": 8720,
        copy: 169,
        "copy;": 169,
        "copysr;": 8471,
        "crarr;": 8629,
        "cross;": 10007,
        "cscr;": [
            55349,
            56504
        ],
        "csub;": 10959,
        "csube;": 10961,
        "csup;": 10960,
        "csupe;": 10962,
        "ctdot;": 8943,
        "cudarrl;": 10552,
        "cudarrr;": 10549,
        "cuepr;": 8926,
        "cuesc;": 8927,
        "cularr;": 8630,
        "cularrp;": 10557,
        "cup;": 8746,
        "cupbrcap;": 10824,
        "cupcap;": 10822,
        "cupcup;": 10826,
        "cupdot;": 8845,
        "cupor;": 10821,
        "cups;": [
            8746,
            65024
        ],
        "curarr;": 8631,
        "curarrm;": 10556,
        "curlyeqprec;": 8926,
        "curlyeqsucc;": 8927,
        "curlyvee;": 8910,
        "curlywedge;": 8911,
        curren: 164,
        "curren;": 164,
        "curvearrowleft;": 8630,
        "curvearrowright;": 8631,
        "cuvee;": 8910,
        "cuwed;": 8911,
        "cwconint;": 8754,
        "cwint;": 8753,
        "cylcty;": 9005,
        "dArr;": 8659,
        "dHar;": 10597,
        "dagger;": 8224,
        "daleth;": 8504,
        "darr;": 8595,
        "dash;": 8208,
        "dashv;": 8867,
        "dbkarow;": 10511,
        "dblac;": 733,
        "dcaron;": 271,
        "dcy;": 1076,
        "dd;": 8518,
        "ddagger;": 8225,
        "ddarr;": 8650,
        "ddotseq;": 10871,
        deg: 176,
        "deg;": 176,
        "delta;": 948,
        "demptyv;": 10673,
        "dfisht;": 10623,
        "dfr;": [
            55349,
            56609
        ],
        "dharl;": 8643,
        "dharr;": 8642,
        "diam;": 8900,
        "diamond;": 8900,
        "diamondsuit;": 9830,
        "diams;": 9830,
        "die;": 168,
        "digamma;": 989,
        "disin;": 8946,
        "div;": 247,
        divide: 247,
        "divide;": 247,
        "divideontimes;": 8903,
        "divonx;": 8903,
        "djcy;": 1106,
        "dlcorn;": 8990,
        "dlcrop;": 8973,
        "dollar;": 36,
        "dopf;": [
            55349,
            56661
        ],
        "dot;": 729,
        "doteq;": 8784,
        "doteqdot;": 8785,
        "dotminus;": 8760,
        "dotplus;": 8724,
        "dotsquare;": 8865,
        "doublebarwedge;": 8966,
        "downarrow;": 8595,
        "downdownarrows;": 8650,
        "downharpoonleft;": 8643,
        "downharpoonright;": 8642,
        "drbkarow;": 10512,
        "drcorn;": 8991,
        "drcrop;": 8972,
        "dscr;": [
            55349,
            56505
        ],
        "dscy;": 1109,
        "dsol;": 10742,
        "dstrok;": 273,
        "dtdot;": 8945,
        "dtri;": 9663,
        "dtrif;": 9662,
        "duarr;": 8693,
        "duhar;": 10607,
        "dwangle;": 10662,
        "dzcy;": 1119,
        "dzigrarr;": 10239,
        "eDDot;": 10871,
        "eDot;": 8785,
        eacute: 233,
        "eacute;": 233,
        "easter;": 10862,
        "ecaron;": 283,
        "ecir;": 8790,
        ecirc: 234,
        "ecirc;": 234,
        "ecolon;": 8789,
        "ecy;": 1101,
        "edot;": 279,
        "ee;": 8519,
        "efDot;": 8786,
        "efr;": [
            55349,
            56610
        ],
        "eg;": 10906,
        egrave: 232,
        "egrave;": 232,
        "egs;": 10902,
        "egsdot;": 10904,
        "el;": 10905,
        "elinters;": 9191,
        "ell;": 8467,
        "els;": 10901,
        "elsdot;": 10903,
        "emacr;": 275,
        "empty;": 8709,
        "emptyset;": 8709,
        "emptyv;": 8709,
        "emsp13;": 8196,
        "emsp14;": 8197,
        "emsp;": 8195,
        "eng;": 331,
        "ensp;": 8194,
        "eogon;": 281,
        "eopf;": [
            55349,
            56662
        ],
        "epar;": 8917,
        "eparsl;": 10723,
        "eplus;": 10865,
        "epsi;": 949,
        "epsilon;": 949,
        "epsiv;": 1013,
        "eqcirc;": 8790,
        "eqcolon;": 8789,
        "eqsim;": 8770,
        "eqslantgtr;": 10902,
        "eqslantless;": 10901,
        "equals;": 61,
        "equest;": 8799,
        "equiv;": 8801,
        "equivDD;": 10872,
        "eqvparsl;": 10725,
        "erDot;": 8787,
        "erarr;": 10609,
        "escr;": 8495,
        "esdot;": 8784,
        "esim;": 8770,
        "eta;": 951,
        eth: 240,
        "eth;": 240,
        euml: 235,
        "euml;": 235,
        "euro;": 8364,
        "excl;": 33,
        "exist;": 8707,
        "expectation;": 8496,
        "exponentiale;": 8519,
        "fallingdotseq;": 8786,
        "fcy;": 1092,
        "female;": 9792,
        "ffilig;": 64259,
        "fflig;": 64256,
        "ffllig;": 64260,
        "ffr;": [
            55349,
            56611
        ],
        "filig;": 64257,
        "fjlig;": [
            102,
            106
        ],
        "flat;": 9837,
        "fllig;": 64258,
        "fltns;": 9649,
        "fnof;": 402,
        "fopf;": [
            55349,
            56663
        ],
        "forall;": 8704,
        "fork;": 8916,
        "forkv;": 10969,
        "fpartint;": 10765,
        frac12: 189,
        "frac12;": 189,
        "frac13;": 8531,
        frac14: 188,
        "frac14;": 188,
        "frac15;": 8533,
        "frac16;": 8537,
        "frac18;": 8539,
        "frac23;": 8532,
        "frac25;": 8534,
        frac34: 190,
        "frac34;": 190,
        "frac35;": 8535,
        "frac38;": 8540,
        "frac45;": 8536,
        "frac56;": 8538,
        "frac58;": 8541,
        "frac78;": 8542,
        "frasl;": 8260,
        "frown;": 8994,
        "fscr;": [
            55349,
            56507
        ],
        "gE;": 8807,
        "gEl;": 10892,
        "gacute;": 501,
        "gamma;": 947,
        "gammad;": 989,
        "gap;": 10886,
        "gbreve;": 287,
        "gcirc;": 285,
        "gcy;": 1075,
        "gdot;": 289,
        "ge;": 8805,
        "gel;": 8923,
        "geq;": 8805,
        "geqq;": 8807,
        "geqslant;": 10878,
        "ges;": 10878,
        "gescc;": 10921,
        "gesdot;": 10880,
        "gesdoto;": 10882,
        "gesdotol;": 10884,
        "gesl;": [
            8923,
            65024
        ],
        "gesles;": 10900,
        "gfr;": [
            55349,
            56612
        ],
        "gg;": 8811,
        "ggg;": 8921,
        "gimel;": 8503,
        "gjcy;": 1107,
        "gl;": 8823,
        "glE;": 10898,
        "gla;": 10917,
        "glj;": 10916,
        "gnE;": 8809,
        "gnap;": 10890,
        "gnapprox;": 10890,
        "gne;": 10888,
        "gneq;": 10888,
        "gneqq;": 8809,
        "gnsim;": 8935,
        "gopf;": [
            55349,
            56664
        ],
        "grave;": 96,
        "gscr;": 8458,
        "gsim;": 8819,
        "gsime;": 10894,
        "gsiml;": 10896,
        gt: 62,
        "gt;": 62,
        "gtcc;": 10919,
        "gtcir;": 10874,
        "gtdot;": 8919,
        "gtlPar;": 10645,
        "gtquest;": 10876,
        "gtrapprox;": 10886,
        "gtrarr;": 10616,
        "gtrdot;": 8919,
        "gtreqless;": 8923,
        "gtreqqless;": 10892,
        "gtrless;": 8823,
        "gtrsim;": 8819,
        "gvertneqq;": [
            8809,
            65024
        ],
        "gvnE;": [
            8809,
            65024
        ],
        "hArr;": 8660,
        "hairsp;": 8202,
        "half;": 189,
        "hamilt;": 8459,
        "hardcy;": 1098,
        "harr;": 8596,
        "harrcir;": 10568,
        "harrw;": 8621,
        "hbar;": 8463,
        "hcirc;": 293,
        "hearts;": 9829,
        "heartsuit;": 9829,
        "hellip;": 8230,
        "hercon;": 8889,
        "hfr;": [
            55349,
            56613
        ],
        "hksearow;": 10533,
        "hkswarow;": 10534,
        "hoarr;": 8703,
        "homtht;": 8763,
        "hookleftarrow;": 8617,
        "hookrightarrow;": 8618,
        "hopf;": [
            55349,
            56665
        ],
        "horbar;": 8213,
        "hscr;": [
            55349,
            56509
        ],
        "hslash;": 8463,
        "hstrok;": 295,
        "hybull;": 8259,
        "hyphen;": 8208,
        iacute: 237,
        "iacute;": 237,
        "ic;": 8291,
        icirc: 238,
        "icirc;": 238,
        "icy;": 1080,
        "iecy;": 1077,
        iexcl: 161,
        "iexcl;": 161,
        "iff;": 8660,
        "ifr;": [
            55349,
            56614
        ],
        igrave: 236,
        "igrave;": 236,
        "ii;": 8520,
        "iiiint;": 10764,
        "iiint;": 8749,
        "iinfin;": 10716,
        "iiota;": 8489,
        "ijlig;": 307,
        "imacr;": 299,
        "image;": 8465,
        "imagline;": 8464,
        "imagpart;": 8465,
        "imath;": 305,
        "imof;": 8887,
        "imped;": 437,
        "in;": 8712,
        "incare;": 8453,
        "infin;": 8734,
        "infintie;": 10717,
        "inodot;": 305,
        "int;": 8747,
        "intcal;": 8890,
        "integers;": 8484,
        "intercal;": 8890,
        "intlarhk;": 10775,
        "intprod;": 10812,
        "iocy;": 1105,
        "iogon;": 303,
        "iopf;": [
            55349,
            56666
        ],
        "iota;": 953,
        "iprod;": 10812,
        iquest: 191,
        "iquest;": 191,
        "iscr;": [
            55349,
            56510
        ],
        "isin;": 8712,
        "isinE;": 8953,
        "isindot;": 8949,
        "isins;": 8948,
        "isinsv;": 8947,
        "isinv;": 8712,
        "it;": 8290,
        "itilde;": 297,
        "iukcy;": 1110,
        iuml: 239,
        "iuml;": 239,
        "jcirc;": 309,
        "jcy;": 1081,
        "jfr;": [
            55349,
            56615
        ],
        "jmath;": 567,
        "jopf;": [
            55349,
            56667
        ],
        "jscr;": [
            55349,
            56511
        ],
        "jsercy;": 1112,
        "jukcy;": 1108,
        "kappa;": 954,
        "kappav;": 1008,
        "kcedil;": 311,
        "kcy;": 1082,
        "kfr;": [
            55349,
            56616
        ],
        "kgreen;": 312,
        "khcy;": 1093,
        "kjcy;": 1116,
        "kopf;": [
            55349,
            56668
        ],
        "kscr;": [
            55349,
            56512
        ],
        "lAarr;": 8666,
        "lArr;": 8656,
        "lAtail;": 10523,
        "lBarr;": 10510,
        "lE;": 8806,
        "lEg;": 10891,
        "lHar;": 10594,
        "lacute;": 314,
        "laemptyv;": 10676,
        "lagran;": 8466,
        "lambda;": 955,
        "lang;": 10216,
        "langd;": 10641,
        "langle;": 10216,
        "lap;": 10885,
        laquo: 171,
        "laquo;": 171,
        "larr;": 8592,
        "larrb;": 8676,
        "larrbfs;": 10527,
        "larrfs;": 10525,
        "larrhk;": 8617,
        "larrlp;": 8619,
        "larrpl;": 10553,
        "larrsim;": 10611,
        "larrtl;": 8610,
        "lat;": 10923,
        "latail;": 10521,
        "late;": 10925,
        "lates;": [
            10925,
            65024
        ],
        "lbarr;": 10508,
        "lbbrk;": 10098,
        "lbrace;": 123,
        "lbrack;": 91,
        "lbrke;": 10635,
        "lbrksld;": 10639,
        "lbrkslu;": 10637,
        "lcaron;": 318,
        "lcedil;": 316,
        "lceil;": 8968,
        "lcub;": 123,
        "lcy;": 1083,
        "ldca;": 10550,
        "ldquo;": 8220,
        "ldquor;": 8222,
        "ldrdhar;": 10599,
        "ldrushar;": 10571,
        "ldsh;": 8626,
        "le;": 8804,
        "leftarrow;": 8592,
        "leftarrowtail;": 8610,
        "leftharpoondown;": 8637,
        "leftharpoonup;": 8636,
        "leftleftarrows;": 8647,
        "leftrightarrow;": 8596,
        "leftrightarrows;": 8646,
        "leftrightharpoons;": 8651,
        "leftrightsquigarrow;": 8621,
        "leftthreetimes;": 8907,
        "leg;": 8922,
        "leq;": 8804,
        "leqq;": 8806,
        "leqslant;": 10877,
        "les;": 10877,
        "lescc;": 10920,
        "lesdot;": 10879,
        "lesdoto;": 10881,
        "lesdotor;": 10883,
        "lesg;": [
            8922,
            65024
        ],
        "lesges;": 10899,
        "lessapprox;": 10885,
        "lessdot;": 8918,
        "lesseqgtr;": 8922,
        "lesseqqgtr;": 10891,
        "lessgtr;": 8822,
        "lesssim;": 8818,
        "lfisht;": 10620,
        "lfloor;": 8970,
        "lfr;": [
            55349,
            56617
        ],
        "lg;": 8822,
        "lgE;": 10897,
        "lhard;": 8637,
        "lharu;": 8636,
        "lharul;": 10602,
        "lhblk;": 9604,
        "ljcy;": 1113,
        "ll;": 8810,
        "llarr;": 8647,
        "llcorner;": 8990,
        "llhard;": 10603,
        "lltri;": 9722,
        "lmidot;": 320,
        "lmoust;": 9136,
        "lmoustache;": 9136,
        "lnE;": 8808,
        "lnap;": 10889,
        "lnapprox;": 10889,
        "lne;": 10887,
        "lneq;": 10887,
        "lneqq;": 8808,
        "lnsim;": 8934,
        "loang;": 10220,
        "loarr;": 8701,
        "lobrk;": 10214,
        "longleftarrow;": 10229,
        "longleftrightarrow;": 10231,
        "longmapsto;": 10236,
        "longrightarrow;": 10230,
        "looparrowleft;": 8619,
        "looparrowright;": 8620,
        "lopar;": 10629,
        "lopf;": [
            55349,
            56669
        ],
        "loplus;": 10797,
        "lotimes;": 10804,
        "lowast;": 8727,
        "lowbar;": 95,
        "loz;": 9674,
        "lozenge;": 9674,
        "lozf;": 10731,
        "lpar;": 40,
        "lparlt;": 10643,
        "lrarr;": 8646,
        "lrcorner;": 8991,
        "lrhar;": 8651,
        "lrhard;": 10605,
        "lrm;": 8206,
        "lrtri;": 8895,
        "lsaquo;": 8249,
        "lscr;": [
            55349,
            56513
        ],
        "lsh;": 8624,
        "lsim;": 8818,
        "lsime;": 10893,
        "lsimg;": 10895,
        "lsqb;": 91,
        "lsquo;": 8216,
        "lsquor;": 8218,
        "lstrok;": 322,
        lt: 60,
        "lt;": 60,
        "ltcc;": 10918,
        "ltcir;": 10873,
        "ltdot;": 8918,
        "lthree;": 8907,
        "ltimes;": 8905,
        "ltlarr;": 10614,
        "ltquest;": 10875,
        "ltrPar;": 10646,
        "ltri;": 9667,
        "ltrie;": 8884,
        "ltrif;": 9666,
        "lurdshar;": 10570,
        "luruhar;": 10598,
        "lvertneqq;": [
            8808,
            65024
        ],
        "lvnE;": [
            8808,
            65024
        ],
        "mDDot;": 8762,
        macr: 175,
        "macr;": 175,
        "male;": 9794,
        "malt;": 10016,
        "maltese;": 10016,
        "map;": 8614,
        "mapsto;": 8614,
        "mapstodown;": 8615,
        "mapstoleft;": 8612,
        "mapstoup;": 8613,
        "marker;": 9646,
        "mcomma;": 10793,
        "mcy;": 1084,
        "mdash;": 8212,
        "measuredangle;": 8737,
        "mfr;": [
            55349,
            56618
        ],
        "mho;": 8487,
        micro: 181,
        "micro;": 181,
        "mid;": 8739,
        "midast;": 42,
        "midcir;": 10992,
        middot: 183,
        "middot;": 183,
        "minus;": 8722,
        "minusb;": 8863,
        "minusd;": 8760,
        "minusdu;": 10794,
        "mlcp;": 10971,
        "mldr;": 8230,
        "mnplus;": 8723,
        "models;": 8871,
        "mopf;": [
            55349,
            56670
        ],
        "mp;": 8723,
        "mscr;": [
            55349,
            56514
        ],
        "mstpos;": 8766,
        "mu;": 956,
        "multimap;": 8888,
        "mumap;": 8888,
        "nGg;": [
            8921,
            824
        ],
        "nGt;": [
            8811,
            8402
        ],
        "nGtv;": [
            8811,
            824
        ],
        "nLeftarrow;": 8653,
        "nLeftrightarrow;": 8654,
        "nLl;": [
            8920,
            824
        ],
        "nLt;": [
            8810,
            8402
        ],
        "nLtv;": [
            8810,
            824
        ],
        "nRightarrow;": 8655,
        "nVDash;": 8879,
        "nVdash;": 8878,
        "nabla;": 8711,
        "nacute;": 324,
        "nang;": [
            8736,
            8402
        ],
        "nap;": 8777,
        "napE;": [
            10864,
            824
        ],
        "napid;": [
            8779,
            824
        ],
        "napos;": 329,
        "napprox;": 8777,
        "natur;": 9838,
        "natural;": 9838,
        "naturals;": 8469,
        nbsp: 160,
        "nbsp;": 160,
        "nbump;": [
            8782,
            824
        ],
        "nbumpe;": [
            8783,
            824
        ],
        "ncap;": 10819,
        "ncaron;": 328,
        "ncedil;": 326,
        "ncong;": 8775,
        "ncongdot;": [
            10861,
            824
        ],
        "ncup;": 10818,
        "ncy;": 1085,
        "ndash;": 8211,
        "ne;": 8800,
        "neArr;": 8663,
        "nearhk;": 10532,
        "nearr;": 8599,
        "nearrow;": 8599,
        "nedot;": [
            8784,
            824
        ],
        "nequiv;": 8802,
        "nesear;": 10536,
        "nesim;": [
            8770,
            824
        ],
        "nexist;": 8708,
        "nexists;": 8708,
        "nfr;": [
            55349,
            56619
        ],
        "ngE;": [
            8807,
            824
        ],
        "nge;": 8817,
        "ngeq;": 8817,
        "ngeqq;": [
            8807,
            824
        ],
        "ngeqslant;": [
            10878,
            824
        ],
        "nges;": [
            10878,
            824
        ],
        "ngsim;": 8821,
        "ngt;": 8815,
        "ngtr;": 8815,
        "nhArr;": 8654,
        "nharr;": 8622,
        "nhpar;": 10994,
        "ni;": 8715,
        "nis;": 8956,
        "nisd;": 8954,
        "niv;": 8715,
        "njcy;": 1114,
        "nlArr;": 8653,
        "nlE;": [
            8806,
            824
        ],
        "nlarr;": 8602,
        "nldr;": 8229,
        "nle;": 8816,
        "nleftarrow;": 8602,
        "nleftrightarrow;": 8622,
        "nleq;": 8816,
        "nleqq;": [
            8806,
            824
        ],
        "nleqslant;": [
            10877,
            824
        ],
        "nles;": [
            10877,
            824
        ],
        "nless;": 8814,
        "nlsim;": 8820,
        "nlt;": 8814,
        "nltri;": 8938,
        "nltrie;": 8940,
        "nmid;": 8740,
        "nopf;": [
            55349,
            56671
        ],
        not: 172,
        "not;": 172,
        "notin;": 8713,
        "notinE;": [
            8953,
            824
        ],
        "notindot;": [
            8949,
            824
        ],
        "notinva;": 8713,
        "notinvb;": 8951,
        "notinvc;": 8950,
        "notni;": 8716,
        "notniva;": 8716,
        "notnivb;": 8958,
        "notnivc;": 8957,
        "npar;": 8742,
        "nparallel;": 8742,
        "nparsl;": [
            11005,
            8421
        ],
        "npart;": [
            8706,
            824
        ],
        "npolint;": 10772,
        "npr;": 8832,
        "nprcue;": 8928,
        "npre;": [
            10927,
            824
        ],
        "nprec;": 8832,
        "npreceq;": [
            10927,
            824
        ],
        "nrArr;": 8655,
        "nrarr;": 8603,
        "nrarrc;": [
            10547,
            824
        ],
        "nrarrw;": [
            8605,
            824
        ],
        "nrightarrow;": 8603,
        "nrtri;": 8939,
        "nrtrie;": 8941,
        "nsc;": 8833,
        "nsccue;": 8929,
        "nsce;": [
            10928,
            824
        ],
        "nscr;": [
            55349,
            56515
        ],
        "nshortmid;": 8740,
        "nshortparallel;": 8742,
        "nsim;": 8769,
        "nsime;": 8772,
        "nsimeq;": 8772,
        "nsmid;": 8740,
        "nspar;": 8742,
        "nsqsube;": 8930,
        "nsqsupe;": 8931,
        "nsub;": 8836,
        "nsubE;": [
            10949,
            824
        ],
        "nsube;": 8840,
        "nsubset;": [
            8834,
            8402
        ],
        "nsubseteq;": 8840,
        "nsubseteqq;": [
            10949,
            824
        ],
        "nsucc;": 8833,
        "nsucceq;": [
            10928,
            824
        ],
        "nsup;": 8837,
        "nsupE;": [
            10950,
            824
        ],
        "nsupe;": 8841,
        "nsupset;": [
            8835,
            8402
        ],
        "nsupseteq;": 8841,
        "nsupseteqq;": [
            10950,
            824
        ],
        "ntgl;": 8825,
        ntilde: 241,
        "ntilde;": 241,
        "ntlg;": 8824,
        "ntriangleleft;": 8938,
        "ntrianglelefteq;": 8940,
        "ntriangleright;": 8939,
        "ntrianglerighteq;": 8941,
        "nu;": 957,
        "num;": 35,
        "numero;": 8470,
        "numsp;": 8199,
        "nvDash;": 8877,
        "nvHarr;": 10500,
        "nvap;": [
            8781,
            8402
        ],
        "nvdash;": 8876,
        "nvge;": [
            8805,
            8402
        ],
        "nvgt;": [
            62,
            8402
        ],
        "nvinfin;": 10718,
        "nvlArr;": 10498,
        "nvle;": [
            8804,
            8402
        ],
        "nvlt;": [
            60,
            8402
        ],
        "nvltrie;": [
            8884,
            8402
        ],
        "nvrArr;": 10499,
        "nvrtrie;": [
            8885,
            8402
        ],
        "nvsim;": [
            8764,
            8402
        ],
        "nwArr;": 8662,
        "nwarhk;": 10531,
        "nwarr;": 8598,
        "nwarrow;": 8598,
        "nwnear;": 10535,
        "oS;": 9416,
        oacute: 243,
        "oacute;": 243,
        "oast;": 8859,
        "ocir;": 8858,
        ocirc: 244,
        "ocirc;": 244,
        "ocy;": 1086,
        "odash;": 8861,
        "odblac;": 337,
        "odiv;": 10808,
        "odot;": 8857,
        "odsold;": 10684,
        "oelig;": 339,
        "ofcir;": 10687,
        "ofr;": [
            55349,
            56620
        ],
        "ogon;": 731,
        ograve: 242,
        "ograve;": 242,
        "ogt;": 10689,
        "ohbar;": 10677,
        "ohm;": 937,
        "oint;": 8750,
        "olarr;": 8634,
        "olcir;": 10686,
        "olcross;": 10683,
        "oline;": 8254,
        "olt;": 10688,
        "omacr;": 333,
        "omega;": 969,
        "omicron;": 959,
        "omid;": 10678,
        "ominus;": 8854,
        "oopf;": [
            55349,
            56672
        ],
        "opar;": 10679,
        "operp;": 10681,
        "oplus;": 8853,
        "or;": 8744,
        "orarr;": 8635,
        "ord;": 10845,
        "order;": 8500,
        "orderof;": 8500,
        ordf: 170,
        "ordf;": 170,
        ordm: 186,
        "ordm;": 186,
        "origof;": 8886,
        "oror;": 10838,
        "orslope;": 10839,
        "orv;": 10843,
        "oscr;": 8500,
        oslash: 248,
        "oslash;": 248,
        "osol;": 8856,
        otilde: 245,
        "otilde;": 245,
        "otimes;": 8855,
        "otimesas;": 10806,
        ouml: 246,
        "ouml;": 246,
        "ovbar;": 9021,
        "par;": 8741,
        para: 182,
        "para;": 182,
        "parallel;": 8741,
        "parsim;": 10995,
        "parsl;": 11005,
        "part;": 8706,
        "pcy;": 1087,
        "percnt;": 37,
        "period;": 46,
        "permil;": 8240,
        "perp;": 8869,
        "pertenk;": 8241,
        "pfr;": [
            55349,
            56621
        ],
        "phi;": 966,
        "phiv;": 981,
        "phmmat;": 8499,
        "phone;": 9742,
        "pi;": 960,
        "pitchfork;": 8916,
        "piv;": 982,
        "planck;": 8463,
        "planckh;": 8462,
        "plankv;": 8463,
        "plus;": 43,
        "plusacir;": 10787,
        "plusb;": 8862,
        "pluscir;": 10786,
        "plusdo;": 8724,
        "plusdu;": 10789,
        "pluse;": 10866,
        plusmn: 177,
        "plusmn;": 177,
        "plussim;": 10790,
        "plustwo;": 10791,
        "pm;": 177,
        "pointint;": 10773,
        "popf;": [
            55349,
            56673
        ],
        pound: 163,
        "pound;": 163,
        "pr;": 8826,
        "prE;": 10931,
        "prap;": 10935,
        "prcue;": 8828,
        "pre;": 10927,
        "prec;": 8826,
        "precapprox;": 10935,
        "preccurlyeq;": 8828,
        "preceq;": 10927,
        "precnapprox;": 10937,
        "precneqq;": 10933,
        "precnsim;": 8936,
        "precsim;": 8830,
        "prime;": 8242,
        "primes;": 8473,
        "prnE;": 10933,
        "prnap;": 10937,
        "prnsim;": 8936,
        "prod;": 8719,
        "profalar;": 9006,
        "profline;": 8978,
        "profsurf;": 8979,
        "prop;": 8733,
        "propto;": 8733,
        "prsim;": 8830,
        "prurel;": 8880,
        "pscr;": [
            55349,
            56517
        ],
        "psi;": 968,
        "puncsp;": 8200,
        "qfr;": [
            55349,
            56622
        ],
        "qint;": 10764,
        "qopf;": [
            55349,
            56674
        ],
        "qprime;": 8279,
        "qscr;": [
            55349,
            56518
        ],
        "quaternions;": 8461,
        "quatint;": 10774,
        "quest;": 63,
        "questeq;": 8799,
        quot: 34,
        "quot;": 34,
        "rAarr;": 8667,
        "rArr;": 8658,
        "rAtail;": 10524,
        "rBarr;": 10511,
        "rHar;": 10596,
        "race;": [
            8765,
            817
        ],
        "racute;": 341,
        "radic;": 8730,
        "raemptyv;": 10675,
        "rang;": 10217,
        "rangd;": 10642,
        "range;": 10661,
        "rangle;": 10217,
        raquo: 187,
        "raquo;": 187,
        "rarr;": 8594,
        "rarrap;": 10613,
        "rarrb;": 8677,
        "rarrbfs;": 10528,
        "rarrc;": 10547,
        "rarrfs;": 10526,
        "rarrhk;": 8618,
        "rarrlp;": 8620,
        "rarrpl;": 10565,
        "rarrsim;": 10612,
        "rarrtl;": 8611,
        "rarrw;": 8605,
        "ratail;": 10522,
        "ratio;": 8758,
        "rationals;": 8474,
        "rbarr;": 10509,
        "rbbrk;": 10099,
        "rbrace;": 125,
        "rbrack;": 93,
        "rbrke;": 10636,
        "rbrksld;": 10638,
        "rbrkslu;": 10640,
        "rcaron;": 345,
        "rcedil;": 343,
        "rceil;": 8969,
        "rcub;": 125,
        "rcy;": 1088,
        "rdca;": 10551,
        "rdldhar;": 10601,
        "rdquo;": 8221,
        "rdquor;": 8221,
        "rdsh;": 8627,
        "real;": 8476,
        "realine;": 8475,
        "realpart;": 8476,
        "reals;": 8477,
        "rect;": 9645,
        reg: 174,
        "reg;": 174,
        "rfisht;": 10621,
        "rfloor;": 8971,
        "rfr;": [
            55349,
            56623
        ],
        "rhard;": 8641,
        "rharu;": 8640,
        "rharul;": 10604,
        "rho;": 961,
        "rhov;": 1009,
        "rightarrow;": 8594,
        "rightarrowtail;": 8611,
        "rightharpoondown;": 8641,
        "rightharpoonup;": 8640,
        "rightleftarrows;": 8644,
        "rightleftharpoons;": 8652,
        "rightrightarrows;": 8649,
        "rightsquigarrow;": 8605,
        "rightthreetimes;": 8908,
        "ring;": 730,
        "risingdotseq;": 8787,
        "rlarr;": 8644,
        "rlhar;": 8652,
        "rlm;": 8207,
        "rmoust;": 9137,
        "rmoustache;": 9137,
        "rnmid;": 10990,
        "roang;": 10221,
        "roarr;": 8702,
        "robrk;": 10215,
        "ropar;": 10630,
        "ropf;": [
            55349,
            56675
        ],
        "roplus;": 10798,
        "rotimes;": 10805,
        "rpar;": 41,
        "rpargt;": 10644,
        "rppolint;": 10770,
        "rrarr;": 8649,
        "rsaquo;": 8250,
        "rscr;": [
            55349,
            56519
        ],
        "rsh;": 8625,
        "rsqb;": 93,
        "rsquo;": 8217,
        "rsquor;": 8217,
        "rthree;": 8908,
        "rtimes;": 8906,
        "rtri;": 9657,
        "rtrie;": 8885,
        "rtrif;": 9656,
        "rtriltri;": 10702,
        "ruluhar;": 10600,
        "rx;": 8478,
        "sacute;": 347,
        "sbquo;": 8218,
        "sc;": 8827,
        "scE;": 10932,
        "scap;": 10936,
        "scaron;": 353,
        "sccue;": 8829,
        "sce;": 10928,
        "scedil;": 351,
        "scirc;": 349,
        "scnE;": 10934,
        "scnap;": 10938,
        "scnsim;": 8937,
        "scpolint;": 10771,
        "scsim;": 8831,
        "scy;": 1089,
        "sdot;": 8901,
        "sdotb;": 8865,
        "sdote;": 10854,
        "seArr;": 8664,
        "searhk;": 10533,
        "searr;": 8600,
        "searrow;": 8600,
        sect: 167,
        "sect;": 167,
        "semi;": 59,
        "seswar;": 10537,
        "setminus;": 8726,
        "setmn;": 8726,
        "sext;": 10038,
        "sfr;": [
            55349,
            56624
        ],
        "sfrown;": 8994,
        "sharp;": 9839,
        "shchcy;": 1097,
        "shcy;": 1096,
        "shortmid;": 8739,
        "shortparallel;": 8741,
        shy: 173,
        "shy;": 173,
        "sigma;": 963,
        "sigmaf;": 962,
        "sigmav;": 962,
        "sim;": 8764,
        "simdot;": 10858,
        "sime;": 8771,
        "simeq;": 8771,
        "simg;": 10910,
        "simgE;": 10912,
        "siml;": 10909,
        "simlE;": 10911,
        "simne;": 8774,
        "simplus;": 10788,
        "simrarr;": 10610,
        "slarr;": 8592,
        "smallsetminus;": 8726,
        "smashp;": 10803,
        "smeparsl;": 10724,
        "smid;": 8739,
        "smile;": 8995,
        "smt;": 10922,
        "smte;": 10924,
        "smtes;": [
            10924,
            65024
        ],
        "softcy;": 1100,
        "sol;": 47,
        "solb;": 10692,
        "solbar;": 9023,
        "sopf;": [
            55349,
            56676
        ],
        "spades;": 9824,
        "spadesuit;": 9824,
        "spar;": 8741,
        "sqcap;": 8851,
        "sqcaps;": [
            8851,
            65024
        ],
        "sqcup;": 8852,
        "sqcups;": [
            8852,
            65024
        ],
        "sqsub;": 8847,
        "sqsube;": 8849,
        "sqsubset;": 8847,
        "sqsubseteq;": 8849,
        "sqsup;": 8848,
        "sqsupe;": 8850,
        "sqsupset;": 8848,
        "sqsupseteq;": 8850,
        "squ;": 9633,
        "square;": 9633,
        "squarf;": 9642,
        "squf;": 9642,
        "srarr;": 8594,
        "sscr;": [
            55349,
            56520
        ],
        "ssetmn;": 8726,
        "ssmile;": 8995,
        "sstarf;": 8902,
        "star;": 9734,
        "starf;": 9733,
        "straightepsilon;": 1013,
        "straightphi;": 981,
        "strns;": 175,
        "sub;": 8834,
        "subE;": 10949,
        "subdot;": 10941,
        "sube;": 8838,
        "subedot;": 10947,
        "submult;": 10945,
        "subnE;": 10955,
        "subne;": 8842,
        "subplus;": 10943,
        "subrarr;": 10617,
        "subset;": 8834,
        "subseteq;": 8838,
        "subseteqq;": 10949,
        "subsetneq;": 8842,
        "subsetneqq;": 10955,
        "subsim;": 10951,
        "subsub;": 10965,
        "subsup;": 10963,
        "succ;": 8827,
        "succapprox;": 10936,
        "succcurlyeq;": 8829,
        "succeq;": 10928,
        "succnapprox;": 10938,
        "succneqq;": 10934,
        "succnsim;": 8937,
        "succsim;": 8831,
        "sum;": 8721,
        "sung;": 9834,
        sup1: 185,
        "sup1;": 185,
        sup2: 178,
        "sup2;": 178,
        sup3: 179,
        "sup3;": 179,
        "sup;": 8835,
        "supE;": 10950,
        "supdot;": 10942,
        "supdsub;": 10968,
        "supe;": 8839,
        "supedot;": 10948,
        "suphsol;": 10185,
        "suphsub;": 10967,
        "suplarr;": 10619,
        "supmult;": 10946,
        "supnE;": 10956,
        "supne;": 8843,
        "supplus;": 10944,
        "supset;": 8835,
        "supseteq;": 8839,
        "supseteqq;": 10950,
        "supsetneq;": 8843,
        "supsetneqq;": 10956,
        "supsim;": 10952,
        "supsub;": 10964,
        "supsup;": 10966,
        "swArr;": 8665,
        "swarhk;": 10534,
        "swarr;": 8601,
        "swarrow;": 8601,
        "swnwar;": 10538,
        szlig: 223,
        "szlig;": 223,
        "target;": 8982,
        "tau;": 964,
        "tbrk;": 9140,
        "tcaron;": 357,
        "tcedil;": 355,
        "tcy;": 1090,
        "tdot;": 8411,
        "telrec;": 8981,
        "tfr;": [
            55349,
            56625
        ],
        "there4;": 8756,
        "therefore;": 8756,
        "theta;": 952,
        "thetasym;": 977,
        "thetav;": 977,
        "thickapprox;": 8776,
        "thicksim;": 8764,
        "thinsp;": 8201,
        "thkap;": 8776,
        "thksim;": 8764,
        thorn: 254,
        "thorn;": 254,
        "tilde;": 732,
        times: 215,
        "times;": 215,
        "timesb;": 8864,
        "timesbar;": 10801,
        "timesd;": 10800,
        "tint;": 8749,
        "toea;": 10536,
        "top;": 8868,
        "topbot;": 9014,
        "topcir;": 10993,
        "topf;": [
            55349,
            56677
        ],
        "topfork;": 10970,
        "tosa;": 10537,
        "tprime;": 8244,
        "trade;": 8482,
        "triangle;": 9653,
        "triangledown;": 9663,
        "triangleleft;": 9667,
        "trianglelefteq;": 8884,
        "triangleq;": 8796,
        "triangleright;": 9657,
        "trianglerighteq;": 8885,
        "tridot;": 9708,
        "trie;": 8796,
        "triminus;": 10810,
        "triplus;": 10809,
        "trisb;": 10701,
        "tritime;": 10811,
        "trpezium;": 9186,
        "tscr;": [
            55349,
            56521
        ],
        "tscy;": 1094,
        "tshcy;": 1115,
        "tstrok;": 359,
        "twixt;": 8812,
        "twoheadleftarrow;": 8606,
        "twoheadrightarrow;": 8608,
        "uArr;": 8657,
        "uHar;": 10595,
        uacute: 250,
        "uacute;": 250,
        "uarr;": 8593,
        "ubrcy;": 1118,
        "ubreve;": 365,
        ucirc: 251,
        "ucirc;": 251,
        "ucy;": 1091,
        "udarr;": 8645,
        "udblac;": 369,
        "udhar;": 10606,
        "ufisht;": 10622,
        "ufr;": [
            55349,
            56626
        ],
        ugrave: 249,
        "ugrave;": 249,
        "uharl;": 8639,
        "uharr;": 8638,
        "uhblk;": 9600,
        "ulcorn;": 8988,
        "ulcorner;": 8988,
        "ulcrop;": 8975,
        "ultri;": 9720,
        "umacr;": 363,
        uml: 168,
        "uml;": 168,
        "uogon;": 371,
        "uopf;": [
            55349,
            56678
        ],
        "uparrow;": 8593,
        "updownarrow;": 8597,
        "upharpoonleft;": 8639,
        "upharpoonright;": 8638,
        "uplus;": 8846,
        "upsi;": 965,
        "upsih;": 978,
        "upsilon;": 965,
        "upuparrows;": 8648,
        "urcorn;": 8989,
        "urcorner;": 8989,
        "urcrop;": 8974,
        "uring;": 367,
        "urtri;": 9721,
        "uscr;": [
            55349,
            56522
        ],
        "utdot;": 8944,
        "utilde;": 361,
        "utri;": 9653,
        "utrif;": 9652,
        "uuarr;": 8648,
        uuml: 252,
        "uuml;": 252,
        "uwangle;": 10663,
        "vArr;": 8661,
        "vBar;": 10984,
        "vBarv;": 10985,
        "vDash;": 8872,
        "vangrt;": 10652,
        "varepsilon;": 1013,
        "varkappa;": 1008,
        "varnothing;": 8709,
        "varphi;": 981,
        "varpi;": 982,
        "varpropto;": 8733,
        "varr;": 8597,
        "varrho;": 1009,
        "varsigma;": 962,
        "varsubsetneq;": [
            8842,
            65024
        ],
        "varsubsetneqq;": [
            10955,
            65024
        ],
        "varsupsetneq;": [
            8843,
            65024
        ],
        "varsupsetneqq;": [
            10956,
            65024
        ],
        "vartheta;": 977,
        "vartriangleleft;": 8882,
        "vartriangleright;": 8883,
        "vcy;": 1074,
        "vdash;": 8866,
        "vee;": 8744,
        "veebar;": 8891,
        "veeeq;": 8794,
        "vellip;": 8942,
        "verbar;": 124,
        "vert;": 124,
        "vfr;": [
            55349,
            56627
        ],
        "vltri;": 8882,
        "vnsub;": [
            8834,
            8402
        ],
        "vnsup;": [
            8835,
            8402
        ],
        "vopf;": [
            55349,
            56679
        ],
        "vprop;": 8733,
        "vrtri;": 8883,
        "vscr;": [
            55349,
            56523
        ],
        "vsubnE;": [
            10955,
            65024
        ],
        "vsubne;": [
            8842,
            65024
        ],
        "vsupnE;": [
            10956,
            65024
        ],
        "vsupne;": [
            8843,
            65024
        ],
        "vzigzag;": 10650,
        "wcirc;": 373,
        "wedbar;": 10847,
        "wedge;": 8743,
        "wedgeq;": 8793,
        "weierp;": 8472,
        "wfr;": [
            55349,
            56628
        ],
        "wopf;": [
            55349,
            56680
        ],
        "wp;": 8472,
        "wr;": 8768,
        "wreath;": 8768,
        "wscr;": [
            55349,
            56524
        ],
        "xcap;": 8898,
        "xcirc;": 9711,
        "xcup;": 8899,
        "xdtri;": 9661,
        "xfr;": [
            55349,
            56629
        ],
        "xhArr;": 10234,
        "xharr;": 10231,
        "xi;": 958,
        "xlArr;": 10232,
        "xlarr;": 10229,
        "xmap;": 10236,
        "xnis;": 8955,
        "xodot;": 10752,
        "xopf;": [
            55349,
            56681
        ],
        "xoplus;": 10753,
        "xotime;": 10754,
        "xrArr;": 10233,
        "xrarr;": 10230,
        "xscr;": [
            55349,
            56525
        ],
        "xsqcup;": 10758,
        "xuplus;": 10756,
        "xutri;": 9651,
        "xvee;": 8897,
        "xwedge;": 8896,
        yacute: 253,
        "yacute;": 253,
        "yacy;": 1103,
        "ycirc;": 375,
        "ycy;": 1099,
        yen: 165,
        "yen;": 165,
        "yfr;": [
            55349,
            56630
        ],
        "yicy;": 1111,
        "yopf;": [
            55349,
            56682
        ],
        "yscr;": [
            55349,
            56526
        ],
        "yucy;": 1102,
        yuml: 255,
        "yuml;": 255,
        "zacute;": 378,
        "zcaron;": 382,
        "zcy;": 1079,
        "zdot;": 380,
        "zeetrf;": 8488,
        "zeta;": 950,
        "zfr;": [
            55349,
            56631
        ],
        "zhcy;": 1078,
        "zigrarr;": 8669,
        "zopf;": [
            55349,
            56683
        ],
        "zscr;": [
            55349,
            56527
        ],
        "zwj;": 8205,
        "zwnj;": 8204
    };
    var ic = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g;
    var rf = 32;
    var af = /[^\r"&\u0000]+/g;
    var nf = /[^\r'&\u0000]+/g;
    var sf = /[^\r\t\n\f &>\u0000]+/g;
    var cf = /[^\r\t\n\f \/>A-Z\u0000]+/g;
    var of = /[^\r\t\n\f \/=>A-Z\u0000]+/g;
    var uf = /[^\]\r\u0000\uffff]*/g;
    var lf = /[^&<\r\u0000\uffff]*/g;
    var sc = /[^<\r\u0000\uffff]*/g;
    var xf = /[^\r\u0000\uffff]*/g;
    var cc = /(?:(\/)?([a-z]+)>)|[\s\S]/g;
    var oc = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g;
    var ma = /[^\x09\x0A\x0C\x0D\x20]/;
    var $n = /[^\x09\x0A\x0C\x0D\x20]/g;
    var ff = /[^\x00\x09\x0A\x0C\x0D\x20]/;
    var St = /^[\x09\x0A\x0C\x0D\x20]+/;
    var ga = /\x00/g;
    function me(e) {
        const t = 16384;
        if (e.length < t) {
            return String.fromCharCode(...e);
        }
        let r = "";
        for(let a = 0; a < e.length; a += t){
            r += String.fromCharCode(...e.slice(a, a + t));
        }
        return r;
    }
    function df(e) {
        const t = [];
        for(let r = 0; r < e.length; r++){
            t[r] = e.charCodeAt(r);
        }
        return t;
    }
    function G(e, t) {
        if (typeof t === "string") {
            return e.namespaceURI === NAMESPACE.HTML && e.localName === t;
        }
        const r = t[e.namespaceURI];
        return r && r[e.localName];
    }
    function uc(e) {
        return G(e, _c);
    }
    function lc(e) {
        if (G(e, vc)) {
            return true;
        }
        if (e.namespaceURI === NAMESPACE.MATHML && e.localName === "annotation-xml") {
            let t = e.getAttribute("encoding");
            if (t) {
                t = t.toLowerCase();
            }
            if (t === "text/html" || t === "application/xhtml+xml") {
                return true;
            }
        }
        return false;
    }
    function hf(e) {
        if (e in ac) {
            return ac[e];
        } else {
            return e;
        }
    }
    function xc(e) {
        for(let t = 0, r = e.length; t < r; t++){
            if (e[t][0] in rc) {
                e[t][0] = rc[e[t][0]];
            }
        }
    }
    function fc(e) {
        for(let t = 0, r = e.length; t < r; t++){
            if (e[t][0] === "definitionurl") {
                e[t][0] = "definitionURL";
                break;
            }
        }
    }
    function Zn(e) {
        for(let t = 0, r = e.length; t < r; t++){
            if (e[t][0] in tc) {
                e[t].push(tc[e[t][0]]);
            }
        }
    }
    function dc(e, t) {
        for(let r = 0, a = e.length; r < a; r++){
            const s = e[r][0];
            const c = e[r][1];
            if (t.hasAttribute(s)) {
                continue;
            }
            t._setAttribute(s, c);
        }
    }
    q.ElementStack = function() {
        this.elements = [];
        this.top = null;
    };
    q.ElementStack.prototype.push = function(e) {
        this.elements.push(e);
        this.top = e;
    };
    q.ElementStack.prototype.pop = function(e) {
        this.elements.pop();
        this.top = this.elements[this.elements.length - 1];
    };
    q.ElementStack.prototype.popTag = function(e) {
        for(var t = this.elements.length - 1; t > 0; t--){
            const r = this.elements[t];
            if (G(r, e)) {
                break;
            }
        }
        this.elements.length = t;
        this.top = this.elements[t - 1];
    };
    q.ElementStack.prototype.popElementType = function(e) {
        for(var t = this.elements.length - 1; t > 0; t--){
            if (this.elements[t] instanceof e) {
                break;
            }
        }
        this.elements.length = t;
        this.top = this.elements[t - 1];
    };
    q.ElementStack.prototype.popElement = function(e) {
        for(var t = this.elements.length - 1; t > 0; t--){
            if (this.elements[t] === e) {
                break;
            }
        }
        this.elements.length = t;
        this.top = this.elements[t - 1];
    };
    q.ElementStack.prototype.removeElement = function(e) {
        if (this.top === e) {
            this.pop();
        } else {
            const t = this.elements.lastIndexOf(e);
            if (t !== -1) {
                this.elements.splice(t, 1);
            }
        }
    };
    q.ElementStack.prototype.clearToContext = function(e) {
        for(var t = this.elements.length - 1; t > 0; t--){
            if (G(this.elements[t], e)) {
                break;
            }
        }
        this.elements.length = t + 1;
        this.top = this.elements[t];
    };
    q.ElementStack.prototype.contains = function(e) {
        return this.inSpecificScope(e, Object.create(null));
    };
    q.ElementStack.prototype.inSpecificScope = function(e, t) {
        for(let r = this.elements.length - 1; r >= 0; r--){
            const a = this.elements[r];
            if (G(a, e)) {
                return true;
            }
            if (G(a, t)) {
                return false;
            }
        }
        return false;
    };
    q.ElementStack.prototype.elementInSpecificScope = function(e, t) {
        for(let r = this.elements.length - 1; r >= 0; r--){
            const a = this.elements[r];
            if (a === e) {
                return true;
            }
            if (G(a, t)) {
                return false;
            }
        }
        return false;
    };
    q.ElementStack.prototype.elementTypeInSpecificScope = function(e, t) {
        for(let r = this.elements.length - 1; r >= 0; r--){
            const a = this.elements[r];
            if (a instanceof e) {
                return true;
            }
            if (G(a, t)) {
                return false;
            }
        }
        return false;
    };
    q.ElementStack.prototype.inScope = function(e) {
        return this.inSpecificScope(e, Be);
    };
    q.ElementStack.prototype.elementInScope = function(e) {
        return this.elementInSpecificScope(e, Be);
    };
    q.ElementStack.prototype.elementTypeInScope = function(e) {
        return this.elementTypeInSpecificScope(e, Be);
    };
    q.ElementStack.prototype.inButtonScope = function(e) {
        return this.inSpecificScope(e, ti);
    };
    q.ElementStack.prototype.inListItemScope = function(e) {
        return this.inSpecificScope(e, _a);
    };
    q.ElementStack.prototype.inTableScope = function(e) {
        return this.inSpecificScope(e, Ec);
    };
    q.ElementStack.prototype.inSelectScope = function(e) {
        for(let t = this.elements.length - 1; t >= 0; t--){
            const r = this.elements[t];
            if (r.namespaceURI !== NAMESPACE.HTML) {
                return false;
            }
            const a = r.localName;
            if (a === e) {
                return true;
            }
            if (a !== "optgroup" && a !== "option") {
                return false;
            }
        }
        return false;
    };
    q.ElementStack.prototype.generateImpliedEndTags = function(e, t) {
        const r = t ? gc : mc;
        for(var a = this.elements.length - 1; a >= 0; a--){
            const s = this.elements[a];
            if (e && G(s, e)) {
                break;
            }
            if (!G(this.elements[a], r)) {
                break;
            }
        }
        this.elements.length = a + 1;
        this.top = this.elements[a];
    };
    q.ActiveFormattingElements = function() {
        this.list = [];
        this.attrs = [];
    };
    q.ActiveFormattingElements.prototype.MARKER = {
        localName: "|"
    };
    q.ActiveFormattingElements.prototype.insertMarker = function() {
        this.list.push(this.MARKER);
        this.attrs.push(this.MARKER);
    };
    q.ActiveFormattingElements.prototype.push = function(e, t) {
        let r = 0;
        for(let a = this.list.length - 1; a >= 0; a--){
            if (this.list[a] === this.MARKER) {
                break;
            }
            if (f(e, this.list[a], this.attrs[a])) {
                r++;
                if (r === 3) {
                    this.list.splice(a, 1);
                    this.attrs.splice(a, 1);
                    break;
                }
            }
        }
        this.list.push(e);
        const s = [];
        for(let c = 0; c < t.length; c++){
            s[c] = t[c];
        }
        this.attrs.push(s);
        function f(m, p, _) {
            if (m.localName !== p.localName) {
                return false;
            }
            if (m._numattrs !== _.length) {
                return false;
            }
            for(let v = 0, ne = _.length; v < ne; v++){
                const se = _[v][0];
                const l = _[v][1];
                if (!m.hasAttribute(se)) {
                    return false;
                }
                if (m.getAttribute(se) !== l) {
                    return false;
                }
            }
            return true;
        }
    };
    q.ActiveFormattingElements.prototype.clearToMarker = function() {
        for(var e = this.list.length - 1; e >= 0; e--){
            if (this.list[e] === this.MARKER) {
                break;
            }
        }
        if (e < 0) {
            e = 0;
        }
        this.list.length = e;
        this.attrs.length = e;
    };
    q.ActiveFormattingElements.prototype.findElementByTag = function(e) {
        for(let t = this.list.length - 1; t >= 0; t--){
            const r = this.list[t];
            if (r === this.MARKER) {
                break;
            }
            if (r.localName === e) {
                return r;
            }
        }
        return null;
    };
    q.ActiveFormattingElements.prototype.indexOf = function(e) {
        return this.list.lastIndexOf(e);
    };
    q.ActiveFormattingElements.prototype.remove = function(e) {
        const t = this.list.lastIndexOf(e);
        if (t !== -1) {
            this.list.splice(t, 1);
            this.attrs.splice(t, 1);
        }
    };
    q.ActiveFormattingElements.prototype.replace = function(e, t, r) {
        const a = this.list.lastIndexOf(e);
        if (a !== -1) {
            this.list[a] = t;
            this.attrs[a] = r;
        }
    };
    q.ActiveFormattingElements.prototype.insertAfter = function(e, t) {
        const r = this.list.lastIndexOf(e);
        if (r !== -1) {
            this.list.splice(r, 0, t);
            this.attrs.splice(r, 0, t);
        }
    };
    function q(e, t, r) {
        let a = null;
        let s = 0;
        let c = 0;
        let f = false;
        let m = false;
        let p = 0;
        const _ = [];
        let v = "";
        let ne = true;
        let se = 0;
        var l = M;
        var be;
        var W;
        var O = "";
        var Ye = "";
        var H = [];
        var ie = "";
        var ue = "";
        var z = [];
        var Qe = [];
        var $e = [];
        var Ze = [];
        var Ce = [];
        var Tr = false;
        var h = Xo;
        var Pe = null;
        var Ue = [];
        var u = new q.ElementStack;
        var L = new q.ActiveFormattingElements;
        var dt = t !== undefined;
        var yr = null;
        var Ve = null;
        var Nr = true;
        if (t) {
            Nr = t.ownerDocument._scripting_enabled;
        }
        if (r && r.scripting_enabled === false) {
            Nr = false;
        }
        var Q = true;
        var Sa = false;
        var wr;
        var Aa;
        var g = [];
        var Je = false;
        var ht = false;
        const Sr = {
            document: function() {
                return F;
            },
            _asDocumentFragment: function() {
                const n = F.createDocumentFragment();
                const F_firstChild = F.firstChild;
                while(F_firstChild.hasChildNodes()){
                    n.appendChild(F_firstChild.firstChild);
                }
                return n;
            },
            pause: function() {
                se++;
            },
            resume: function() {
                se--;
                this.parse("");
            },
            parse: function(n, i, o) {
                let x;
                if (se > 0) {
                    v += n;
                    return true;
                }
                if (p === 0) {
                    if (v) {
                        n = v + n;
                        v = "";
                    }
                    if (i) {
                        n += "\uFFFF";
                        f = true;
                    }
                    a = n;
                    s = n.length;
                    c = 0;
                    if (ne) {
                        ne = false;
                        if (a.charCodeAt(0) === 65279) {
                            c = 1;
                        }
                    }
                    p++;
                    x = di(o);
                    v = a.substring(c, s);
                    p--;
                } else {
                    p++;
                    _.push(a, s, c);
                    a = n;
                    s = n.length;
                    c = 0;
                    di();
                    x = false;
                    v = a.substring(c, s);
                    c = _.pop();
                    s = _.pop();
                    a = _.pop();
                    if (v) {
                        a = v + a.substring(c);
                        s = a.length;
                        c = 0;
                        v = "";
                    }
                    p--;
                }
                return x;
            }
        };
        var F = new Xx(true, e);
        F._parser = Sr;
        F._scripting_enabled = Nr;
        if (t) {
            if (t.ownerDocument._quirks) {
                F._quirks = true;
            }
            if (t.ownerDocument._limitedQuirks) {
                F._limitedQuirks = true;
            }
            if (t.namespaceURI === NAMESPACE.HTML) {
                switch(t.localName){
                    case "title":
                    case "textarea":
                        l = at;
                        break;
                    case "style":
                    case "xmp":
                    case "iframe":
                    case "noembed":
                    case "noframes":
                    case "script":
                    case "plaintext":
                        l = Ma;
                        break;
                }
            }
            const fi = F.createElement("html");
            F._appendChild(fi);
            u.push(fi);
            if (t instanceof hc_elements.HTMLTemplateElement) {
                Ue.push(Va);
            }
            $t();
            for(let Wt = t; Wt !== null; Wt = Wt.parentElement){
                if (Wt instanceof hc_elements.HTMLFormElement) {
                    Ve = Wt;
                    break;
                }
            }
        }
        function di(n) {
            let i;
            let o;
            let x;
            let d;
            while(c < s){
                if (se > 0 || n && n()) {
                    return true;
                }
                switch(typeof l.lookahead){
                    case "undefined":
                        i = a.charCodeAt(c++);
                        if (m) {
                            m = false;
                            if (i === 10) {
                                c++;
                                continue;
                            }
                        }
                        switch(i){
                            case 13:
                                if (c < s) {
                                    if (a.charCodeAt(c) === 10) {
                                        c++;
                                    }
                                } else {
                                    m = true;
                                }
                                l(10);
                                break;
                            case 65535:
                                if (f && c === s) {
                                    l(pa);
                                    break;
                                }
                            default:
                                l(i);
                                break;
                        }
                        break;
                    case "number":
                        i = a.charCodeAt(c);
                        let b = l.lookahead;
                        let S = true;
                        if (b < 0) {
                            S = false;
                            b = -b;
                        }
                        if (b < s - c) {
                            o = S ? a.substring(c, c + b) : null;
                            d = false;
                        } else if (f) {
                            o = S ? a.substring(c, s) : null;
                            d = true;
                            if (i === 65535 && c === s - 1) {
                                i = pa;
                            }
                        } else {
                            return true;
                        }
                        l(i, o, d);
                        break;
                    case "string":
                        i = a.charCodeAt(c);
                        x = l.lookahead;
                        const R = a.indexOf(x, c);
                        if (R !== -1) {
                            o = a.substring(c, R + x.length);
                            d = false;
                        } else {
                            if (!f) {
                                return true;
                            }
                            o = a.substring(c, s);
                            if (i === 65535 && c === s - 1) {
                                i = pa;
                            }
                            d = true;
                        }
                        l(i, o, d);
                        break;
                }
            }
            return false;
        }
        function et(n, i) {
            for(let o = 0; o < Ce.length; o++){
                if (Ce[o][0] === n) {
                    return;
                }
            }
            if (i !== undefined) {
                Ce.push([
                    n,
                    i
                ]);
            } else {
                Ce.push([
                    n
                ]);
            }
        }
        function Qc() {
            oc.lastIndex = c - 1;
            const n = oc.exec(a);
            if (!n) {
                throw Error("should never happen");
            }
            const i = n[1];
            if (!i) {
                return false;
            }
            let o = n[2];
            const o_length = o.length;
            switch(o[0]){
                case '"':
                case "'":
                    o = o.substring(1, o_length - 1);
                    c += n[0].length - 1;
                    l = qa;
                    break;
                default:
                    l = qe;
                    c += n[0].length - 1;
                    o = o.substring(0, o_length - 1);
                    break;
            }
            for(let d = 0; d < Ce.length; d++){
                if (Ce[d][0] === i) {
                    return true;
                }
            }
            Ce.push([
                i,
                o
            ]);
            return true;
        }
        function $c() {
            Tr = false;
            O = "";
            Ce.length = 0;
        }
        function Xt() {
            Tr = true;
            O = "";
            Ce.length = 0;
        }
        function je() {
            H.length = 0;
        }
        function Ca() {
            ie = "";
        }
        function Da() {
            ue = "";
        }
        function hi() {
            z.length = 0;
        }
        function Ct() {
            Qe.length = 0;
            $e = null;
            Ze = null;
        }
        function Ar() {
            $e = [];
        }
        function tt() {
            Ze = [];
        }
        function P() {
            Sa = true;
        }
        function Zc() {
            return u.top && u.top.namespaceURI !== "http://www.w3.org/1999/xhtml";
        }
        function ye(n) {
            return Ye === n;
        }
        function Dt() {
            if (g.length > 0) {
                let n = me(g);
                g.length = 0;
                if (ht) {
                    ht = false;
                    if (n[0] === `
`) {
                        n = n.substring(1);
                    }
                    if (n.length === 0) {
                        return;
                    }
                }
                re(Gt, n);
                Je = false;
            }
            ht = false;
        }
        function Kt(n) {
            n.lastIndex = c - 1;
            let i = n.exec(a);
            if (i && i.index === c - 1) {
                i = i[0];
                c += i.length - 1;
                if (f && c === s) {
                    i = i.slice(0, -1);
                    c--;
                }
                return i;
            } else {
                throw Error("should never happen");
            }
        }
        function Yt(n) {
            n.lastIndex = c - 1;
            const i = n.exec(a)[0];
            if (!i) {
                return false;
            }
            Jc(i);
            c += i.length - 1;
            return true;
        }
        function Jc(n) {
            if (g.length > 0) {
                Dt();
            }
            if (ht) {
                ht = false;
                if (n[0] === `
`) {
                    n = n.substring(1);
                }
                if (n.length === 0) {
                    return;
                }
            }
            re(Gt, n);
        }
        function Ge() {
            if (Tr) {
                re(I, O);
            } else {
                const n = O;
                O = "";
                Ye = n;
                re(pe, n, Ce);
            }
        }
        function eo() {
            if (c === s) {
                return false;
            }
            cc.lastIndex = c;
            const n = cc.exec(a);
            if (!n) {
                throw Error("should never happen");
            }
            const i = n[2];
            if (!i) {
                return false;
            }
            const o = n[1];
            if (o) {
                c += i.length + 2;
                re(I, i);
            } else {
                c += i.length + 1;
                Ye = i;
                re(pe, i, Qx);
            }
            return true;
        }
        function to() {
            if (Tr) {
                re(I, O, null, true);
            } else {
                re(pe, O, Ce, true);
            }
        }
        function U() {
            re(Yx, me(Qe), $e ? me($e) : undefined, Ze ? me(Ze) : undefined);
        }
        function k() {
            Dt();
            h(pa);
            F.modclock = 1;
        }
        var re = Sr.insertToken = function(i, o, x, d) {
            Dt();
            const u_top = u.top;
            if (!u_top || u_top.namespaceURI === NAMESPACE.HTML) {
                h(i, o, x, d);
            } else if (i !== pe && i !== Gt) {
                ki(i, o, x, d);
            } else if (uc(u_top) && (i === Gt || i === pe && o !== "mglyph" && o !== "malignmark") || i === pe && o === "svg" && u_top.namespaceURI === NAMESPACE.MATHML && u_top.localName === "annotation-xml" || lc(u_top)) {
                Aa = true;
                h(i, o, x, d);
                Aa = false;
            } else {
                ki(i, o, x, d);
            }
        };
        function Re(n) {
            let u_top = u.top;
            if (rt && G(u_top, zt)) {
                Dr((o)=>o.createComment(n));
            } else {
                if (u_top instanceof hc_elements.HTMLTemplateElement) {
                    u_top = u_top.content;
                }
                u_top._appendChild(u_top.ownerDocument.createComment(n));
            }
        }
        function Ie(n) {
            let u_top = u.top;
            if (rt && G(u_top, zt)) {
                Dr((x)=>x.createTextNode(n));
            } else {
                if (u_top instanceof hc_elements.HTMLTemplateElement) {
                    u_top = u_top.content;
                }
                const o = u_top.lastChild;
                if (o && o.nodeType === Qn.TEXT_NODE) {
                    o.appendData(n);
                } else {
                    u_top._appendChild(u_top.ownerDocument.createTextNode(n));
                }
            }
        }
        function Qt(n, i, o) {
            const x = hc.createElement(n, i, null);
            if (o) {
                for(let d = 0, b = o.length; d < b; d++){
                    x._setAttribute(o[d][0], o[d][1]);
                }
            }
            return x;
        }
        var rt = false;
        function D(n, i) {
            const o = Cr(function(x) {
                return Qt(x, n, i);
            });
            if (G(o, bc)) {
                o._form = Ve;
            }
            return o;
        }
        function Cr(n) {
            let i;
            if (rt && G(u.top, zt)) {
                i = Dr(n);
            } else if (u.top instanceof hc_elements.HTMLTemplateElement) {
                i = n(u.top.content.ownerDocument);
                u.top.content._appendChild(i);
            } else {
                i = n(u.top.ownerDocument);
                u.top._appendChild(i);
            }
            u.push(i);
            return i;
        }
        function ka(n, i, o) {
            return Cr(function(x) {
                const d = x._createElementNS(n, o, null);
                if (i) {
                    for(let b = 0, S = i.length; b < S; b++){
                        const R = i[b];
                        if (R.length === 2) {
                            d._setAttribute(R[0], R[1]);
                        } else {
                            d._setAttributeNS(R[2], R[0], R[1]);
                        }
                    }
                }
                return d;
            });
        }
        function pi(n) {
            for(let i = u.elements.length - 1; i >= 0; i--){
                if (u.elements[i] instanceof n) {
                    return i;
                }
            }
            return -1;
        }
        function Dr(n) {
            let i;
            let o;
            let x = -1;
            let d = -1;
            let b;
            x = pi(hc_elements.HTMLTableElement);
            d = pi(hc_elements.HTMLTemplateElement);
            if (d >= 0 && (x < 0 || d > x)) {
                i = u.elements[d];
            } else if (x >= 0) {
                i = u.elements[x].parentNode;
                if (i) {
                    o = u.elements[x];
                } else {
                    i = u.elements[x - 1];
                }
            }
            if (!i) {
                i = u.elements[0];
            }
            if (i instanceof hc_elements.HTMLTemplateElement) {
                i = i.content;
            }
            b = n(i.ownerDocument);
            if (b.nodeType === Qn.TEXT_NODE) {
                let S;
                if (o) {
                    S = o.previousSibling;
                } else {
                    S = i.lastChild;
                }
                if (S && S.nodeType === Qn.TEXT_NODE) {
                    S.appendData(b.data);
                    return b;
                }
            }
            if (o) {
                i.insertBefore(b, o);
            } else {
                i._appendChild(b);
            }
            return b;
        }
        function $t() {
            let n = false;
            for(let i = u.elements.length - 1; i >= 0; i--){
                let o = u.elements[i];
                if (i === 0) {
                    n = true;
                    if (dt) {
                        o = t;
                    }
                }
                if (o.namespaceURI === NAMESPACE.HTML) {
                    const x = o.localName;
                    switch(x){
                        case "select":
                            for(let d = i; d > 0;){
                                const b = u.elements[--d];
                                if (b instanceof hc_elements.HTMLTemplateElement) {
                                    break;
                                } else if (b instanceof hc_elements.HTMLTableElement) {
                                    h = jr;
                                    return;
                                }
                            }
                            h = ze;
                            return;
                        case "tr":
                            h = er;
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            h = bt;
                            return;
                        case "caption":
                            h = Ua;
                            return;
                        case "colgroup":
                            h = Vr;
                            return;
                        case "table":
                            h = Ne;
                            return;
                        case "template":
                            h = Ue[Ue.length - 1];
                            return;
                        case "body":
                            h = w;
                            return;
                        case "frameset":
                            h = ja;
                            return;
                        case "html":
                            if (yr === null) {
                                h = Pr;
                            } else {
                                h = Pa;
                            }
                            return;
                        default:
                            if (!n) {
                                if (x === "head") {
                                    h = Z;
                                    return;
                                }
                                if (x === "td" || x === "th") {
                                    h = kt;
                                    return;
                                }
                            }
                    }
                }
                if (n) {
                    h = w;
                    return;
                }
            }
        }
        function kr(n, i) {
            D(n, i);
            l = Zt;
            Pe = h;
            h = Ur;
        }
        function ro(n, i) {
            D(n, i);
            l = at;
            Pe = h;
            h = Ur;
        }
        function La(n, i) {
            return {
                elt: Qt(n, L.list[i].localName, L.attrs[i]),
                attrs: L.attrs[i]
            };
        }
        function Ee() {
            if (L.list.length === 0) {
                return;
            }
            let n = L.list[L.list.length - 1];
            if (n === L.MARKER) {
                return;
            }
            if (u.elements.lastIndexOf(n) !== -1) {
                return;
            }
            for(var i = L.list.length - 2; i >= 0; i--){
                n = L.list[i];
                if (n === L.MARKER) {
                    break;
                }
                if (u.elements.lastIndexOf(n) !== -1) {
                    break;
                }
            }
            for(i = i + 1; i < L.list.length; i++){
                const o = Cr(function(x) {
                    return La(x, i).elt;
                });
                L.list[i] = o;
            }
        }
        var Lr = {
            localName: "BM"
        };
        function ao(n) {
            if (G(u.top, n) && L.indexOf(u.top) === -1) {
                u.pop();
                return true;
            }
            let i = 0;
            while(i < 8){
                i++;
                const o = L.findElementByTag(n);
                if (!o) {
                    return false;
                }
                const x = u.elements.lastIndexOf(o);
                if (x === -1) {
                    L.remove(o);
                    return true;
                }
                if (!u.elementInScope(o)) {
                    return true;
                }
                let d = null;
                let b;
                for(let S = x + 1; S < u.elements.length; S++){
                    if (G(u.elements[S], At)) {
                        d = u.elements[S];
                        b = S;
                        break;
                    }
                }
                if (!d) {
                    u.popElement(o);
                    L.remove(o);
                    return true;
                } else {
                    const R = u.elements[x - 1];
                    L.insertAfter(o, Lr);
                    let K = d;
                    var le = d;
                    let we = b;
                    let De;
                    let Et = 0;
                    while(true){
                        Et++;
                        K = u.elements[--we];
                        if (K === o) {
                            break;
                        }
                        De = L.indexOf(K);
                        if (Et > 3 && De !== -1) {
                            L.remove(K);
                            De = -1;
                        }
                        if (De === -1) {
                            u.removeElement(K);
                            continue;
                        }
                        const ot = La(R.ownerDocument, De);
                        L.replace(K, ot.elt, ot.attrs);
                        u.elements[we] = ot.elt;
                        K = ot.elt;
                        if (le === d) {
                            L.remove(Lr);
                            L.insertAfter(ot.elt, Lr);
                        }
                        K._appendChild(le);
                        le = K;
                    }
                    if (rt && G(R, zt)) {
                        Dr(()=>le);
                    } else if (R instanceof hc_elements.HTMLTemplateElement) {
                        R.content._appendChild(le);
                    } else {
                        R._appendChild(le);
                    }
                    const tr = La(d.ownerDocument, L.indexOf(o));
                    while(d.hasChildNodes()){
                        tr.elt._appendChild(d.firstChild);
                    }
                    d._appendChild(tr.elt);
                    L.remove(o);
                    L.replace(Lr, tr.elt, tr.attrs);
                    u.removeElement(o);
                    const Zo = u.elements.lastIndexOf(d);
                    u.elements.splice(Zo + 1, 0, tr.elt);
                }
            }
            return true;
        }
        function no() {
            u.pop();
            h = Pe;
        }
        function pt() {
            delete F._parser;
            u.elements.length = 0;
            if (F.defaultView) {
                F.defaultView.dispatchEvent(new hc_elements.Event("load", {}));
            }
        }
        function y(n, i) {
            l = i;
            c--;
        }
        function M(n) {
            switch(n){
                case 38:
                    be = M;
                    l = Jt;
                    break;
                case 60:
                    if (eo()) {
                        break;
                    }
                    l = io;
                    break;
                case 0:
                    g.push(n);
                    Je = true;
                    break;
                case -1:
                    k();
                    break;
                default:
                    if (!Yt(lf)) {
                        g.push(n);
                    }
                    break;
            }
        }
        function at(n) {
            switch(n){
                case 38:
                    be = at;
                    l = Jt;
                    break;
                case 60:
                    l = co;
                    break;
                case 0:
                    g.push(65533);
                    Je = true;
                    break;
                case -1:
                    k();
                    break;
                default:
                    g.push(n);
                    break;
            }
        }
        function Zt(n) {
            switch(n){
                case 60:
                    l = lo;
                    break;
                case 0:
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    if (!Yt(sc)) {
                        g.push(n);
                    }
                    break;
            }
        }
        function nt(n) {
            switch(n){
                case 60:
                    l = ho;
                    break;
                case 0:
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    if (!Yt(sc)) {
                        g.push(n);
                    }
                    break;
            }
        }
        function Ma(n) {
            switch(n){
                case 0:
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    if (!Yt(xf)) {
                        g.push(n);
                    }
                    break;
            }
        }
        function io(n) {
            switch(n){
                case 33:
                    l = Ei;
                    break;
                case 47:
                    l = so;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    $c();
                    y(n, mi);
                    break;
                case 63:
                    y(n, Or);
                    break;
                default:
                    g.push(60);
                    y(n, M);
                    break;
            }
        }
        function so(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    Xt();
                    y(n, mi);
                    break;
                case 62:
                    l = M;
                    break;
                case -1:
                    g.push(60);
                    g.push(47);
                    k();
                    break;
                default:
                    y(n, Or);
                    break;
            }
        }
        function mi(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = qe;
                    break;
                case 47:
                    l = st;
                    break;
                case 62:
                    l = M;
                    Ge();
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    O += String.fromCharCode(n + 32);
                    break;
                case 0:
                    O += String.fromCharCode(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    O += Kt(cf);
                    break;
            }
        }
        function co(n) {
            if (n === 47) {
                je();
                l = oo;
            } else {
                g.push(60);
                y(n, at);
            }
        }
        function oo(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    Xt();
                    y(n, uo);
                    break;
                default:
                    g.push(60);
                    g.push(47);
                    y(n, at);
                    break;
            }
        }
        function uo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    if (ye(O)) {
                        l = qe;
                        return;
                    }
                    break;
                case 47:
                    if (ye(O)) {
                        l = st;
                        return;
                    }
                    break;
                case 62:
                    if (ye(O)) {
                        l = M;
                        Ge();
                        return;
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    O += String.fromCharCode(n + 32);
                    H.push(n);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    O += String.fromCharCode(n);
                    H.push(n);
                    return;
                default:
                    break;
            }
            g.push(60);
            g.push(47);
            wt(g, H);
            y(n, at);
        }
        function lo(n) {
            if (n === 47) {
                je();
                l = xo;
            } else {
                g.push(60);
                y(n, Zt);
            }
        }
        function xo(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    Xt();
                    y(n, fo);
                    break;
                default:
                    g.push(60);
                    g.push(47);
                    y(n, Zt);
                    break;
            }
        }
        function fo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    if (ye(O)) {
                        l = qe;
                        return;
                    }
                    break;
                case 47:
                    if (ye(O)) {
                        l = st;
                        return;
                    }
                    break;
                case 62:
                    if (ye(O)) {
                        l = M;
                        Ge();
                        return;
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    O += String.fromCharCode(n + 32);
                    H.push(n);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    O += String.fromCharCode(n);
                    H.push(n);
                    return;
                default:
                    break;
            }
            g.push(60);
            g.push(47);
            wt(g, H);
            y(n, Zt);
        }
        function ho(n) {
            switch(n){
                case 47:
                    je();
                    l = po;
                    break;
                case 33:
                    l = go;
                    g.push(60);
                    g.push(33);
                    break;
                default:
                    g.push(60);
                    y(n, nt);
                    break;
            }
        }
        function po(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    Xt();
                    y(n, mo);
                    break;
                default:
                    g.push(60);
                    g.push(47);
                    y(n, nt);
                    break;
            }
        }
        function mo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    if (ye(O)) {
                        l = qe;
                        return;
                    }
                    break;
                case 47:
                    if (ye(O)) {
                        l = st;
                        return;
                    }
                    break;
                case 62:
                    if (ye(O)) {
                        l = M;
                        Ge();
                        return;
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    O += String.fromCharCode(n + 32);
                    H.push(n);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    O += String.fromCharCode(n);
                    H.push(n);
                    return;
                default:
                    break;
            }
            g.push(60);
            g.push(47);
            wt(g, H);
            y(n, nt);
        }
        function go(n) {
            if (n === 45) {
                l = bo;
                g.push(45);
            } else {
                y(n, nt);
            }
        }
        function bo(n) {
            if (n === 45) {
                l = gi;
                g.push(45);
            } else {
                y(n, nt);
            }
        }
        function Oe(n) {
            switch(n){
                case 45:
                    l = Eo;
                    g.push(45);
                    break;
                case 60:
                    l = Ra;
                    break;
                case 0:
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    g.push(n);
                    break;
            }
        }
        function Eo(n) {
            switch(n){
                case 45:
                    l = gi;
                    g.push(45);
                    break;
                case 60:
                    l = Ra;
                    break;
                case 0:
                    l = Oe;
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    l = Oe;
                    g.push(n);
                    break;
            }
        }
        function gi(n) {
            switch(n){
                case 45:
                    g.push(45);
                    break;
                case 60:
                    l = Ra;
                    break;
                case 62:
                    l = nt;
                    g.push(62);
                    break;
                case 0:
                    l = Oe;
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    l = Oe;
                    g.push(n);
                    break;
            }
        }
        function Ra(n) {
            switch(n){
                case 47:
                    je();
                    l = _o;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    je();
                    g.push(60);
                    y(n, To);
                    break;
                default:
                    g.push(60);
                    y(n, Oe);
                    break;
            }
        }
        function _o(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    Xt();
                    y(n, vo);
                    break;
                default:
                    g.push(60);
                    g.push(47);
                    y(n, Oe);
                    break;
            }
        }
        function vo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    if (ye(O)) {
                        l = qe;
                        return;
                    }
                    break;
                case 47:
                    if (ye(O)) {
                        l = st;
                        return;
                    }
                    break;
                case 62:
                    if (ye(O)) {
                        l = M;
                        Ge();
                        return;
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    O += String.fromCharCode(n + 32);
                    H.push(n);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    O += String.fromCharCode(n);
                    H.push(n);
                    return;
                default:
                    break;
            }
            g.push(60);
            g.push(47);
            wt(g, H);
            y(n, Oe);
        }
        function To(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                    if (me(H) === "script") {
                        l = it;
                    } else {
                        l = Oe;
                    }
                    g.push(n);
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    H.push(n + 32);
                    g.push(n);
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    H.push(n);
                    g.push(n);
                    break;
                default:
                    y(n, Oe);
                    break;
            }
        }
        function it(n) {
            switch(n){
                case 45:
                    l = yo;
                    g.push(45);
                    break;
                case 60:
                    l = Ia;
                    g.push(60);
                    break;
                case 0:
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    g.push(n);
                    break;
            }
        }
        function yo(n) {
            switch(n){
                case 45:
                    l = No;
                    g.push(45);
                    break;
                case 60:
                    l = Ia;
                    g.push(60);
                    break;
                case 0:
                    l = it;
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    l = it;
                    g.push(n);
                    break;
            }
        }
        function No(n) {
            switch(n){
                case 45:
                    g.push(45);
                    break;
                case 60:
                    l = Ia;
                    g.push(60);
                    break;
                case 62:
                    l = nt;
                    g.push(62);
                    break;
                case 0:
                    l = it;
                    g.push(65533);
                    break;
                case -1:
                    k();
                    break;
                default:
                    l = it;
                    g.push(n);
                    break;
            }
        }
        function Ia(n) {
            if (n === 47) {
                je();
                l = wo;
                g.push(47);
            } else {
                y(n, it);
            }
        }
        function wo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                    if (me(H) === "script") {
                        l = Oe;
                    } else {
                        l = it;
                    }
                    g.push(n);
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    H.push(n + 32);
                    g.push(n);
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    H.push(n);
                    g.push(n);
                    break;
                default:
                    y(n, it);
                    break;
            }
        }
        function qe(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 47:
                    l = st;
                    break;
                case 62:
                    l = M;
                    Ge();
                    break;
                case -1:
                    k();
                    break;
                case 61:
                    Ca();
                    ie += String.fromCharCode(n);
                    l = Oa;
                    break;
                default:
                    if (Qc()) {
                        break;
                    }
                    Ca();
                    y(n, Oa);
                    break;
            }
        }
        function Oa(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                case -1:
                    y(n, So);
                    break;
                case 61:
                    l = bi;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    ie += String.fromCharCode(n + 32);
                    break;
                case 0:
                    ie += String.fromCharCode(65533);
                    break;
                case 34:
                case 39:
                case 60:
                default:
                    ie += Kt(of);
                    break;
            }
        }
        function So(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 47:
                    et(ie);
                    l = st;
                    break;
                case 61:
                    l = bi;
                    break;
                case 62:
                    l = M;
                    et(ie);
                    Ge();
                    break;
                case -1:
                    et(ie);
                    k();
                    break;
                default:
                    et(ie);
                    Ca();
                    y(n, Oa);
                    break;
            }
        }
        function bi(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    Da();
                    l = Mr;
                    break;
                case 39:
                    Da();
                    l = Rr;
                    break;
                case 62:
                default:
                    Da();
                    y(n, Ir);
                    break;
            }
        }
        function Mr(n) {
            switch(n){
                case 34:
                    et(ie, ue);
                    l = qa;
                    break;
                case 38:
                    be = Mr;
                    l = Jt;
                    break;
                case 0:
                    ue += String.fromCharCode(65533);
                    break;
                case -1:
                    k();
                    break;
                case 10:
                    ue += String.fromCharCode(n);
                    break;
                default:
                    ue += Kt(af);
                    break;
            }
        }
        function Rr(n) {
            switch(n){
                case 39:
                    et(ie, ue);
                    l = qa;
                    break;
                case 38:
                    be = Rr;
                    l = Jt;
                    break;
                case 0:
                    ue += String.fromCharCode(65533);
                    break;
                case -1:
                    k();
                    break;
                case 10:
                    ue += String.fromCharCode(n);
                    break;
                default:
                    ue += Kt(nf);
                    break;
            }
        }
        function Ir(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    et(ie, ue);
                    l = qe;
                    break;
                case 38:
                    be = Ir;
                    l = Jt;
                    break;
                case 62:
                    et(ie, ue);
                    l = M;
                    Ge();
                    break;
                case 0:
                    ue += String.fromCharCode(65533);
                    break;
                case -1:
                    c--;
                    l = M;
                    break;
                case 34:
                case 39:
                case 60:
                case 61:
                case 96:
                default:
                    ue += Kt(sf);
                    break;
            }
        }
        function qa(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = qe;
                    break;
                case 47:
                    l = st;
                    break;
                case 62:
                    l = M;
                    Ge();
                    break;
                case -1:
                    k();
                    break;
                default:
                    y(n, qe);
                    break;
            }
        }
        function st(n) {
            switch(n){
                case 62:
                    l = M;
                    to(true);
                    break;
                case -1:
                    k();
                    break;
                default:
                    y(n, qe);
                    break;
            }
        }
        function Or(n, i, o) {
            const i_length = i.length;
            if (o) {
                c += i_length - 1;
            } else {
                c += i_length;
            }
            let d = i.substring(0, i_length - 1);
            d = d.replace(/\u0000/g, "\uFFFD");
            d = d.replace(/\u000D\u000A/g, `
`);
            d = d.replace(/\u000D/g, `
`);
            re(Fe, d);
            l = M;
        }
        Or.lookahead = ">";
        function Ei(n, i, o) {
            if (i[0] === "-" && i[1] === "-") {
                c += 2;
                hi();
                l = Ao;
                return;
            }
            if (i.toUpperCase() === "DOCTYPE") {
                c += 7;
                l = Io;
            } else if (i === "[CDATA[" && Zc()) {
                c += 7;
                l = Ba;
            } else {
                l = Or;
            }
        }
        Ei.lookahead = 7;
        function Ao(n) {
            hi();
            switch(n){
                case 45:
                    l = Co;
                    break;
                case 62:
                    l = M;
                    re(Fe, me(z));
                    break;
                default:
                    y(n, mt);
                    break;
            }
        }
        function Co(n) {
            switch(n){
                case 45:
                    l = qr;
                    break;
                case 62:
                    l = M;
                    re(Fe, me(z));
                    break;
                case -1:
                    re(Fe, me(z));
                    k();
                    break;
                default:
                    z.push(45);
                    y(n, mt);
                    break;
            }
        }
        function mt(n) {
            switch(n){
                case 60:
                    z.push(n);
                    l = Do;
                    break;
                case 45:
                    l = Ha;
                    break;
                case 0:
                    z.push(65533);
                    break;
                case -1:
                    re(Fe, me(z));
                    k();
                    break;
                default:
                    z.push(n);
                    break;
            }
        }
        function Do(n) {
            switch(n){
                case 33:
                    z.push(n);
                    l = ko;
                    break;
                case 60:
                    z.push(n);
                    break;
                default:
                    y(n, mt);
                    break;
            }
        }
        function ko(n) {
            switch(n){
                case 45:
                    l = Lo;
                    break;
                default:
                    y(n, mt);
                    break;
            }
        }
        function Lo(n) {
            switch(n){
                case 45:
                    l = Mo;
                    break;
                default:
                    y(n, Ha);
                    break;
            }
        }
        function Mo(n) {
            switch(n){
                case 62:
                case -1:
                    y(n, qr);
                    break;
                default:
                    y(n, qr);
                    break;
            }
        }
        function Ha(n) {
            switch(n){
                case 45:
                    l = qr;
                    break;
                case -1:
                    re(Fe, me(z));
                    k();
                    break;
                default:
                    z.push(45);
                    y(n, mt);
                    break;
            }
        }
        function qr(n) {
            switch(n){
                case 62:
                    l = M;
                    re(Fe, me(z));
                    break;
                case 33:
                    l = Ro;
                    break;
                case 45:
                    z.push(45);
                    break;
                case -1:
                    re(Fe, me(z));
                    k();
                    break;
                default:
                    z.push(45);
                    z.push(45);
                    y(n, mt);
                    break;
            }
        }
        function Ro(n) {
            switch(n){
                case 45:
                    z.push(45);
                    z.push(45);
                    z.push(33);
                    l = Ha;
                    break;
                case 62:
                    l = M;
                    re(Fe, me(z));
                    break;
                case -1:
                    re(Fe, me(z));
                    k();
                    break;
                default:
                    z.push(45);
                    z.push(45);
                    z.push(33);
                    y(n, mt);
                    break;
            }
        }
        function Io(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = _i;
                    break;
                case -1:
                    Ct();
                    P();
                    U();
                    k();
                    break;
                default:
                    y(n, _i);
                    break;
            }
        }
        function _i(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    Ct();
                    Qe.push(n + 32);
                    l = Fa;
                    break;
                case 0:
                    Ct();
                    Qe.push(65533);
                    l = Fa;
                    break;
                case 62:
                    Ct();
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    Ct();
                    P();
                    U();
                    k();
                    break;
                default:
                    Ct();
                    Qe.push(n);
                    l = Fa;
                    break;
            }
        }
        function Fa(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = vi;
                    break;
                case 62:
                    l = M;
                    U();
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    Qe.push(n + 32);
                    break;
                case 0:
                    Qe.push(65533);
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    Qe.push(n);
                    break;
            }
        }
        function vi(n, i, o) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    c += 1;
                    break;
                case 62:
                    l = M;
                    c += 1;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    i = i.toUpperCase();
                    if (i === "PUBLIC") {
                        c += 6;
                        l = Oo;
                    } else if (i === "SYSTEM") {
                        c += 6;
                        l = Fo;
                    } else {
                        P();
                        l = ct;
                    }
                    break;
            }
        }
        vi.lookahead = 6;
        function Oo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = qo;
                    break;
                case 34:
                    Ar();
                    l = Ti;
                    break;
                case 39:
                    Ar();
                    l = yi;
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function qo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    Ar();
                    l = Ti;
                    break;
                case 39:
                    Ar();
                    l = yi;
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function Ti(n) {
            switch(n){
                case 34:
                    l = Ni;
                    break;
                case 0:
                    $e.push(65533);
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    $e.push(n);
                    break;
            }
        }
        function yi(n) {
            switch(n){
                case 39:
                    l = Ni;
                    break;
                case 0:
                    $e.push(65533);
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    $e.push(n);
                    break;
            }
        }
        function Ni(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = Ho;
                    break;
                case 62:
                    l = M;
                    U();
                    break;
                case 34:
                    tt();
                    l = Hr;
                    break;
                case 39:
                    tt();
                    l = Fr;
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function Ho(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 62:
                    l = M;
                    U();
                    break;
                case 34:
                    tt();
                    l = Hr;
                    break;
                case 39:
                    tt();
                    l = Fr;
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function Fo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    l = Bo;
                    break;
                case 34:
                    tt();
                    l = Hr;
                    break;
                case 39:
                    tt();
                    l = Fr;
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function Bo(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    tt();
                    l = Hr;
                    break;
                case 39:
                    tt();
                    l = Fr;
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    P();
                    l = ct;
                    break;
            }
        }
        function Hr(n) {
            switch(n){
                case 34:
                    l = wi;
                    break;
                case 0:
                    Ze.push(65533);
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    Ze.push(n);
                    break;
            }
        }
        function Fr(n) {
            switch(n){
                case 39:
                    l = wi;
                    break;
                case 0:
                    Ze.push(65533);
                    break;
                case 62:
                    P();
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    Ze.push(n);
                    break;
            }
        }
        function wi(n) {
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 62:
                    l = M;
                    U();
                    break;
                case -1:
                    P();
                    U();
                    k();
                    break;
                default:
                    l = ct;
                    break;
            }
        }
        function ct(n) {
            switch(n){
                case 62:
                    l = M;
                    U();
                    break;
                case -1:
                    U();
                    k();
                    break;
                default:
                    break;
            }
        }
        function Ba(n) {
            switch(n){
                case 93:
                    l = Po;
                    break;
                case -1:
                    k();
                    break;
                case 0:
                    Je = true;
                default:
                    if (!Yt(uf)) {
                        g.push(n);
                    }
                    break;
            }
        }
        function Po(n) {
            switch(n){
                case 93:
                    l = Uo;
                    break;
                default:
                    g.push(93);
                    y(n, Ba);
                    break;
            }
        }
        function Uo(n) {
            switch(n){
                case 93:
                    g.push(93);
                    break;
                case 62:
                    Dt();
                    l = M;
                    break;
                default:
                    g.push(93);
                    g.push(93);
                    y(n, Ba);
                    break;
            }
        }
        function Jt(n) {
            je();
            H.push(38);
            switch(n){
                case 9:
                case 10:
                case 12:
                case 32:
                case 60:
                case 38:
                case -1:
                    y(n, gt);
                    break;
                case 35:
                    H.push(n);
                    l = Vo;
                    break;
                default:
                    y(n, Si);
                    break;
            }
        }
        function Si(n) {
            ic.lastIndex = c;
            const i = ic.exec(a);
            if (!i) {
                throw Error("should never happen");
            }
            const o = i[1];
            if (!o) {
                l = gt;
                return;
            }
            c += o.length;
            wt(H, df(o));
            switch(be){
                case Mr:
                case Rr:
                case Ir:
                    if (o[o.length - 1] !== ";") {
                        if (/[=A-Za-z0-9]/.test(a[c])) {
                            l = gt;
                            return;
                        }
                    }
                    break;
                default:
                    break;
            }
            je();
            const x = tf[o];
            if (typeof x === "number") {
                H.push(x);
            } else {
                wt(H, x);
            }
            l = gt;
        }
        Si.lookahead = -rf;
        function Vo(n) {
            W = 0;
            switch(n){
                case 120:
                case 88:
                    H.push(n);
                    l = jo;
                    break;
                default:
                    y(n, Go);
                    break;
            }
        }
        function jo(n) {
            switch(n){
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                    y(n, zo);
                    break;
                default:
                    y(n, gt);
                    break;
            }
        }
        function Go(n) {
            switch(n){
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    y(n, Wo);
                    break;
                default:
                    y(n, gt);
                    break;
            }
        }
        function zo(n) {
            switch(n){
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                    W *= 16;
                    W += n - 55;
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                    W *= 16;
                    W += n - 87;
                    break;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    W *= 16;
                    W += n - 48;
                    break;
                case 59:
                    l = Br;
                    break;
                default:
                    y(n, Br);
                    break;
            }
        }
        function Wo(n) {
            switch(n){
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    W *= 10;
                    W += n - 48;
                    break;
                case 59:
                    l = Br;
                    break;
                default:
                    y(n, Br);
                    break;
            }
        }
        function Br(n) {
            if (W in nc) {
                W = nc[W];
            } else if (W > 1114111 || W >= 55296 && W < 57344) {
                W = 65533;
            }
            je();
            if (W <= 65535) {
                H.push(W);
            } else {
                W = W - 65536;
                H.push(55296 + (W >> 10));
                H.push(56320 + (W & 1023));
            }
            y(n, gt);
        }
        function gt(n) {
            switch(be){
                case Mr:
                case Rr:
                case Ir:
                    ue += me(H);
                    break;
                default:
                    wt(g, H);
                    break;
            }
            y(n, be);
        }
        function Xo(n, i, o, x) {
            switch(n){
                case 1:
                    i = i.replace(St, "");
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 4:
                    F._appendChild(F.createComment(i));
                    return;
                case 5:
                    const d = i;
                    const b = o;
                    const S = x;
                    F.appendChild(new Kx(F, d, b, S));
                    if (Sa || d.toLowerCase() !== "html" || $x.test(b) || S && S.toLowerCase() === Zx || S === undefined && ec.test(b)) {
                        F._quirks = true;
                    } else if (Jx.test(b) || S !== undefined && ec.test(b)) {
                        F._limitedQuirks = true;
                    }
                    h = Ai;
                    return;
            }
            F._quirks = true;
            h = Ai;
            h(n, i, o, x);
        }
        function Ai(n, i, o, x) {
            let d;
            switch(n){
                case 1:
                    i = i.replace(St, "");
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 5:
                    return;
                case 4:
                    F._appendChild(F.createComment(i));
                    return;
                case 2:
                    if (i === "html") {
                        d = Qt(F, i, o);
                        u.push(d);
                        F.appendChild(d);
                        h = Pr;
                        return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "html":
                        case "head":
                        case "body":
                        case "br":
                            break;
                        default:
                            return;
                    }
            }
            d = Qt(F, "html", null);
            u.push(d);
            F.appendChild(d);
            h = Pr;
            h(n, i, o, x);
        }
        function Pr(n, i, o, x) {
            switch(n){
                case 1:
                    i = i.replace(St, "");
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 5:
                    return;
                case 4:
                    Re(i);
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "head":
                            const d = D(i, o);
                            yr = d;
                            h = Z;
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "html":
                        case "head":
                        case "body":
                        case "br":
                            break;
                        default:
                            return;
                    }
            }
            Pr(pe, "head", null);
            h(n, i, o, x);
        }
        function Z(n, i, o, x) {
            switch(n){
                case 1:
                    const d = i.match(St);
                    if (d) {
                        Ie(d[0]);
                        i = i.substring(d[0].length);
                    }
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "meta":
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                            D(i, o);
                            u.pop();
                            return;
                        case "title":
                            ro(i, o);
                            return;
                        case "noscript":
                            if (!Nr) {
                                D(i, o);
                                h = Ci;
                                return;
                            }
                        case "noframes":
                        case "style":
                            kr(i, o);
                            return;
                        case "script":
                            Cr(function(b) {
                                const S = Qt(b, i, o);
                                S._parser_inserted = true;
                                S._force_async = false;
                                if (dt) {
                                    S._already_started = true;
                                }
                                Dt();
                                return S;
                            });
                            l = nt;
                            Pe = h;
                            h = Ur;
                            return;
                        case "template":
                            D(i, o);
                            L.insertMarker();
                            Q = false;
                            h = Va;
                            Ue.push(h);
                            return;
                        case "head":
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "head":
                            u.pop();
                            h = Pa;
                            return;
                        case "body":
                        case "html":
                        case "br":
                            break;
                        case "template":
                            if (!u.contains("template")) {
                                return;
                            }
                            u.generateImpliedEndTags(null, "thorough");
                            u.popTag("template");
                            L.clearToMarker();
                            Ue.pop();
                            $t();
                            return;
                        default:
                            return;
                    }
                    break;
            }
            Z(I, "head", null);
            h(n, i, o, x);
        }
        function Ci(n, i, o, x) {
            switch(n){
                case 5:
                    return;
                case 4:
                    Z(n, i);
                    return;
                case 1:
                    const d = i.match(St);
                    if (d) {
                        Z(n, d[0]);
                        i = i.substring(d[0].length);
                    }
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "style":
                            Z(n, i, o);
                            return;
                        case "head":
                        case "noscript":
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "noscript":
                            u.pop();
                            h = Z;
                            return;
                        case "br":
                            break;
                        default:
                            return;
                    }
                    break;
            }
            Ci(I, "noscript", null);
            h(n, i, o, x);
        }
        function Pa(n, i, o, x) {
            switch(n){
                case 1:
                    const d = i.match(St);
                    if (d) {
                        Ie(d[0]);
                        i = i.substring(d[0].length);
                    }
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "body":
                            D(i, o);
                            Q = false;
                            h = w;
                            return;
                        case "frameset":
                            D(i, o);
                            h = ja;
                            return;
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            u.push(yr);
                            Z(pe, i, o);
                            u.removeElement(yr);
                            return;
                        case "head":
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "template":
                            return Z(n, i, o, x);
                        case "body":
                        case "html":
                        case "br":
                            break;
                        default:
                            return;
                    }
                    break;
            }
            Pa(pe, "body", null);
            Q = true;
            h(n, i, o, x);
        }
        function w(n, i, o, x) {
            let d;
            let b;
            let S;
            let R;
            switch(n){
                case 1:
                    if (Je) {
                        i = i.replace(ga, "");
                        if (i.length === 0) {
                            return;
                        }
                    }
                    if (Q && ma.test(i)) {
                        Q = false;
                    }
                    Ee();
                    Ie(i);
                    return;
                case 5:
                    return;
                case 4:
                    Re(i);
                    return;
                case -1:
                    if (Ue.length) {
                        return Va(n);
                    }
                    pt();
                    return;
                case 2:
                    switch(i){
                        case "html":
                            if (u.contains("template")) {
                                return;
                            }
                            dc(o, u.elements[0]);
                            return;
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            Z(pe, i, o);
                            return;
                        case "body":
                            d = u.elements[1];
                            if (!d || !(d instanceof hc_elements.HTMLBodyElement) || u.contains("template")) {
                                return;
                            }
                            Q = false;
                            dc(o, d);
                            return;
                        case "frameset":
                            if (!Q) {
                                return;
                            }
                            d = u.elements[1];
                            if (!d || !(d instanceof hc_elements.HTMLBodyElement)) {
                                return;
                            }
                            if (d.parentNode) {
                                d.parentNode.removeChild(d);
                            }
                            while(!(u.top instanceof hc_elements.HTMLHtmlElement)){
                                u.pop();
                            }
                            D(i, o);
                            h = ja;
                            return;
                        case "address":
                        case "article":
                        case "aside":
                        case "blockquote":
                        case "center":
                        case "details":
                        case "dialog":
                        case "dir":
                        case "div":
                        case "dl":
                        case "fieldset":
                        case "figcaption":
                        case "figure":
                        case "footer":
                        case "header":
                        case "hgroup":
                        case "main":
                        case "nav":
                        case "ol":
                        case "p":
                        case "section":
                        case "summary":
                        case "ul":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            return;
                        case "menu":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            if (G(u.top, "menuitem")) {
                                u.pop();
                            }
                            D(i, o);
                            return;
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            if (u.top instanceof hc_elements.HTMLHeadingElement) {
                                u.pop();
                            }
                            D(i, o);
                            return;
                        case "pre":
                        case "listing":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            ht = true;
                            Q = false;
                            return;
                        case "form":
                            if (Ve && !u.contains("template")) {
                                return;
                            }
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            R = D(i, o);
                            if (!u.contains("template")) {
                                Ve = R;
                            }
                            return;
                        case "li":
                            Q = false;
                            for(b = u.elements.length - 1; b >= 0; b--){
                                S = u.elements[b];
                                if (S instanceof hc_elements.HTMLLIElement) {
                                    w(I, "li");
                                    break;
                                }
                                if (G(S, At) && !G(S, Jn)) {
                                    break;
                                }
                            }
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            return;
                        case "dd":
                        case "dt":
                            Q = false;
                            for(b = u.elements.length - 1; b >= 0; b--){
                                S = u.elements[b];
                                if (G(S, pc)) {
                                    w(I, S.localName);
                                    break;
                                }
                                if (G(S, At) && !G(S, Jn)) {
                                    break;
                                }
                            }
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            return;
                        case "plaintext":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            l = Ma;
                            return;
                        case "button":
                            if (u.inScope("button")) {
                                w(I, "button");
                                h(n, i, o, x);
                            } else {
                                Ee();
                                D(i, o);
                                Q = false;
                            }
                            return;
                        case "a":
                            const K = L.findElementByTag("a");
                            if (K) {
                                w(I, i);
                                L.remove(K);
                                u.removeElement(K);
                            }
                        case "b":
                        case "big":
                        case "code":
                        case "em":
                        case "font":
                        case "i":
                        case "s":
                        case "small":
                        case "strike":
                        case "strong":
                        case "tt":
                        case "u":
                            Ee();
                            L.push(D(i, o), o);
                            return;
                        case "nobr":
                            Ee();
                            if (u.inScope(i)) {
                                w(I, i);
                                Ee();
                            }
                            L.push(D(i, o), o);
                            return;
                        case "applet":
                        case "marquee":
                        case "object":
                            Ee();
                            D(i, o);
                            L.insertMarker();
                            Q = false;
                            return;
                        case "table":
                            if (!F._quirks && u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            D(i, o);
                            Q = false;
                            h = Ne;
                            return;
                        case "area":
                        case "br":
                        case "embed":
                        case "img":
                        case "keygen":
                        case "wbr":
                            Ee();
                            D(i, o);
                            u.pop();
                            Q = false;
                            return;
                        case "input":
                            Ee();
                            R = D(i, o);
                            u.pop();
                            const le = R.getAttribute("type");
                            if (!le || le.toLowerCase() !== "hidden") {
                                Q = false;
                            }
                            return;
                        case "param":
                        case "source":
                        case "track":
                            D(i, o);
                            u.pop();
                            return;
                        case "hr":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            if (G(u.top, "menuitem")) {
                                u.pop();
                            }
                            D(i, o);
                            u.pop();
                            Q = false;
                            return;
                        case "image":
                            w(pe, "img", o, x);
                            return;
                        case "textarea":
                            D(i, o);
                            ht = true;
                            Q = false;
                            l = at;
                            Pe = h;
                            h = Ur;
                            return;
                        case "xmp":
                            if (u.inButtonScope("p")) {
                                w(I, "p");
                            }
                            Ee();
                            Q = false;
                            kr(i, o);
                            return;
                        case "iframe":
                            Q = false;
                            kr(i, o);
                            return;
                        case "noembed":
                            kr(i, o);
                            return;
                        case "select":
                            Ee();
                            D(i, o);
                            Q = false;
                            if (h === Ne || h === Ua || h === bt || h === er || h === kt) {
                                h = jr;
                            } else {
                                h = ze;
                            }
                            return;
                        case "optgroup":
                        case "option":
                            if (u.top instanceof hc_elements.HTMLOptionElement) {
                                w(I, "option");
                            }
                            Ee();
                            D(i, o);
                            return;
                        case "menuitem":
                            if (G(u.top, "menuitem")) {
                                u.pop();
                            }
                            Ee();
                            D(i, o);
                            return;
                        case "rb":
                        case "rtc":
                            if (u.inScope("ruby")) {
                                u.generateImpliedEndTags();
                            }
                            D(i, o);
                            return;
                        case "rp":
                        case "rt":
                            if (u.inScope("ruby")) {
                                u.generateImpliedEndTags("rtc");
                            }
                            D(i, o);
                            return;
                        case "math":
                            Ee();
                            fc(o);
                            Zn(o);
                            ka(i, o, NAMESPACE.MATHML);
                            if (x) {
                                u.pop();
                            }
                            return;
                        case "svg":
                            Ee();
                            xc(o);
                            Zn(o);
                            ka(i, o, NAMESPACE.SVG);
                            if (x) {
                                u.pop();
                            }
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "frame":
                        case "head":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return;
                    }
                    Ee();
                    D(i, o);
                    return;
                case 3:
                    switch(i){
                        case "template":
                            Z(I, i, o);
                            return;
                        case "body":
                            if (!u.inScope("body")) {
                                return;
                            }
                            h = Di;
                            return;
                        case "html":
                            if (!u.inScope("body")) {
                                return;
                            }
                            h = Di;
                            h(n, i, o);
                            return;
                        case "address":
                        case "article":
                        case "aside":
                        case "blockquote":
                        case "button":
                        case "center":
                        case "details":
                        case "dialog":
                        case "dir":
                        case "div":
                        case "dl":
                        case "fieldset":
                        case "figcaption":
                        case "figure":
                        case "footer":
                        case "header":
                        case "hgroup":
                        case "listing":
                        case "main":
                        case "menu":
                        case "nav":
                        case "ol":
                        case "pre":
                        case "section":
                        case "summary":
                        case "ul":
                            if (!u.inScope(i)) {
                                return;
                            }
                            u.generateImpliedEndTags();
                            u.popTag(i);
                            return;
                        case "form":
                            if (!u.contains("template")) {
                                const we = Ve;
                                Ve = null;
                                if (!we || !u.elementInScope(we)) {
                                    return;
                                }
                                u.generateImpliedEndTags();
                                u.removeElement(we);
                            } else {
                                if (!u.inScope("form")) {
                                    return;
                                }
                                u.generateImpliedEndTags();
                                u.popTag("form");
                            }
                            return;
                        case "p":
                            if (!u.inButtonScope(i)) {
                                w(pe, i, null);
                                h(n, i, o, x);
                            } else {
                                u.generateImpliedEndTags(i);
                                u.popTag(i);
                            }
                            return;
                        case "li":
                            if (!u.inListItemScope(i)) {
                                return;
                            }
                            u.generateImpliedEndTags(i);
                            u.popTag(i);
                            return;
                        case "dd":
                        case "dt":
                            if (!u.inScope(i)) {
                                return;
                            }
                            u.generateImpliedEndTags(i);
                            u.popTag(i);
                            return;
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                            if (!u.elementTypeInScope(hc_elements.HTMLHeadingElement)) {
                                return;
                            }
                            u.generateImpliedEndTags();
                            u.popElementType(hc_elements.HTMLHeadingElement);
                            return;
                        case "sarcasm":
                            break;
                        case "a":
                        case "b":
                        case "big":
                        case "code":
                        case "em":
                        case "font":
                        case "i":
                        case "nobr":
                        case "s":
                        case "small":
                        case "strike":
                        case "strong":
                        case "tt":
                        case "u":
                            const De = ao(i);
                            if (De) {
                                return;
                            }
                            break;
                        case "applet":
                        case "marquee":
                        case "object":
                            if (!u.inScope(i)) {
                                return;
                            }
                            u.generateImpliedEndTags();
                            u.popTag(i);
                            L.clearToMarker();
                            return;
                        case "br":
                            w(pe, i, null);
                            return;
                    }
                    for(b = u.elements.length - 1; b >= 0; b--){
                        S = u.elements[b];
                        if (G(S, i)) {
                            u.generateImpliedEndTags(i);
                            u.popElement(S);
                            break;
                        } else if (G(S, At)) {
                            return;
                        }
                    }
                    return;
            }
        }
        function Ur(n, i, o, x) {
            switch(n){
                case 1:
                    Ie(i);
                    return;
                case -1:
                    if (u.top instanceof hc_elements.HTMLScriptElement) {
                        u.top._already_started = true;
                    }
                    u.pop();
                    h = Pe;
                    h(n);
                    return;
                case 3:
                    if (i === "script") {
                        no();
                    } else {
                        u.pop();
                        h = Pe;
                    }
                    return;
                default:
                    return;
            }
        }
        function Ne(n, i, o, x) {
            function d(S) {
                for(let R = 0, K = S.length; R < K; R++){
                    if (S[R][0] === "type") {
                        return S[R][1].toLowerCase();
                    }
                }
                return null;
            }
            switch(n){
                case 1:
                    if (Aa) {
                        w(n, i, o, x);
                        return;
                    } else if (G(u.top, zt)) {
                        wr = [];
                        Pe = h;
                        h = Ko;
                        h(n, i, o, x);
                        return;
                    }
                    break;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case 2:
                    switch(i){
                        case "caption":
                            u.clearToContext(ba);
                            L.insertMarker();
                            D(i, o);
                            h = Ua;
                            return;
                        case "colgroup":
                            u.clearToContext(ba);
                            D(i, o);
                            h = Vr;
                            return;
                        case "col":
                            Ne(pe, "colgroup", null);
                            h(n, i, o, x);
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            u.clearToContext(ba);
                            D(i, o);
                            h = bt;
                            return;
                        case "td":
                        case "th":
                        case "tr":
                            Ne(pe, "tbody", null);
                            h(n, i, o, x);
                            return;
                        case "table":
                            if (!u.inTableScope(i)) {
                                return;
                            }
                            Ne(I, i);
                            h(n, i, o, x);
                            return;
                        case "style":
                        case "script":
                        case "template":
                            Z(n, i, o, x);
                            return;
                        case "input":
                            const b = d(o);
                            if (b !== "hidden") {
                                break;
                            }
                            D(i, o);
                            u.pop();
                            return;
                        case "form":
                            if (Ve || u.contains("template")) {
                                return;
                            }
                            Ve = D(i, o);
                            u.popElement(Ve);
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "table":
                            if (!u.inTableScope(i)) {
                                return;
                            }
                            u.popTag(i);
                            $t();
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return;
                        case "template":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case -1:
                    w(n, i, o, x);
                    return;
            }
            rt = true;
            w(n, i, o, x);
            rt = false;
        }
        function Ko(n, i, o, x) {
            if (n === Gt) {
                if (Je) {
                    i = i.replace(ga, "");
                    if (i.length === 0) {
                        return;
                    }
                }
                wr.push(i);
            } else {
                const d = wr.join("");
                wr.length = 0;
                if (ma.test(d)) {
                    rt = true;
                    w(Gt, d);
                    rt = false;
                } else {
                    Ie(d);
                }
                h = Pe;
                h(n, i, o, x);
            }
        }
        function Ua(n, i, o, x) {
            function d() {
                if (!u.inTableScope("caption")) {
                    return false;
                }
                u.generateImpliedEndTags();
                u.popTag("caption");
                L.clearToMarker();
                h = Ne;
                return true;
            }
            switch(n){
                case 2:
                    switch(i){
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            if (d()) {
                                h(n, i, o, x);
                            }
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "caption":
                            d();
                            return;
                        case "table":
                            if (d()) {
                                h(n, i, o, x);
                            }
                            return;
                        case "body":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return;
                    }
                    break;
            }
            w(n, i, o, x);
        }
        function Vr(n, i, o, x) {
            switch(n){
                case 1:
                    const d = i.match(St);
                    if (d) {
                        Ie(d[0]);
                        i = i.substring(d[0].length);
                    }
                    if (i.length === 0) {
                        return;
                    }
                    break;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "col":
                            D(i, o);
                            u.pop();
                            return;
                        case "template":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "colgroup":
                            if (!G(u.top, "colgroup")) {
                                return;
                            }
                            u.pop();
                            h = Ne;
                            return;
                        case "col":
                            return;
                        case "template":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case -1:
                    w(n, i, o, x);
                    return;
            }
            if (!G(u.top, "colgroup")) {
                return;
            }
            Vr(I, "colgroup");
            h(n, i, o, x);
        }
        function bt(n, i, o, x) {
            function d() {
                if (!u.inTableScope("tbody") && !u.inTableScope("thead") && !u.inTableScope("tfoot")) {
                    return;
                }
                u.clearToContext(Ea);
                bt(I, u.top.localName, null);
                h(n, i, o, x);
            }
            switch(n){
                case 2:
                    switch(i){
                        case "tr":
                            u.clearToContext(Ea);
                            D(i, o);
                            h = er;
                            return;
                        case "th":
                        case "td":
                            bt(pe, "tr", null);
                            h(n, i, o, x);
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            d();
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "table":
                            d();
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            if (u.inTableScope(i)) {
                                u.clearToContext(Ea);
                                u.pop();
                                h = Ne;
                            }
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "td":
                        case "th":
                        case "tr":
                            return;
                    }
                    break;
            }
            Ne(n, i, o, x);
        }
        function er(n, i, o, x) {
            function d() {
                if (!u.inTableScope("tr")) {
                    return false;
                }
                u.clearToContext(ei);
                u.pop();
                h = bt;
                return true;
            }
            switch(n){
                case 2:
                    switch(i){
                        case "th":
                        case "td":
                            u.clearToContext(ei);
                            D(i, o);
                            h = kt;
                            L.insertMarker();
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                        case "tr":
                            if (d()) {
                                h(n, i, o, x);
                            }
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "tr":
                            d();
                            return;
                        case "table":
                            if (d()) {
                                h(n, i, o, x);
                            }
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            if (u.inTableScope(i)) {
                                if (d()) {
                                    h(n, i, o, x);
                                }
                            }
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "td":
                        case "th":
                            return;
                    }
                    break;
            }
            Ne(n, i, o, x);
        }
        function kt(n, i, o, x) {
            switch(n){
                case 2:
                    switch(i){
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            if (u.inTableScope("td")) {
                                kt(I, "td");
                                h(n, i, o, x);
                            } else if (u.inTableScope("th")) {
                                kt(I, "th");
                                h(n, i, o, x);
                            }
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "td":
                        case "th":
                            if (!u.inTableScope(i)) {
                                return;
                            }
                            u.generateImpliedEndTags();
                            u.popTag(i);
                            L.clearToMarker();
                            h = er;
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                            return;
                        case "table":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                        case "tr":
                            if (!u.inTableScope(i)) {
                                return;
                            }
                            kt(I, u.inTableScope("td") ? "td" : "th");
                            h(n, i, o, x);
                            return;
                    }
                    break;
            }
            w(n, i, o, x);
        }
        function ze(n, i, o, x) {
            switch(n){
                case 1:
                    if (Je) {
                        i = i.replace(ga, "");
                        if (i.length === 0) {
                            return;
                        }
                    }
                    Ie(i);
                    return;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case -1:
                    w(n, i, o, x);
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "option":
                            if (u.top instanceof hc_elements.HTMLOptionElement) {
                                ze(I, i);
                            }
                            D(i, o);
                            return;
                        case "optgroup":
                            if (u.top instanceof hc_elements.HTMLOptionElement) {
                                ze(I, "option");
                            }
                            if (u.top instanceof hc_elements.HTMLOptGroupElement) {
                                ze(I, i);
                            }
                            D(i, o);
                            return;
                        case "select":
                            ze(I, i);
                            return;
                        case "input":
                        case "keygen":
                        case "textarea":
                            if (!u.inSelectScope("select")) {
                                return;
                            }
                            ze(I, "select");
                            h(n, i, o, x);
                            return;
                        case "script":
                        case "template":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case 3:
                    switch(i){
                        case "optgroup":
                            if (u.top instanceof hc_elements.HTMLOptionElement && u.elements[u.elements.length - 2] instanceof hc_elements.HTMLOptGroupElement) {
                                ze(I, "option");
                            }
                            if (u.top instanceof hc_elements.HTMLOptGroupElement) {
                                u.pop();
                            }
                            return;
                        case "option":
                            if (u.top instanceof hc_elements.HTMLOptionElement) {
                                u.pop();
                            }
                            return;
                        case "select":
                            if (!u.inSelectScope(i)) {
                                return;
                            }
                            u.popTag(i);
                            $t();
                            return;
                        case "template":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
            }
        }
        function jr(n, i, o, x) {
            switch(i){
                case "caption":
                case "table":
                case "tbody":
                case "tfoot":
                case "thead":
                case "tr":
                case "td":
                case "th":
                    switch(n){
                        case 2:
                            jr(I, "select");
                            h(n, i, o, x);
                            return;
                        case 3:
                            if (u.inTableScope(i)) {
                                jr(I, "select");
                                h(n, i, o, x);
                            }
                            return;
                    }
            }
            ze(n, i, o, x);
        }
        function Va(n, i, o, x) {
            function d(b) {
                h = b;
                Ue[Ue.length - 1] = h;
                h(n, i, o, x);
            }
            switch(n){
                case 1:
                case 4:
                case 5:
                    w(n, i, o, x);
                    return;
                case -1:
                    if (!u.contains("template")) {
                        pt();
                    } else {
                        u.popTag("template");
                        L.clearToMarker();
                        Ue.pop();
                        $t();
                        h(n, i, o, x);
                    }
                    return;
                case 2:
                    switch(i){
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            Z(n, i, o, x);
                            return;
                        case "caption":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            d(Ne);
                            return;
                        case "col":
                            d(Vr);
                            return;
                        case "tr":
                            d(bt);
                            return;
                        case "td":
                        case "th":
                            d(er);
                            return;
                    }
                    d(w);
                    return;
                case 3:
                    switch(i){
                        case "template":
                            Z(n, i, o, x);
                            return;
                        default:
                            return;
                    }
            }
        }
        function Di(n, i, o, x) {
            switch(n){
                case 1:
                    if (ma.test(i)) {
                        break;
                    }
                    w(n, i);
                    return;
                case 4:
                    u.elements[0]._appendChild(F.createComment(i));
                    return;
                case 5:
                    return;
                case -1:
                    pt();
                    return;
                case 2:
                    if (i === "html") {
                        w(n, i, o, x);
                        return;
                    }
                    break;
                case 3:
                    if (i === "html") {
                        if (dt) {
                            return;
                        }
                        h = Qo;
                        return;
                    }
                    break;
            }
            h = w;
            h(n, i, o, x);
        }
        function ja(n, i, o, x) {
            switch(n){
                case 1:
                    i = i.replace($n, "");
                    if (i.length > 0) {
                        Ie(i);
                    }
                    return;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case -1:
                    pt();
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "frameset":
                            D(i, o);
                            return;
                        case "frame":
                            D(i, o);
                            u.pop();
                            return;
                        case "noframes":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case 3:
                    if (i === "frameset") {
                        if (dt && u.top instanceof hc_elements.HTMLHtmlElement) {
                            return;
                        }
                        u.pop();
                        if (!dt && !(u.top instanceof hc_elements.HTMLFrameSetElement)) {
                            h = Yo;
                        }
                        return;
                    }
                    break;
            }
        }
        function Yo(n, i, o, x) {
            switch(n){
                case 1:
                    i = i.replace($n, "");
                    if (i.length > 0) {
                        Ie(i);
                    }
                    return;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case -1:
                    pt();
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "noframes":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
                case 3:
                    if (i === "html") {
                        h = $o;
                        return;
                    }
                    break;
            }
        }
        function Qo(n, i, o, x) {
            switch(n){
                case 1:
                    if (ma.test(i)) {
                        break;
                    }
                    w(n, i, o, x);
                    return;
                case 4:
                    F._appendChild(F.createComment(i));
                    return;
                case 5:
                    w(n, i, o, x);
                    return;
                case -1:
                    pt();
                    return;
                case 2:
                    if (i === "html") {
                        w(n, i, o, x);
                        return;
                    }
                    break;
            }
            h = w;
            h(n, i, o, x);
        }
        function $o(n, i, o, x) {
            switch(n){
                case 1:
                    i = i.replace($n, "");
                    if (i.length > 0) {
                        w(n, i, o, x);
                    }
                    return;
                case 4:
                    F._appendChild(F.createComment(i));
                    return;
                case 5:
                    w(n, i, o, x);
                    return;
                case -1:
                    pt();
                    return;
                case 2:
                    switch(i){
                        case "html":
                            w(n, i, o, x);
                            return;
                        case "noframes":
                            Z(n, i, o, x);
                            return;
                    }
                    break;
            }
        }
        function ki(n, i, o, x) {
            function d(K) {
                for(let le = 0, we = K.length; le < we; le++){
                    switch(K[le][0]){
                        case "color":
                        case "face":
                        case "size":
                            return true;
                    }
                }
                return false;
            }
            let b;
            switch(n){
                case 1:
                    if (Q && ff.test(i)) {
                        Q = false;
                    }
                    if (Je) {
                        i = i.replace(ga, "\uFFFD");
                    }
                    Ie(i);
                    return;
                case 4:
                    Re(i);
                    return;
                case 5:
                    return;
                case 2:
                    switch(i){
                        case "font":
                            if (!d(o)) {
                                break;
                            }
                        case "b":
                        case "big":
                        case "blockquote":
                        case "body":
                        case "br":
                        case "center":
                        case "code":
                        case "dd":
                        case "div":
                        case "dl":
                        case "dt":
                        case "em":
                        case "embed":
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                        case "head":
                        case "hr":
                        case "i":
                        case "img":
                        case "li":
                        case "listing":
                        case "menu":
                        case "meta":
                        case "nobr":
                        case "ol":
                        case "p":
                        case "pre":
                        case "ruby":
                        case "s":
                        case "small":
                        case "span":
                        case "strong":
                        case "strike":
                        case "sub":
                        case "sup":
                        case "table":
                        case "tt":
                        case "u":
                        case "ul":
                        case "var":
                            if (dt) {
                                break;
                            }
                            do {
                                u.pop();
                                b = u.top;
                            }while (b.namespaceURI !== NAMESPACE.HTML && !uc(b) && !lc(b))
                            re(n, i, o, x);
                            return;
                    }
                    b = u.elements.length === 1 && dt ? t : u.top;
                    if (b.namespaceURI === NAMESPACE.MATHML) {
                        fc(o);
                    } else if (b.namespaceURI === NAMESPACE.SVG) {
                        i = hf(i);
                        xc(o);
                    }
                    Zn(o);
                    ka(i, o, b.namespaceURI);
                    if (x) {
                        if (i === "script" && b.namespaceURI === NAMESPACE.SVG) ;
                        u.pop();
                    }
                    return;
                case 3:
                    b = u.top;
                    if (i === "script" && b.namespaceURI === NAMESPACE.SVG && b.localName === "script") {
                        u.pop();
                    } else {
                        let S = u.elements.length - 1;
                        let R = u.elements[S];
                        while(true){
                            if (R.localName.toLowerCase() === i) {
                                u.popElement(R);
                                break;
                            }
                            R = u.elements[--S];
                            if (R.namespaceURI !== NAMESPACE.HTML) {
                                continue;
                            }
                            h(n, i, o, x);
                            break;
                        }
                    }
                    return;
            }
        }
        Sr.testTokenizer = function(n, i, o, x) {
            const d = [];
            switch(i){
                case "PCDATA state":
                    l = M;
                    break;
                case "RCDATA state":
                    l = at;
                    break;
                case "RAWTEXT state":
                    l = Zt;
                    break;
                case "PLAINTEXT state":
                    l = Ma;
                    break;
            }
            if (o) {
                Ye = o;
            }
            re = function(S, R, K, le) {
                Dt();
                switch(S){
                    case 1:
                        if (d.length > 0 && d[d.length - 1][0] === "Character") {
                            d[d.length - 1][1] += R;
                        } else {
                            d.push([
                                "Character",
                                R
                            ]);
                        }
                        break;
                    case 4:
                        d.push([
                            "Comment",
                            R
                        ]);
                        break;
                    case 5:
                        d.push([
                            "DOCTYPE",
                            R,
                            K === undefined ? null : K,
                            le === undefined ? null : le,
                            !Sa
                        ]);
                        break;
                    case 2:
                        const we = Object.create(null);
                        for (const Et of K){
                            if (Et.length === 1) {
                                we[Et[0]] = "";
                            } else {
                                we[Et[0]] = Et[1];
                            }
                        }
                        const ot = [
                            "StartTag",
                            R,
                            we
                        ];
                        if (le) {
                            ot.push(true);
                        }
                        d.push(ot);
                        break;
                    case 3:
                        d.push([
                            "EndTag",
                            R
                        ]);
                        break;
                    case -1:
                        break;
                }
            };
            if (!x) {
                this.parse(n, true);
            } else {
                for(let b = 0; b < n.length; b++){
                    this.parse(n[b]);
                }
                this.parse("", true);
            }
            return d;
        };
        return Sr;
    }
});
var Er = C(function(Yd, Sc) {
    Sc.exports = wc;
    const yc = fa();
    const Nc = ha();
    const mozHTMLParser = va();
    const Ta = ee();
    const mf = $r();
    function wc(e) {
        this.contextObject = e;
    }
    const gf = {
        xml: {
            "": true,
            "1.0": true,
            "2.0": true
        },
        core: {
            "": true,
            "2.0": true
        },
        html: {
            "": true,
            "1.0": true,
            "2.0": true
        },
        xhtml: {
            "": true,
            "1.0": true,
            "2.0": true
        }
    };
    wc.prototype = {
        hasFeature: function(t, r) {
            const a = gf[(t || "").toLowerCase()];
            return a && a[r || ""] || false;
        },
        createDocumentType: function(t, r, a) {
            if (!mf.isValidQName(t)) {
                Ta.InvalidCharacterError();
            }
            return new Nc(this.contextObject, t, r, a);
        },
        createDocument: function(t, r, a) {
            const s = new yc(false, null);
            let c;
            if (r) {
                c = s.createElementNS(t, r);
            } else {
                c = null;
            }
            if (a) {
                s.appendChild(a);
            }
            if (c) {
                s.appendChild(c);
            }
            if (t === Ta.NAMESPACE.HTML) {
                s._contentType = "application/xhtml+xml";
            } else if (t === Ta.NAMESPACE.SVG) {
                s._contentType = "image/svg+xml";
            } else {
                s._contentType = "application/xml";
            }
            return s;
        },
        createHTMLDocument: function(t) {
            const r = new yc(true, null);
            r.appendChild(new Nc(r, "html"));
            const a = r.createElement("html");
            r.appendChild(a);
            const s = r.createElement("head");
            a.appendChild(s);
            if (t !== undefined) {
                const c = r.createElement("title");
                s.appendChild(c);
                c.appendChild(r.createTextNode(t));
            }
            a.appendChild(r.createElement("body"));
            r.modclock = 1;
            return r;
        },
        mozSetOutputMutationHandler: function(e, t) {
            e.mutationHandler = t;
        },
        mozGetInputMutationHandler: function(e) {
            Ta.nyi();
        },
        mozHTMLParser
    };
});
const Cc = C(function(Qd, Ac) {
    const bf = ca();
    const Ef = Vn();
    Ac.exports = ri;
    function ri(e, t) {
        this._window = e;
        this._href = t;
    }
    ri.prototype = Object.create(Ef.prototype, {
        constructor: {
            value: ri
        },
        href: {
            get: function() {
                return this._href;
            },
            set: function(e) {
                this.assign(e);
            }
        },
        assign: {
            value: function(e) {
                const t = new bf(this._href);
                const r = t.resolve(e);
                this._href = r;
            }
        },
        replace: {
            value: function(e) {
                this.assign(e);
            }
        },
        reload: {
            value: function() {
                this.assign(this.href);
            }
        },
        toString: {
            value: function() {
                return this.href;
            }
        }
    });
});
const kc = C(function($d, Dc) {
    const _f = Object.create(null, {
        appCodeName: {
            value: "Mozilla"
        },
        appName: {
            value: "Netscape"
        },
        appVersion: {
            value: "4.0"
        },
        platform: {
            value: ""
        },
        product: {
            value: "Gecko"
        },
        productSub: {
            value: "20100101"
        },
        userAgent: {
            value: ""
        },
        vendor: {
            value: ""
        },
        vendorSub: {
            value: ""
        },
        taintEnabled: {
            value: function() {
                return false;
            }
        }
    });
    Dc.exports = _f;
});
const Mc = C(function(Zd, Lc) {
    const vf = {
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval
    };
    Lc.exports = vf;
});
const ni = C(function(_r, Rc) {
    const ai = ee();
    _r = Rc.exports = {
        CSSStyleDeclaration: oa(),
        CharacterData: lr(),
        Comment: Cn(),
        DOMException: Wr(),
        DOMImplementation: Er(),
        DOMTokenList: xn(),
        Document: fa(),
        DocumentFragment: kn(),
        DocumentType: ha(),
        Element: Ft(),
        HTMLParser: va(),
        NamedNodeMap: gn(),
        Node: xe(),
        NodeList: yt(),
        NodeFilter: hr(),
        ProcessingInstruction: Mn(),
        Text: Sn(),
        Window: ii()
    };
    ai.merge(_r, Un());
    ai.merge(_r, la().elements);
    ai.merge(_r, Xn().elements);
});
var ii = C(function(Jd, Ic) {
    const Tf = Er();
    const yf = Ka();
    const Nf = Cc();
    const vr = ee();
    Ic.exports = ya;
    function ya(e) {
        this.document = e || new Tf(null).createHTMLDocument("");
        this.document._scripting_enabled = true;
        this.document.defaultView = this;
        this.location = new Nf(this, this.document._address || "about:blank");
    }
    ya.prototype = Object.create(yf.prototype, {
        console: {
            value: console
        },
        history: {
            value: {
                back: vr.nyi,
                forward: vr.nyi,
                go: vr.nyi
            }
        },
        navigator: {
            value: kc()
        },
        window: {
            get: function() {
                return this;
            }
        },
        self: {
            get: function() {
                return this;
            }
        },
        frames: {
            get: function() {
                return this;
            }
        },
        parent: {
            get: function() {
                return this;
            }
        },
        top: {
            get: function() {
                return this;
            }
        },
        length: {
            value: 0
        },
        frameElement: {
            value: null
        },
        opener: {
            value: null
        },
        onload: {
            get: function() {
                return this._getEventHandler("load");
            },
            set: function(e) {
                this._setEventHandler("load", e);
            }
        },
        getComputedStyle: {
            value: function(t) {
                return t.style;
            }
        }
    });
    vr.expose(Mc(), ya);
    vr.expose(ni(), ya);
});
const Bc = C(function(wf) {
    const Oc = Er();
    const qc = va();
    const eh = ii();
    const Hc = ni();
    wf.createDOMImplementation = function() {
        return new Oc(null);
    };
    wf.createDocument = function(e, t) {
        if (e || t) {
            const r = new qc;
            r.parse(e || "", true);
            return r.document();
        }
        return new Oc(null).createHTMLDocument("");
    };
    wf.createIncrementalHTMLParser = function() {
        const e = new qc;
        return {
            write: function(t) {
                if (t.length > 0) {
                    e.parse(t, false, function() {
                        return true;
                    });
                }
            },
            end: function(t) {
                e.parse(t || "", true, function() {
                    return true;
                });
            },
            process: function(t) {
                return e.parse("", false, t);
            },
            document: function() {
                return e.document();
            }
        };
    };
    wf.createWindow = function(e, t) {
        const r = wf.createDocument(e);
        if (t !== undefined) {
            r._address = t;
        }
        return new Hc.Window(r);
    };
    wf.impl = Hc;
});
function kf(e) {
    for(let t = 1; t < arguments.length; t++){
        const r = arguments[t];
        for(const a in r){
            if (r.hasOwnProperty(a)) {
                e[a] = r[a];
            }
        }
    }
    return e;
}
function ui(e, t) {
    return Array(t + 1).join(e);
}
function Lf(e) {
    return e.replace(/^\n*/, "");
}
function Mf(e) {
    let e_length = e.length;
    while(e_length > 0 && e[e_length - 1] === `
`){
        e_length--;
    }
    return e.substring(0, e_length);
}
const Rf = [
    "ADDRESS",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "BLOCKQUOTE",
    "BODY",
    "CANVAS",
    "CENTER",
    "DD",
    "DIR",
    "DIV",
    "DL",
    "DT",
    "FIELDSET",
    "FIGCAPTION",
    "FIGURE",
    "FOOTER",
    "FORM",
    "FRAMESET",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "HEADER",
    "HGROUP",
    "HR",
    "HTML",
    "ISINDEX",
    "LI",
    "MAIN",
    "MENU",
    "NAV",
    "NOFRAMES",
    "NOSCRIPT",
    "OL",
    "OUTPUT",
    "P",
    "PRE",
    "SECTION",
    "TABLE",
    "TBODY",
    "TD",
    "TFOOT",
    "TH",
    "THEAD",
    "TR",
    "UL"
];
function isBlock(e) {
    return xi(e, Rf);
}
const Vc = [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
];
function isVoid(e) {
    return xi(e, Vc);
}
function If(e) {
    return zc(e, Vc);
}
const Gc = [
    "A",
    "TABLE",
    "THEAD",
    "TBODY",
    "TFOOT",
    "TH",
    "TD",
    "IFRAME",
    "SCRIPT",
    "AUDIO",
    "VIDEO"
];
function Of(e) {
    return xi(e, Gc);
}
function qf(e) {
    return zc(e, Gc);
}
function xi(e, t) {
    return t.indexOf(e.nodeName) >= 0;
}
function zc(e, t) {
    return e.getElementsByTagName && t.some((r)=>e.getElementsByTagName(r).length);
}
const rules = {};
rules.paragraph = {
    filter: "p",
    replacement: function(e) {
        return `

` + e + `

`;
    }
};
rules.lineBreak = {
    filter: "br",
    replacement: function(e, t, r) {
        return r.br + `
`;
    }
};
rules.heading = {
    filter: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
    ],
    replacement: function(e, t, r) {
        const a = Number(t.nodeName.charAt(1));
        if (r.headingStyle === "setext" && a < 3) {
            const s = ui(a === 1 ? "=" : "-", e.length);
            return `

` + e + `
` + s + `

`;
        } else {
            return `${`

` + ui("#", a)} ${e}${`

`}`;
        }
    }
};
rules.blockquote = {
    filter: "blockquote",
    replacement: function(e) {
        e = e.replace(/^\n+|\n+$/g, "");
        e = e.replace(/^/gm, "> ");
        return `

` + e + `

`;
    }
};
rules.list = {
    filter: [
        "ul",
        "ol"
    ],
    replacement: function(e, t) {
        const t_parentNode = t.parentNode;
        if (t_parentNode.nodeName === "LI" && t_parentNode.lastElementChild === t) {
            return `
` + e;
        } else {
            return `

` + e + `

`;
        }
    }
};
rules.listItem = {
    filter: "li",
    replacement: function(e, t, r) {
        e = e.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
        let a = `${r.bulletListMarker}   `;
        const t_parentNode = t.parentNode;
        if (t_parentNode.nodeName === "OL") {
            const c = t_parentNode.getAttribute("start");
            const f = Array.prototype.indexOf.call(t_parentNode.children, t);
            a = `${c ? Number(c) + f : f + 1}.  `;
        }
        return a + e + (t.nextSibling && !/\n$/.test(e) ? `
` : "");
    }
};
rules.indentedCodeBlock = {
    filter: function(e, t) {
        return t.codeBlockStyle === "indented" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
    },
    replacement: function(e, t, r) {
        return `

    ` + t.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
    }
};
rules.fencedCodeBlock = {
    filter: function(e, t) {
        return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
    },
    replacement: function(e, t, r) {
        const a = t.firstChild.getAttribute("class") || "";
        const s = (a.match(/language-(\S+)/) || [
            null,
            ""
        ])[1];
        const textContent = t.firstChild.textContent;
        const f = r.fence.charAt(0);
        let m = 3;
        const p = new RegExp(`^${f}{3,}`, "gm");
        let _;
        while(_ = p.exec(textContent)){
            if (_[0].length >= m) {
                m = _[0].length + 1;
            }
        }
        const v = ui(f, m);
        return `

` + v + s + `
` + textContent.replace(/\n$/, "") + `
` + v + `

`;
    }
};
rules.horizontalRule = {
    filter: "hr",
    replacement: function(e, t, r) {
        return `

` + r.hr + `

`;
    }
};
rules.inlineLink = {
    filter: function(e, t) {
        return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
    },
    replacement: function(e, t) {
        let r = t.getAttribute("href");
        if (r) {
            r = r.replace(/([()])/g, "\\$1");
        }
        let a = Na(t.getAttribute("title"));
        if (a) {
            a = ` "${a.replace(/"/g, "\\\"")}"`;
        }
        return `[${e}](${r}${a})`;
    }
};
rules.referenceLink = {
    filter: function(e, t) {
        return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
    },
    replacement: function(e, t, r) {
        const a = t.getAttribute("href");
        let s = Na(t.getAttribute("title"));
        if (s) {
            s = ` "${s}"`;
        }
        let c;
        let f;
        switch(r.linkReferenceStyle){
            case "collapsed":
                c = `[${e}][]`;
                f = `[${e}]: ${a}${s}`;
                break;
            case "shortcut":
                c = `[${e}]`;
                f = `[${e}]: ${a}${s}`;
                break;
            default:
                const m = this.references.length + 1;
                c = `[${e}][${m}]`;
                f = `[${m}]: ${a}${s}`;
        }
        this.references.push(f);
        return c;
    },
    references: [],
    append: function(e) {
        let t = "";
        if (this.references.length) {
            t = `

` + this.references.join(`
`) + `

`;
            this.references = [];
        }
        return t;
    }
};
rules.emphasis = {
    filter: [
        "em",
        "i"
    ],
    replacement: function(e, t, r) {
        if (!e.trim()) {
            return "";
        }
        return r.emDelimiter + e + r.emDelimiter;
    }
};
rules.strong = {
    filter: [
        "strong",
        "b"
    ],
    replacement: function(e, t, r) {
        if (!e.trim()) {
            return "";
        }
        return r.strongDelimiter + e + r.strongDelimiter;
    }
};
rules.code = {
    filter: function(e) {
        const t = e.previousSibling || e.nextSibling;
        const r = e.parentNode.nodeName === "PRE" && !t;
        return e.nodeName === "CODE" && !r;
    },
    replacement: function(e) {
        if (!e) {
            return "";
        }
        e = e.replace(/\r?\n|\r/g, " ");
        const t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "";
        let r = "`";
        const a = e.match(/`+/gm) || [];
        while(a.indexOf(r) !== -1){
            r = `${r}\``;
        }
        return r + t + e + t + r;
    }
};
rules.image = {
    filter: "img",
    replacement: function(e, t) {
        const r = Na(t.getAttribute("alt"));
        const a = t.getAttribute("src") || "";
        const s = Na(t.getAttribute("title"));
        const c = s ? ` "${s}"` : "";
        if (a) {
            return `![${r}](${a}${c})`;
        }
        return "";
    }
};
function Na(e) {
    if (e) {
        return e.replace(/(\n+\s*)+/g, `
`);
    }
    return "";
}
function Wc(e) {
    this.options = e;
    this._keep = [];
    this._remove = [];
    this.blankRule = {
        replacement: e.blankReplacement
    };
    this.keepReplacement = e.keepReplacement;
    this.defaultRule = {
        replacement: e.defaultReplacement
    };
    this.array = [];
    for(const t in e.rules){
        this.array.push(e.rules[t]);
    }
}
Wc.prototype = {
    add: function(e, t) {
        this.array.unshift(t);
    },
    keep: function(e) {
        this._keep.unshift({
            filter: e,
            replacement: this.keepReplacement
        });
    },
    remove: function(e) {
        this._remove.unshift({
            filter: e,
            replacement: function() {
                return "";
            }
        });
    },
    forNode: function(e) {
        if (e.isBlank) {
            return this.blankRule;
        }
        let t;
        if (t = si(this.array, e, this.options)) {
            return t;
        }
        if (t = si(this._keep, e, this.options)) {
            return t;
        }
        if (t = si(this._remove, e, this.options)) {
            return t;
        }
        return this.defaultRule;
    },
    forEach: function(e) {
        for(let t = 0; t < this.array.length; t++){
            e(this.array[t], t);
        }
    }
};
function si(e, t, options) {
    for (const s of e){
        if (Hf(s, t, options)) {
            return s;
        }
    }
}
function Hf(e, t, options) {
    const e_filter = e.filter;
    if (typeof e_filter === "string") {
        if (e_filter === t.nodeName.toLowerCase()) {
            return true;
        }
    } else if (Array.isArray(e_filter)) {
        if (e_filter.indexOf(t.nodeName.toLowerCase()) > -1) {
            return true;
        }
    } else if (typeof e_filter === "function") {
        if (e_filter.call(e, t, options)) {
            return true;
        }
    } else {
        throw TypeError("`filter` needs to be a string, array, or function");
    }
}
function Ff(e) {
    const { element, isBlock, isVoid } = e;
    const s = e.isPre || function(ne) {
        return ne.nodeName === "PRE";
    };
    if (!element.firstChild || s(element)) {
        return;
    }
    let c = null;
    let f = false;
    let m = null;
    let p = Pc(m, element, s);
    while(p !== element){
        if (p.nodeType === 3 || p.nodeType === 4) {
            let _ = p.data.replace(/[ \r\n\t]+/g, " ");
            if ((!c || / $/.test(c.data)) && !f && _[0] === " ") {
                _ = _.substr(1);
            }
            if (!_) {
                p = ci(p);
                continue;
            }
            p.data = _;
            c = p;
        } else if (p.nodeType === 1) {
            if (isBlock(p) || p.nodeName === "BR") {
                if (c) {
                    c.data = c.data.replace(/ $/, "");
                }
                c = null;
                f = false;
            } else if (isVoid(p) || s(p)) {
                c = null;
                f = true;
            } else if (c) {
                f = false;
            }
        } else {
            p = ci(p);
            continue;
        }
        const v = Pc(m, p, s);
        m = p;
        p = v;
    }
    if (c) {
        c.data = c.data.replace(/ $/, "");
        if (!c.data) {
            ci(c);
        }
    }
}
function ci(e) {
    const t = e.nextSibling || e.parentNode;
    e.parentNode.removeChild(e);
    return t;
}
function Pc(e, t, r) {
    if (e && e.parentNode === t || r(t)) {
        return t.nextSibling || t.parentNode;
    }
    return t.firstChild || t.nextSibling || t.parentNode;
}
const Xc = typeof window !== "undefined" ? window : {};
function Bf() {
    const Xc_DOMParser = Xc.DOMParser;
    let t = false;
    try {
        if (new Xc_DOMParser().parseFromString("", "text/html")) {
            t = true;
        }
    } catch (r) {}
    return t;
}
function Pf() {
    const e = function() {};
    {
        const t = Bc();
        e.prototype.parseFromString = function(r) {
            return t.createDocument(r);
        };
    }
    return e;
}
const Uf = Bf() ? Xc.DOMParser : Pf();
function Vf(e, t) {
    let element;
    if (typeof e === "string") {
        const a = jf().parseFromString(`<x-turndown id="turndown-root">${e}</x-turndown>`, "text/html");
        element = a.getElementById("turndown-root");
    } else {
        element = e.cloneNode(true);
    }
    Ff({
        element,
        isBlock,
        isVoid,
        isPre: t.preformattedCode ? Gf : null
    });
    return element;
}
let oi;
function jf() {
    oi = oi || new Uf;
    return oi;
}
function Gf(e) {
    return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function zf(e, t) {
    e.isBlock = isBlock(e);
    e.isCode = e.nodeName === "CODE" || e.parentNode.isCode;
    e.isBlank = Wf(e);
    e.flankingWhitespace = Xf(e, t);
    return e;
}
function Wf(e) {
    return !isVoid(e) && !Of(e) && /^\s*$/i.test(e.textContent) && !If(e) && !qf(e);
}
function Xf(e, t) {
    if (e.isBlock || t.preformattedCode && e.isCode) {
        return {
            leading: "",
            trailing: ""
        };
    }
    const r = Kf(e.textContent);
    if (r.leadingAscii && Uc("left", e, t)) {
        r.leading = r.leadingNonAscii;
    }
    if (r.trailingAscii && Uc("right", e, t)) {
        r.trailing = r.trailingNonAscii;
    }
    return {
        leading: r.leading,
        trailing: r.trailing
    };
}
function Kf(textContent) {
    const t = textContent.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
    return {
        leading: t[1],
        leadingAscii: t[2],
        leadingNonAscii: t[3],
        trailing: t[4],
        trailingNonAscii: t[5],
        trailingAscii: t[6]
    };
}
function Uc(e, t, r) {
    let a;
    let s;
    let c;
    if (e === "left") {
        a = t.previousSibling;
        s = / $/;
    } else {
        a = t.nextSibling;
        s = /^ /;
    }
    if (a) {
        if (a.nodeType === 3) {
            c = s.test(a.nodeValue);
        } else if (r.preformattedCode && a.nodeName === "CODE") {
            c = false;
        } else if (a.nodeType === 1 && !isBlock(a)) {
            c = s.test(a.textContent);
        }
    }
    return c;
}
const reduce = Array.prototype.reduce;
const Qf = [
    [
        /\\/g,
        "\\\\"
    ],
    [
        /\*/g,
        "\\*"
    ],
    [
        /^-/g,
        "\\-"
    ],
    [
        /^\+ /g,
        "\\+ "
    ],
    [
        /^(=+)/g,
        "\\$1"
    ],
    [
        /^(#{1,6}) /g,
        "\\$1 "
    ],
    [
        /`/g,
        "\\`"
    ],
    [
        /^~~~/g,
        "\\~~~"
    ],
    [
        /\[/g,
        "\\["
    ],
    [
        /\]/g,
        "\\]"
    ],
    [
        /^>/g,
        "\\>"
    ],
    [
        /_/g,
        "\\_"
    ],
    [
        /^(\d+)\. /g,
        "$1\\. "
    ]
];
function wa(e) {
    if (!(this instanceof wa)) {
        return new wa(e);
    }
    const t = {
        rules,
        headingStyle: "setext",
        hr: "* * *",
        bulletListMarker: "*",
        codeBlockStyle: "indented",
        fence: "```",
        emDelimiter: "_",
        strongDelimiter: "**",
        linkStyle: "inlined",
        linkReferenceStyle: "full",
        br: "  ",
        preformattedCode: false,
        blankReplacement: function(r, a) {
            if (a.isBlock) {
                return `

`;
            }
            return "";
        },
        keepReplacement: function(r, a) {
            if (a.isBlock) {
                return `

` + a.outerHTML + `

`;
            }
            return a.outerHTML;
        },
        defaultReplacement: function(r, a) {
            if (a.isBlock) {
                return `

` + r + `

`;
            }
            return r;
        }
    };
    this.options = kf({}, t, e);
    this.rules = new Wc(this.options);
}
wa.prototype = {
    turndown: function(e) {
        if (!Jf(e)) {
            throw TypeError(`${e} is not a string, or an element/document/fragment node.`);
        }
        if (e === "") {
            return "";
        }
        const t = Kc.call(this, new Vf(e, this.options));
        return $f.call(this, t);
    },
    use: function(e) {
        if (Array.isArray(e)) {
            for(let t = 0; t < e.length; t++){
                this.use(e[t]);
            }
        } else if (typeof e === "function") {
            e(this);
        } else {
            throw TypeError("plugin must be a Function or an Array of Functions");
        }
        return this;
    },
    addRule: function(e, t) {
        this.rules.add(e, t);
        return this;
    },
    keep: function(e) {
        this.rules.keep(e);
        return this;
    },
    remove: function(e) {
        this.rules.remove(e);
        return this;
    },
    escape: function(e) {
        return Qf.reduce((acc, item)=>acc.replace(item[0], item[1]), e);
    }
};
function Kc(e) {
    const t = this;
    return reduce.call(e.childNodes, function(r, a) {
        a = new zf(a, t.options);
        let s = "";
        if (a.nodeType === 3) {
            s = a.isCode ? a.nodeValue : t.escape(a.nodeValue);
        } else if (a.nodeType === 1) {
            s = Zf.call(t, a);
        }
        return Yc(r, s);
    }, "");
}
function $f(e) {
    const t = this;
    this.rules.forEach((r)=>{
        if (typeof r.append === "function") {
            e = Yc(e, r.append(t.options));
        }
    });
    return e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function Zf(e) {
    const t = this.rules.forNode(e);
    let r = Kc.call(this, e);
    const e_flankingWhitespace = e.flankingWhitespace;
    if (e_flankingWhitespace.leading || e_flankingWhitespace.trailing) {
        r = r.trim();
    }
    return e_flankingWhitespace.leading + t.replacement(r, e, this.options) + e_flankingWhitespace.trailing;
}
function Yc(e, t) {
    const r = Mf(e);
    const a = Lf(t);
    const s = Math.max(e.length - r.length, t.length - a.length);
    const c = `

`.substring(0, s);
    return r + c + a;
}
function Jf(e) {
    return e != null && (typeof e === "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const ah = wa;
export { ah as default };
