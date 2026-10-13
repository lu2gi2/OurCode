import { rst } from "/$bunfs/root/chunk-vmjcjnmq.js";
class O extends Event {
    constructor(t, e){
        super(t);
        this.code = e?.code ?? undefined;
        this.message = e?.message ?? undefined;
    }
    [Symbol.for("nodejs.util.inspect.custom")](t, e, i) {
        return i(q(this), e);
    }
    [Symbol.for("Deno.customInspect")](t, e) {
        return t(q(this), e);
    }
}
function V(t) {
    let globalThis_DOMException = globalThis.DOMException;
    if (typeof globalThis_DOMException === "function") {
        return new globalThis_DOMException(t, "SyntaxError");
    }
    return SyntaxError(t);
}
function T(t) {
    if (t instanceof Error) {
        if ("errors" in t && Array.isArray(t.errors)) {
            return t.errors.map(T).join(", ");
        }
        if ("cause" in t && t.cause instanceof Error) {
            return `${t}: ${T(t.cause)}`;
        }
        return t.message;
    }
    return `${t}`;
}
function q(t) {
    return {
        type: t.type,
        message: t.message,
        code: t.code,
        defaultPrevented: t.defaultPrevented,
        cancelable: t.cancelable,
        timeStamp: t.timeStamp
    };
}
const H = (t)=>{
    throw TypeError(t);
};
const A = (t, e, i)=>e.has(t) || H(`Cannot ${i}`);
const s = (t, e, i)=>{
    A(t, e, "read from private field");
    if (i) {
        return i.call(t);
    }
    return e.get(t);
};
const a = (t, e, i)=>{
    if (e.has(t)) {
        return H("Cannot add the same private member more than once");
    }
    if (e instanceof WeakSet) {
        return e.add(t);
    }
    return e.set(t, i);
};
const n = (t, e, i, h)=>{
    A(t, e, "write to private field");
    e.set(t, i);
    return i;
};
const c = (t, e, i)=>{
    A(t, e, "access private method");
    return i;
};
let r;
let p;
let v;
let k;
let W;
let y;
let _;
let M;
let d;
let f;
let E;
let w;
let m;
let l;
let L;
let b;
let R;
let B;
let S;
let x;
let C;
let I;
let U;
class OWe extends EventTarget {
    constructor(t, e){
        super();
        a(this, l);
        this.CONNECTING = 0;
        this.OPEN = 1;
        this.CLOSED = 2;
        a(this, r);
        a(this, p);
        a(this, v);
        a(this, k);
        a(this, W);
        a(this, y);
        a(this, _);
        a(this, M, null);
        a(this, d);
        a(this, f);
        a(this, E, null);
        a(this, w, null);
        a(this, m, null);
        a(this, b, async (o)=>{
            var g;
            s(this, f).reset();
            let { body, redirected, status, headers } = o;
            if (status === 204) {
                c(this, l, C).call(this, "Server sent HTTP 204, not reconnecting", 204);
                this.close();
                return;
            }
            if (redirected) {
                n(this, v, new URL(o.url));
            } else {
                n(this, v, undefined);
            }
            if (status !== 200) {
                c(this, l, C).call(this, `Non-200 status code (${status})`, status);
                return;
            }
            if (!(headers.get("content-type") || "").startsWith("text/event-stream")) {
                c(this, l, C).call(this, 'Invalid content type, expected "text/event-stream"', status);
                return;
            }
            if (s(this, r) === this.CLOSED) {
                return;
            }
            n(this, r, this.OPEN);
            let D = new Event("open");
            if ((g = s(this, m)) != null) {
                g.call(this, D);
            }
            this.dispatchEvent(D);
            if (typeof body !== "object" || !body || !("getReader" in body)) {
                c(this, l, C).call(this, "Invalid response body, expected a web ReadableStream", status);
                this.close();
                return;
            }
            let K = new TextDecoder;
            let Q = body.getReader();
            let G = true;
            do {
                let { done, value } = await Q.read();
                if (value) {
                    s(this, f).feed(K.decode(value, {
                        stream: !done
                    }));
                }
                if (done) {
                    G = false;
                    s(this, f).reset();
                    c(this, l, I).call(this);
                }
            }while (G)
        });
        a(this, R, (o)=>{
            n(this, d, undefined);
            if (!(o.name === "AbortError" || o.type === "aborted")) {
                c(this, l, I).call(this, T(o));
            }
        });
        a(this, S, (o)=>{
            if (typeof o.id === "string") {
                n(this, M, o.id);
            }
            let g = new MessageEvent(o.event || "message", {
                data: o.data,
                origin: s(this, v) ? s(this, v).origin : s(this, p).origin,
                lastEventId: o.id || ""
            });
            if (s(this, w) && (!o.event || o.event === "message")) {
                s(this, w).call(this, g);
            }
            this.dispatchEvent(g);
        });
        a(this, x, (o)=>{
            n(this, y, o);
        });
        a(this, U, ()=>{
            n(this, _, undefined);
            if (s(this, r) === this.CONNECTING) {
                c(this, l, L).call(this);
            }
        });
        try {
            if (t instanceof URL) {
                n(this, p, t);
            } else if (typeof t === "string") {
                n(this, p, new URL(t, X()));
            } else {
                throw Error("Invalid URL");
            }
        } catch  {
            throw V("An invalid or illegal string was specified");
        }
        n(this, f, rst({
            onEvent: s(this, S),
            onRetry: s(this, x)
        }));
        n(this, r, this.CONNECTING);
        n(this, y, 3000);
        n(this, W, e?.fetch ?? globalThis.fetch);
        n(this, k, e?.withCredentials ?? false);
        c(this, l, L).call(this);
    }
    get readyState() {
        return s(this, r);
    }
    get url() {
        return s(this, p).href;
    }
    get withCredentials() {
        return s(this, k);
    }
    get onerror() {
        return s(this, E);
    }
    set onerror(t) {
        n(this, E, t);
    }
    get onmessage() {
        return s(this, w);
    }
    set onmessage(t) {
        n(this, w, t);
    }
    get onopen() {
        return s(this, m);
    }
    set onopen(t) {
        n(this, m, t);
    }
    addEventListener(t, e, i) {
        let h = e;
        super.addEventListener(t, h, i);
    }
    removeEventListener(t, e, i) {
        let h = e;
        super.removeEventListener(t, h, i);
    }
    close() {
        if (s(this, _)) {
            clearTimeout(s(this, _));
        }
        if (s(this, r) !== this.CLOSED) {
            if (s(this, d)) {
                s(this, d).abort();
            }
            n(this, r, this.CLOSED);
            n(this, d, undefined);
        }
    }
}
r = new WeakMap;
p = new WeakMap;
v = new WeakMap;
k = new WeakMap;
W = new WeakMap;
y = new WeakMap;
_ = new WeakMap;
M = new WeakMap;
d = new WeakMap;
f = new WeakMap;
E = new WeakMap;
w = new WeakMap;
m = new WeakMap;
l = new WeakSet;
L = function() {
    n(this, r, this.CONNECTING);
    n(this, d, new AbortController);
    s(this, W)(s(this, p), c(this, l, B).call(this)).then(s(this, b)).catch(s(this, R));
};
b = new WeakMap;
R = new WeakMap;
B = function() {
    let e = {
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "text/event-stream",
            ...s(this, M) ? {
                "Last-Event-ID": s(this, M)
            } : undefined
        },
        cache: "no-store",
        signal: s(this, d)?.signal
    };
    if ("window" in globalThis) {
        e.credentials = this.withCredentials ? "include" : "same-origin";
    }
    return e;
};
S = new WeakMap;
x = new WeakMap;
C = function(t, e) {
    let i;
    if (s(this, r) !== this.CLOSED) {
        n(this, r, this.CLOSED);
    }
    let h = new O("error", {
        code: e,
        message: t
    });
    if ((i = s(this, E)) != null) {
        i.call(this, h);
    }
    this.dispatchEvent(h);
};
I = function(t, e) {
    let i;
    if (s(this, r) === this.CLOSED) {
        return;
    }
    n(this, r, this.CONNECTING);
    let h = new O("error", {
        code: e,
        message: t
    });
    if ((i = s(this, E)) != null) {
        i.call(this, h);
    }
    this.dispatchEvent(h);
    n(this, _, setTimeout(s(this, U), s(this, y)));
};
U = new WeakMap;
OWe.CONNECTING = 0;
OWe.OPEN = 1;
OWe.CLOSED = 2;
function X() {
    let t = "document" in globalThis ? globalThis.document : undefined;
    if (t && typeof t === "object" && "baseURI" in t && typeof t.baseURI === "string") {
        return t.baseURI;
    }
}
export { OWe };
