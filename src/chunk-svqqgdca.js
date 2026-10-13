import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
const R = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
const D = new Set;
const x = typeof process === "object" && !!process ? process : {};
const L = (e, i, s, n)=>{
    if (typeof x.emitWarning === "function") {
        x.emitWarning(e, i, s, n);
    } else {
        console.error(`[${s}] ${i}: ${e}`);
    }
};
let { AbortController, AbortSignal } = globalThis;
if (typeof AbortController === "undefined") {
    AbortSignal = class {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(n, r) {
            this._onabort.push(r);
        }
    };
    AbortController = class {
        constructor(){
            i();
        }
        signal = new AbortSignal;
        abort(n) {
            if (this.signal.aborted) {
                return;
            }
            this.signal.reason = n;
            this.signal.aborted = true;
            for (let r of this.signal._onabort){
                r(n);
            }
            this.signal.onabort?.(n);
        }
    };
    let e = x.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    let i = ()=>{
        if (!e) {
            return;
        }
        e = false;
        L("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", i);
    };
}
const I = (e)=>!D.has(e);
const N = Symbol("type");
const z = (e)=>e && e === Math.floor(e) && e > 0 && isFinite(e);
const k = (e)=>{
    if (!z(e)) {
        return null;
    }
    if (e <= 2 ** 8) {
        return Uint8Array;
    }
    if (e <= 2 ** 16) {
        return Uint16Array;
    }
    if (e <= 2 ** 32) {
        return Uint32Array;
    }
    if (e <= Number.MAX_SAFE_INTEGER) {
        return T;
    }
    return null;
};
class T extends Array {
    constructor(e){
        super(e);
        this.fill(0);
    }
}
class F {
    heap;
    length;
    static #l = false;
    static create(e) {
        let i = k(e);
        if (!i) {
            return [];
        }
        F.#l = true;
        let s = new F(e, i);
        F.#l = false;
        return s;
    }
    constructor(e, i){
        if (!F.#l) {
            throw TypeError("instantiate Stack using Stack.create(n)");
        }
        this.heap = new i(e);
        this.length = 0;
    }
    push(e) {
        this.heap[this.length++] = e;
    }
    pop() {
        return this.heap[--this.length];
    }
}
class Kc {
    #l;
    #c;
    #m;
    #p;
    #C;
    #x;
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #n;
    #w;
    #s;
    #i;
    #t;
    #a;
    #u;
    #o;
    #r;
    #S;
    #h;
    #y;
    #b;
    #d;
    #_;
    #F;
    #f;
    static unsafeExposeInternals(e) {
        return {
            starts: e.#b,
            ttls: e.#d,
            sizes: e.#y,
            keyMap: e.#s,
            keyList: e.#i,
            valList: e.#t,
            next: e.#a,
            prev: e.#u,
            get head () {
                return e.#o;
            },
            get tail () {
                return e.#r;
            },
            free: e.#S,
            isBackgroundFetch: (i)=>e.#e(i),
            backgroundFetch: (i, s, n, r)=>e.#D(i, s, n, r),
            moveToTail: (i)=>e.#O(i),
            indexes: (i)=>e.#A(i),
            rindexes: (i)=>e.#v(i),
            isStale: (i)=>e.#g(i)
        };
    }
    get max() {
        return this.#l;
    }
    get maxSize() {
        return this.#c;
    }
    get calculatedSize() {
        return this.#w;
    }
    get size() {
        return this.#n;
    }
    get fetchMethod() {
        return this.#C;
    }
    get memoMethod() {
        return this.#x;
    }
    get dispose() {
        return this.#m;
    }
    get disposeAfter() {
        return this.#p;
    }
    constructor(e){
        let { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = e;
        if (max !== 0 && !z(max)) {
            throw TypeError("max option must be a nonnegative integer");
        }
        let v = max ? k(max) : Array;
        if (!v) {
            throw Error(`invalid max value: ${max}`);
        }
        this.#l = max;
        this.#c = maxSize;
        this.maxEntrySize = maxEntrySize || this.#c;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#c && !this.maxEntrySize) {
                throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            }
            if (typeof this.sizeCalculation !== "function") {
                throw TypeError("sizeCalculation set to non-function");
            }
        }
        if (memoMethod !== undefined && typeof memoMethod !== "function") {
            throw TypeError("memoMethod must be a function if defined");
        }
        this.#x = memoMethod;
        if (fetchMethod !== undefined && typeof fetchMethod !== "function") {
            throw TypeError("fetchMethod must be a function if specified");
        }
        this.#C = fetchMethod;
        this.#F = !!fetchMethod;
        this.#s = new Map;
        this.#i = Array(max).fill(undefined);
        this.#t = Array(max).fill(undefined);
        this.#a = new v(max);
        this.#u = new v(max);
        this.#o = 0;
        this.#r = 0;
        this.#S = F.create(max);
        this.#n = 0;
        this.#w = 0;
        if (typeof dispose === "function") {
            this.#m = dispose;
        }
        if (typeof disposeAfter === "function") {
            this.#p = disposeAfter;
            this.#h = [];
        } else {
            this.#p = undefined;
            this.#h = undefined;
        }
        this.#_ = !!this.#m;
        this.#f = !!this.#p;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
            if (this.#c !== 0) {
                if (!z(this.#c)) {
                    throw TypeError("maxSize must be a positive integer if specified");
                }
            }
            if (!z(this.maxEntrySize)) {
                throw TypeError("maxEntrySize must be a positive integer if specified");
            }
            this.#N();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = z(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!z(this.ttl)) {
                throw TypeError("ttl must be a positive integer if specified");
            }
            this.#L();
        }
        if (this.#l === 0 && this.ttl === 0 && this.#c === 0) {
            throw TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#l && !this.#c) {
            if (I("LRU_CACHE_UNBOUNDED")) {
                D.add("LRU_CACHE_UNBOUNDED");
                L("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", Kc);
            }
        }
    }
    getRemainingTTL(e) {
        if (this.#s.has(e)) {
            return Infinity;
        }
        return 0;
    }
    #L() {
        let e = new T(this.#l);
        let i = new T(this.#l);
        this.#d = e;
        this.#b = i;
        this.#k = (r, h, l = R.now())=>{
            i[r] = h !== 0 ? l : 0;
            e[r] = h;
            if (h !== 0 && this.ttlAutopurge) {
                let o = setTimeout(()=>{
                    if (this.#g(r)) {
                        this.#z(this.#i[r], "expire");
                    }
                }, h + 1);
                if (o.unref) {
                    o.unref();
                }
            }
        };
        this.#E = (r)=>{
            i[r] = e[r] !== 0 ? R.now() : 0;
        };
        this.#R = (r, h)=>{
            if (e[h]) {
                let l = e[h];
                let o = i[h];
                if (!l || !o) {
                    return;
                }
                r.ttl = l;
                r.start = o;
                r.now = s || n();
                let a = r.now - o;
                r.remainingTTL = l - a;
            }
        };
        let s = 0;
        let n = ()=>{
            let r = R.now();
            if (this.ttlResolution > 0) {
                s = r;
                let h = setTimeout(()=>s = 0, this.ttlResolution);
                if (h.unref) {
                    h.unref();
                }
            }
            return r;
        };
        this.getRemainingTTL = (r)=>{
            let h = this.#s.get(r);
            if (h === undefined) {
                return 0;
            }
            let l = e[h];
            let o = i[h];
            if (!l || !o) {
                return Infinity;
            }
            let a = (s || n()) - o;
            return l - a;
        };
        this.#g = (r)=>{
            let h = i[r];
            let l = e[r];
            return !!l && !!h && (s || n()) - h > l;
        };
    }
    #E = ()=>{};
    #R = ()=>{};
    #k = ()=>{};
    #g = ()=>false;
    #N() {
        let e = new T(this.#l);
        this.#w = 0;
        this.#y = e;
        this.#T = (i)=>{
            this.#w -= e[i];
            e[i] = 0;
        };
        this.#P = (i, s, n, r)=>{
            if (this.#e(s)) {
                return 0;
            }
            if (!z(n)) {
                if (r) {
                    if (typeof r !== "function") {
                        throw TypeError("sizeCalculation must be a function");
                    }
                    n = r(s, i);
                    if (!z(n)) {
                        throw TypeError("sizeCalculation return invalid (expect positive integer)");
                    }
                } else {
                    throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                }
            }
            return n;
        };
        this.#W = (i, s, n)=>{
            e[i] = s;
            if (this.#c) {
                let r = this.#c - e[i];
                while(this.#w > r){
                    this.#M(true);
                }
            }
            this.#w += e[i];
            if (n) {
                n.entrySize = s;
                n.totalCalculatedSize = this.#w;
            }
        };
    }
    #T = (e)=>{};
    #W = (e, i, s)=>{};
    #P = (e, i, s, n)=>{
        if (s || n) {
            throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        }
        return 0;
    };
    *#A({ allowStale = this.allowStale } = {}) {
        if (this.#n) {
            for(let i = this.#r;;){
                if (!this.#U(i)) {
                    break;
                }
                if (allowStale || !this.#g(i)) {
                    yield i;
                }
                if (i === this.#o) {
                    break;
                } else {
                    i = this.#u[i];
                }
            }
        }
    }
    *#v({ allowStale = this.allowStale } = {}) {
        if (this.#n) {
            for(let i = this.#o;;){
                if (!this.#U(i)) {
                    break;
                }
                if (allowStale || !this.#g(i)) {
                    yield i;
                }
                if (i === this.#r) {
                    break;
                } else {
                    i = this.#a[i];
                }
            }
        }
    }
    #U(e) {
        return e !== undefined && this.#s.get(this.#i[e]) === e;
    }
    *entries() {
        for (let e of this.#A()){
            if (this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e])) {
                yield [
                    this.#i[e],
                    this.#t[e]
                ];
            }
        }
    }
    *rentries() {
        for (let e of this.#v()){
            if (this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e])) {
                yield [
                    this.#i[e],
                    this.#t[e]
                ];
            }
        }
    }
    *keys() {
        for (let e of this.#A()){
            let i = this.#i[e];
            if (i !== undefined && !this.#e(this.#t[e])) {
                yield i;
            }
        }
    }
    *rkeys() {
        for (let e of this.#v()){
            let i = this.#i[e];
            if (i !== undefined && !this.#e(this.#t[e])) {
                yield i;
            }
        }
    }
    *values() {
        for (let e of this.#A()){
            if (this.#t[e] !== undefined && !this.#e(this.#t[e])) {
                yield this.#t[e];
            }
        }
    }
    *rvalues() {
        for (let e of this.#v()){
            if (this.#t[e] !== undefined && !this.#e(this.#t[e])) {
                yield this.#t[e];
            }
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(e, i = {}) {
        for (let s of this.#A()){
            let n = this.#t[s];
            let r = this.#e(n) ? n.__staleWhileFetching : n;
            if (r === undefined) {
                continue;
            }
            if (e(r, this.#i[s], this)) {
                return this.get(this.#i[s], i);
            }
        }
    }
    forEach(e, i = this) {
        for (let s of this.#A()){
            let n = this.#t[s];
            let r = this.#e(n) ? n.__staleWhileFetching : n;
            if (r === undefined) {
                continue;
            }
            e.call(i, r, this.#i[s], this);
        }
    }
    rforEach(e, i = this) {
        for (let s of this.#v()){
            let n = this.#t[s];
            let r = this.#e(n) ? n.__staleWhileFetching : n;
            if (r === undefined) {
                continue;
            }
            e.call(i, r, this.#i[s], this);
        }
    }
    purgeStale() {
        let e = false;
        for (let i of this.#v({
            allowStale: true
        })){
            if (this.#g(i)) {
                this.#z(this.#i[i], "expire");
                e = true;
            }
        }
        return e;
    }
    info(e) {
        let i = this.#s.get(e);
        if (i === undefined) {
            return;
        }
        let s = this.#t[i];
        let n = this.#e(s) ? s.__staleWhileFetching : s;
        if (n === undefined) {
            return;
        }
        let r = {
            value: n
        };
        if (this.#d && this.#b) {
            let h = this.#d[i];
            let l = this.#b[i];
            if (h && l) {
                let o = h - (R.now() - l);
                r.ttl = o;
                r.start = Date.now();
            }
        }
        if (this.#y) {
            r.size = this.#y[i];
        }
        return r;
    }
    dump() {
        let e = [];
        for (let i of this.#A({
            allowStale: true
        })){
            let s = this.#i[i];
            let n = this.#t[i];
            let r = this.#e(n) ? n.__staleWhileFetching : n;
            if (r === undefined || s === undefined) {
                continue;
            }
            let h = {
                value: r
            };
            if (this.#d && this.#b) {
                h.ttl = this.#d[i];
                let l = R.now() - this.#b[i];
                h.start = Math.floor(Date.now() - l);
            }
            if (this.#y) {
                h.size = this.#y[i];
            }
            e.unshift([
                s,
                h
            ]);
        }
        return e;
    }
    load(e) {
        this.clear();
        for (let [i, s] of e){
            if (s.start) {
                let n = Date.now() - s.start;
                s.start = R.now() - n;
            }
            this.set(i, s.value, s);
        }
    }
    set(e, i, s = {}) {
        if (i === undefined) {
            this.delete(e);
            return this;
        }
        let { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = s;
        let { noUpdateTTL = this.noUpdateTTL } = s;
        let f = this.#P(e, i, s.size || 0, sizeCalculation);
        if (this.maxEntrySize && f > this.maxEntrySize) {
            if (status) {
                status.set = "miss";
                status.maxEntrySizeExceeded = true;
            }
            this.#z(e, "set");
            return this;
        }
        let d = this.#n === 0 ? undefined : this.#s.get(e);
        if (d === undefined) {
            d = this.#n === 0 ? this.#r : this.#S.length !== 0 ? this.#S.pop() : this.#n === this.#l ? this.#M(false) : this.#n;
            this.#i[d] = e;
            this.#t[d] = i;
            this.#s.set(e, d);
            this.#a[this.#r] = d;
            this.#u[d] = this.#r;
            this.#r = d;
            this.#n++;
            this.#W(d, f, status);
            if (status) {
                status.set = "add";
            }
            noUpdateTTL = false;
        } else {
            this.#O(d);
            let g = this.#t[d];
            if (i !== g) {
                if (this.#F && this.#e(g)) {
                    g.__abortController.abort(Error("replaced"));
                    let { __staleWhileFetching } = g;
                    if (__staleWhileFetching !== undefined && !noDisposeOnSet) {
                        if (this.#_) {
                            this.#m?.(__staleWhileFetching, e, "set");
                        }
                        if (this.#f) {
                            this.#h?.push([
                                __staleWhileFetching,
                                e,
                                "set"
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (this.#_) {
                        this.#m?.(g, e, "set");
                    }
                    if (this.#f) {
                        this.#h?.push([
                            g,
                            e,
                            "set"
                        ]);
                    }
                }
                this.#T(d);
                this.#W(d, f, status);
                this.#t[d] = i;
                if (status) {
                    status.set = "replace";
                    let u = g && this.#e(g) ? g.__staleWhileFetching : g;
                    if (u !== undefined) {
                        status.oldValue = u;
                    }
                }
            } else if (status) {
                status.set = "update";
            }
        }
        if (ttl !== 0 && !this.#d) {
            this.#L();
        }
        if (this.#d) {
            if (!noUpdateTTL) {
                this.#k(d, ttl, start);
            }
            if (status) {
                this.#R(status, d);
            }
        }
        if (!noDisposeOnSet && this.#f && this.#h) {
            let g = this.#h;
            let u;
            while(u = g?.shift()){
                this.#p?.(...u);
            }
        }
        return this;
    }
    pop() {
        try {
            while(this.#n){
                let e = this.#t[this.#o];
                this.#M(true);
                if (this.#e(e)) {
                    if (e.__staleWhileFetching) {
                        return e.__staleWhileFetching;
                    }
                } else if (e !== undefined) {
                    return e;
                }
            }
        } finally{
            if (this.#f && this.#h) {
                let e = this.#h;
                let i;
                while(i = e?.shift()){
                    this.#p?.(...i);
                }
            }
        }
    }
    #M(e) {
        let i = this.#o;
        let s = this.#i[i];
        let n = this.#t[i];
        if (this.#F && this.#e(n)) {
            n.__abortController.abort(Error("evicted"));
        } else if (this.#_ || this.#f) {
            if (this.#_) {
                this.#m?.(n, s, "evict");
            }
            if (this.#f) {
                this.#h?.push([
                    n,
                    s,
                    "evict"
                ]);
            }
        }
        this.#T(i);
        if (e) {
            this.#i[i] = undefined;
            this.#t[i] = undefined;
            this.#S.push(i);
        }
        if (this.#n === 1) {
            this.#o = this.#r = 0;
            this.#S.length = 0;
        } else {
            this.#o = this.#a[i];
        }
        this.#s.delete(s);
        this.#n--;
        return i;
    }
    has(e, { updateAgeOnHas = this.updateAgeOnHas, status } = {}) {
        let r = this.#s.get(e);
        if (r !== undefined) {
            let h = this.#t[r];
            if (this.#e(h) && h.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#g(r)) {
                if (updateAgeOnHas) {
                    this.#E(r);
                }
                if (status) {
                    status.has = "hit";
                    this.#R(status, r);
                }
                return true;
            } else if (status) {
                status.has = "stale";
                this.#R(status, r);
            }
        } else if (status) {
            status.has = "miss";
        }
        return false;
    }
    peek(e, { allowStale = this.allowStale } = {}) {
        let n = this.#s.get(e);
        if (n === undefined || !allowStale && this.#g(n)) {
            return;
        }
        let r = this.#t[n];
        if (this.#e(r)) {
            return r.__staleWhileFetching;
        }
        return r;
    }
    #D(e, i, options, context) {
        let __staleWhileFetching = i === undefined ? undefined : this.#t[i];
        if (this.#e(__staleWhileFetching)) {
            return __staleWhileFetching;
        }
        let __abortController = new AbortController;
        let { signal } = options;
        signal?.addEventListener("abort", ()=>__abortController.abort(signal.reason), {
            signal: __abortController.signal
        });
        let o = {
            signal: __abortController.signal,
            options,
            context
        };
        let a = (m, y = false)=>{
            let { aborted } = __abortController.signal;
            let S = options.ignoreFetchAbort && m !== undefined;
            if (options.status) {
                if (aborted && !y) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = __abortController.signal.reason;
                    if (S) {
                        options.status.fetchAbortIgnored = true;
                    }
                } else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !S && !y) {
                return d(__abortController.signal.reason);
            }
            let A = u;
            if (this.#t[i] === u) {
                if (m === undefined) {
                    if (A.__staleWhileFetching) {
                        this.#t[i] = A.__staleWhileFetching;
                    } else {
                        this.#z(e, "fetch");
                    }
                } else {
                    if (options.status) {
                        options.status.fetchUpdated = true;
                    }
                    this.set(e, m, o.options);
                }
            }
            return m;
        };
        let f = (m)=>{
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = m;
            }
            return d(m);
        };
        let d = (m)=>{
            let { aborted } = __abortController.signal;
            let c = aborted && options.allowStaleOnFetchAbort;
            let S = c || options.allowStaleOnFetchRejection;
            let A = S || options.noDeleteOnFetchRejection;
            let p = u;
            if (this.#t[i] === u) {
                if (!A || p.__staleWhileFetching === undefined) {
                    this.#z(e, "fetch");
                } else if (!c) {
                    this.#t[i] = p.__staleWhileFetching;
                }
            }
            if (S) {
                if (options.status && p.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return p.__staleWhileFetching;
            } else if (p.__returned === p) {
                throw m;
            }
        };
        let g = (m, y)=>{
            let c = this.#C?.(e, __staleWhileFetching, o);
            if (c && c instanceof Promise) {
                c.then((S)=>m(S === undefined ? undefined : S), y);
            }
            __abortController.signal.addEventListener("abort", ()=>{
                if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
                    m(undefined);
                    if (options.allowStaleOnFetchAbort) {
                        m = (S)=>a(S, true);
                    }
                }
            });
        };
        if (options.status) {
            options.status.fetchDispatched = true;
        }
        let u = new Promise(g).then(a, f);
        let w = Object.assign(u, {
            __abortController,
            __staleWhileFetching,
            __returned: undefined
        });
        if (i === undefined) {
            this.set(e, w, {
                ...o.options,
                status: undefined
            });
            i = this.#s.get(e);
        } else {
            this.#t[i] = w;
        }
        return w;
    }
    #e(e) {
        if (!this.#F) {
            return false;
        }
        let i = e;
        return !!i && i instanceof Promise && i.hasOwnProperty("__staleWhileFetching") && i.__abortController instanceof AbortController;
    }
    async fetch(e, { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = {}) {
        if (!this.#F) {
            if (status) {
                status.fetch = "get";
            }
            return this.get(e, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        let A = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let p = this.#s.get(e);
        if (p === undefined) {
            if (status) {
                status.fetch = "miss";
            }
            let b = this.#D(e, p, A, context);
            return b.__returned = b;
        } else {
            let b = this.#t[p];
            if (this.#e(b)) {
                let W = allowStale && b.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = "inflight";
                    if (W) {
                        status.returnedStale = true;
                    }
                }
                if (W) {
                    return b.__staleWhileFetching;
                }
                return b.__returned = b;
            }
            let E = this.#g(p);
            if (!forceRefresh && !E) {
                if (status) {
                    status.fetch = "hit";
                }
                this.#O(p);
                if (updateAgeOnGet) {
                    this.#E(p);
                }
                if (status) {
                    this.#R(status, p);
                }
                return b;
            }
            let v = this.#D(e, p, A, context);
            let C = v.__staleWhileFetching !== undefined && allowStale;
            if (status) {
                status.fetch = E ? "stale" : "refresh";
                if (C && E) {
                    status.returnedStale = true;
                }
            }
            if (C) {
                return v.__staleWhileFetching;
            }
            return v.__returned = v;
        }
    }
    async forceFetch(e, i = {}) {
        let s = await this.fetch(e, i);
        if (s === undefined) {
            throw Error("fetch() returned undefined");
        }
        return s;
    }
    memo(e, i = {}) {
        let s = this.#x;
        if (!s) {
            throw Error("no memoMethod provided to constructor");
        }
        let { context, forceRefresh, ...rest } = i;
        let l = this.get(e, rest);
        if (!forceRefresh && l !== undefined) {
            return l;
        }
        let o = s(e, l, {
            options: rest,
            context
        });
        this.set(e, o, rest);
        return o;
    }
    get(e, { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = {}) {
        let l = this.#s.get(e);
        if (l !== undefined) {
            let o = this.#t[l];
            let a = this.#e(o);
            if (status) {
                this.#R(status, l);
            }
            if (this.#g(l)) {
                if (status) {
                    status.get = "stale";
                }
                if (!a) {
                    if (!noDeleteOnStaleGet) {
                        this.#z(e, "expire");
                    }
                    if (status && allowStale) {
                        status.returnedStale = true;
                    }
                    if (allowStale) {
                        return o;
                    }
                    return undefined;
                } else {
                    if (status && allowStale && o.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    if (allowStale) {
                        return o.__staleWhileFetching;
                    }
                    return undefined;
                }
            } else {
                if (status) {
                    status.get = "hit";
                }
                if (a) {
                    return o.__staleWhileFetching;
                }
                this.#O(l);
                if (updateAgeOnGet) {
                    this.#E(l);
                }
                return o;
            }
        } else if (status) {
            status.get = "miss";
        }
    }
    #I(e, i) {
        this.#u[i] = e;
        this.#a[e] = i;
    }
    #O(e) {
        if (e !== this.#r) {
            if (e === this.#o) {
                this.#o = this.#a[e];
            } else {
                this.#I(this.#u[e], this.#a[e]);
            }
            this.#I(this.#r, e);
            this.#r = e;
        }
    }
    delete(e) {
        return this.#z(e, "delete");
    }
    #z(e, i) {
        let s = false;
        if (this.#n !== 0) {
            let n = this.#s.get(e);
            if (n !== undefined) {
                s = true;
                if (this.#n === 1) {
                    this.#G(i);
                } else {
                    this.#T(n);
                    let r = this.#t[n];
                    if (this.#e(r)) {
                        r.__abortController.abort(Error("deleted"));
                    } else if (this.#_ || this.#f) {
                        if (this.#_) {
                            this.#m?.(r, e, i);
                        }
                        if (this.#f) {
                            this.#h?.push([
                                r,
                                e,
                                i
                            ]);
                        }
                    }
                    this.#s.delete(e);
                    this.#i[n] = undefined;
                    this.#t[n] = undefined;
                    if (n === this.#r) {
                        this.#r = this.#u[n];
                    } else if (n === this.#o) {
                        this.#o = this.#a[n];
                    } else {
                        let h = this.#u[n];
                        this.#a[h] = this.#a[n];
                        let l = this.#a[n];
                        this.#u[l] = this.#u[n];
                    }
                    this.#n--;
                    this.#S.push(n);
                }
            }
        }
        if (this.#f && this.#h?.length) {
            let n = this.#h;
            let r;
            while(r = n?.shift()){
                this.#p?.(...r);
            }
        }
        return s;
    }
    clear() {
        return this.#G("delete");
    }
    #G(e) {
        for (let i of this.#v({
            allowStale: true
        })){
            let s = this.#t[i];
            if (this.#e(s)) {
                s.__abortController.abort(Error("deleted"));
            } else {
                let n = this.#i[i];
                if (this.#_) {
                    this.#m?.(s, n, e);
                }
                if (this.#f) {
                    this.#h?.push([
                        s,
                        n,
                        e
                    ]);
                }
            }
        }
        this.#s.clear();
        this.#t.fill(undefined);
        this.#i.fill(undefined);
        if (this.#d && this.#b) {
            this.#d.fill(0);
            this.#b.fill(0);
        }
        if (this.#y) {
            this.#y.fill(0);
        }
        this.#o = 0;
        this.#r = 0;
        this.#S.length = 0;
        this.#w = 0;
        this.#n = 0;
        if (this.#f && this.#h) {
            let i = this.#h;
            let s;
            while(s = i?.shift()){
                this.#p?.(...s);
            }
        }
    }
}
function AZ(e, i = 300000, s) {
    let n = (o)=>{
        if (typeof i === "function") {
            return i(o);
        }
        return i;
    };
    let r = new Map;
    let h = new Map;
    let l = async (...o)=>{
        let a = _(o);
        let f = r.get(a);
        if (f && s && !s(f.value, f.timestamp)) {
            if (f.refreshPromise) {
                return f.refreshPromise;
            }
            r.delete(a);
            f = undefined;
        }
        let d = Date.now();
        if (!f) {
            let g = h.get(a);
            if (g) {
                return g;
            }
            let u = e(...o);
            h.set(a, u);
            try {
                let w = await u;
                if (h.get(a) === u) {
                    r.set(a, {
                        value: w,
                        timestamp: Date.now(),
                        refreshing: false,
                        lifetimeMs: n(w)
                    });
                }
                return w;
            } finally{
                if (h.get(a) === u) {
                    h.delete(a);
                }
            }
        }
        if (f && d - f.timestamp > f.lifetimeMs && !f.refreshing) {
            f.refreshing = true;
            let g = f;
            let u = e(...o);
            g.refreshPromise = u;
            u.then((w)=>{
                if (r.get(a) === g) {
                    r.set(a, {
                        value: w,
                        timestamp: Date.now(),
                        refreshing: false,
                        lifetimeMs: n(w)
                    });
                }
            }).catch((w)=>{
                t(String(w), {
                    level: "error"
                });
                if (r.get(a) === g) {
                    r.delete(a);
                }
            });
            return f.value;
        }
        return r.get(a).value;
    };
    l.cache = {
        clear: ()=>{
            r.clear();
            h.clear();
        }
    };
    return l;
}
function MO(e, i, max = 100) {
    let n = new Kc({
        max
    });
    let r = (...h)=>{
        let l = i(...h);
        let o = n.get(l);
        if (o !== undefined) {
            return o;
        }
        let a = e(...h);
        n.set(l, a);
        return a;
    };
    r.cache = {
        clear: ()=>n.clear(),
        size: ()=>n.size,
        delete: (h)=>n.delete(h),
        get: (h)=>n.peek(h),
        has: (h)=>n.has(h),
        set: (h, l)=>void n.set(h, l)
    };
    return r;
}
const P = new Set;
function Yz(e) {
    P.add(e);
    return e;
}
function Yut(e, i) {
    let s = [];
    for (let n of i){
        let r = e.get(n);
        if (r !== undefined) {
            s.push([
                n,
                r
            ]);
        }
    }
    e.clear();
    for (let [n, r] of s){
        e.set(n, r);
    }
}
const G = 128;
function a8e(e, i, s) {
    let n = s?.maxSize ?? G;
    let r = new Map;
    P.add(r);
    function h(...l) {
        let o = i ? i(...l) : l[0];
        let a = r.get(o);
        if (a) {
            return a;
        }
        let f = e(...l);
        if (r.size >= n) {
            r.delete(r.keys().next().value);
        }
        r.set(o, f);
        f.catch(()=>{
            if (r.get(o) === f) {
                r.delete(o);
            }
        });
        return f;
    }
    h.cache = r;
    return h;
}
export { Kc, AZ, MO, Yz, Yut, a8e };
