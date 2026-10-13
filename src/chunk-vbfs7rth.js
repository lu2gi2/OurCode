import { createRequire } from "module";
const Hr = createRequire("/");
let Lr;
try {
    Lr = Hr("worker_threads").Worker;
} catch (n) {}
const cr = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]);
const pr = new Uint8Array([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]);
const zr = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
const Dr = (n, r)=>{
    const b_3 = new Uint16Array(31);
    for(var e = 0; e < 31; ++e){
        b_3[e] = r += 1 << n[e - 1];
    }
    const a = new Int32Array(b_3[30]);
    for(var e = 1; e < 30; ++e){
        for(let i = b_3[e]; i < b_3[e + 1]; ++i){
            a[i] = i - b_3[e] << 5 | e;
        }
    }
    return {
        b: b_3,
        r: a
    };
};
const Tr = Dr(cr, 2);
const { b: b_1, r: r_1 } = Tr;
b_1[28] = 258;
r_1[258] = 28;
const Ur = Dr(pr, 0);
const { b: b_2, r: r_2 } = Ur;
const ur = new Uint16Array(32768);
for(v = 0; v < 32768; ++v){
    W = (v & 43690) >> 1 | (v & 21845) << 1;
    W = (W & 52428) >> 2 | (W & 13107) << 2;
    W = (W & 61680) >> 4 | (W & 3855) << 4;
    ur[v] = ((W & 65280) >> 8 | (W & 255) << 8) >> 1;
}
var W;
var v;
const rr = (n, r, t)=>{
    const n_length = n.length;
    let a = 0;
    const i = new Uint16Array(r);
    for(; a < n_length; ++a){
        if (n[a]) {
            ++i[n[a] - 1];
        }
    }
    const o = new Uint16Array(r);
    for(a = 1; a < r; ++a){
        o[a] = o[a - 1] + i[a - 1] << 1;
    }
    let f;
    if (t) {
        f = new Uint16Array(1 << r);
        const l = 15 - r;
        for(a = 0; a < n_length; ++a){
            if (n[a]) {
                const h = a << 4 | n[a];
                const s = r - n[a];
                let u = o[n[a] - 1]++ << s;
                for(const p = u | (1 << s) - 1; u <= p; ++u){
                    f[ur[u] >> l] = h;
                }
            }
        }
    } else {
        f = new Uint16Array(n_length);
        for(a = 0; a < n_length; ++a){
            if (n[a]) {
                f[a] = ur[o[n[a] - 1]++] >> 15 - n[a];
            }
        }
    }
    return f;
};
const J = new Uint8Array(288);
for(v = 0; v < 144; ++v){
    J[v] = 8;
}
var v;
for(v = 144; v < 256; ++v){
    J[v] = 9;
}
var v;
for(v = 256; v < 280; ++v){
    J[v] = 7;
}
var v;
for(v = 280; v < 288; ++v){
    J[v] = 8;
}
var v;
const nr = new Uint8Array(32);
for(v = 0; v < 32; ++v){
    nr[v] = 5;
}
var v;
const Rr = rr(J, 9, 0);
const Yr = rr(nr, 5, 0);
const Ir = (n)=>(n + 7) / 8 | 0;
const Zr = (n, r, t)=>{
    if (r == null || r < 0) {
        r = 0;
    }
    if (t == null || t > n.length) {
        t = n.length;
    }
    return new Uint8Array(n.subarray(r, t));
};
const Jr = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
];
const G = function(n, r, t) {
    const e = Error(r || Jr[n]);
    e.code = n;
    if (Error.captureStackTrace) {
        Error.captureStackTrace(e, G);
    }
    if (!t) {
        throw e;
    }
    return e;
};
const R = (n, r, t)=>{
    t <<= r & 7;
    const e = r / 8 | 0;
    n[e] |= t;
    n[e + 1] |= t >> 8;
};
var b = (n, r, t)=>{
    t <<= r & 7;
    const e = r / 8 | 0;
    n[e] |= t;
    n[e + 1] |= t >> 8;
    n[e + 2] |= t >> 16;
};
const fr = (n, r)=>{
    const t = [];
    for(var s_1 = 0; s_1 < n.length; ++s_1){
        if (n[s_1]) {
            t.push({
                s: s_1,
                f: n[s_1]
            });
        }
    }
    const t_length = t.length;
    const i = t.slice();
    if (!t_length) {
        return {
            t: Er,
            l: 0
        };
    }
    if (t_length == 1) {
        const o = new Uint8Array(t[0].s + 1);
        o[t[0].s] = 1;
        return {
            t: o,
            l: 1
        };
    }
    t.sort((I, Z)=>I.f - Z.f);
    t.push({
        s: -1,
        f: 25001
    });
    let f = t[0];
    let l = t[1];
    let h = 0;
    let s = 1;
    let u = 2;
    t[0] = {
        s: -1,
        f: f.f + l.f,
        l: f,
        r: l
    };
    while(s != t_length - 1){
        f = t[t[h].f < t[u].f ? h++ : u++];
        l = t[h != s && t[h].f < t[u].f ? h++ : u++];
        t[s++] = {
            s: -1,
            f: f.f + l.f,
            l: f,
            r: l
        };
    }
    let p = i[0].s;
    for(var s_1 = 1; s_1 < t_length; ++s_1){
        if (i[s_1].s > p) {
            p = i[s_1].s;
        }
    }
    const m = new Uint16Array(p + 1);
    let w = lr(t[s - 1], m, 0);
    if (w > r) {
        var s_1 = 0;
        let y = 0;
        const x = w - r;
        const S = 1 << x;
        i.sort((Z, M)=>m[M.s] - m[Z.s] || Z.f - M.f);
        for(; s_1 < t_length; ++s_1){
            const F = i[s_1].s;
            if (m[F] > r) {
                y += S - (1 << w - m[F]);
                m[F] = r;
            } else {
                break;
            }
        }
        y >>= x;
        while(y > 0){
            const T = i[s_1].s;
            if (m[T] < r) {
                y -= 1 << r - m[T]++ - 1;
            } else {
                ++s_1;
            }
        }
        for(; s_1 >= 0 && y; --s_1){
            const C = i[s_1].s;
            if (m[C] == r) {
                --m[C];
                ++y;
            }
        }
        w = r;
    }
    return {
        t: new Uint8Array(m),
        l: w
    };
};
var lr = (n, r, t)=>{
    if (n.s == -1) {
        return Math.max(lr(n.l, r, t + 1), lr(n.r, r, t + 1));
    }
    return r[n.s] = t;
};
const Mr = (n)=>{
    let n_length = n.length;
    while(n_length && !n[--n_length]);
    const t = new Uint16Array(++n_length);
    let e = 0;
    let a = n[0];
    let i = 1;
    const o = (l)=>{
        t[e++] = l;
    };
    for(let f = 1; f <= n_length; ++f){
        if (n[f] == a && f != n_length) {
            ++i;
        } else {
            if (!a && i > 2) {
                for(; i > 138; i -= 138){
                    o(32754);
                }
                if (i > 2) {
                    o(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305);
                    i = 0;
                }
            } else if (i > 3) {
                o(a);
                --i;
                for(; i > 6; i -= 6){
                    o(8304);
                }
                if (i > 2) {
                    o(i - 3 << 5 | 8208);
                    i = 0;
                }
            }
            while(i--){
                o(a);
            }
            i = 1;
            a = n[f];
        }
    }
    return {
        c: t.subarray(0, e),
        n: n_length
    };
};
const _ = (n, r)=>{
    let t = 0;
    for(let e = 0; e < r.length; ++e){
        t += n[e] * r[e];
    }
    return t;
};
const Br = (n, r, t)=>{
    const t_length = t.length;
    const a = Ir(r + 2);
    n[a] = t_length & 255;
    n[a + 1] = t_length >> 8;
    n[a + 2] = n[a] ^ 255;
    n[a + 3] = n[a + 1] ^ 255;
    for(let i = 0; i < t_length; ++i){
        n[a + i + 4] = t[i];
    }
    return (a + 4 + t_length) * 8;
};
const Sr = (n, r, t, e, a, i, o, f, l, h, s)=>{
    R(r, s++, t);
    ++a[256];
    const u = fr(a, 15);
    const { t: t_1, l: l_1 } = u;
    const w = fr(i, 15);
    const { t: t_2, l: l_2 } = w;
    const S = Mr(t_1);
    const { c: c_1, n: n_1 } = S;
    const C = Mr(t_2);
    const { c: c_2, n: n_2 } = C;
    const M = new Uint16Array(19);
    for(var g = 0; g < c_1.length; ++g){
        ++M[c_1[g] & 31];
    }
    for(var g = 0; g < c_2.length; ++g){
        ++M[c_2[g] & 31];
    }
    const c = fr(M, 7);
    const { t: t_3, l: l_3 } = c;
    let E = 19;
    for(; E > 4 && !t_3[zr[E - 1]]; --E);
    const Q = h + 5 << 3;
    const O = _(a, J) + _(i, nr) + o;
    const P = _(a, t_1) + _(i, t_2) + o + 14 + 3 * E + _(M, t_3) + 2 * M[16] + 3 * M[17] + 7 * M[18];
    if (l >= 0 && Q <= O && Q <= P) {
        return Br(r, s, n.subarray(l, l + h));
    }
    let k;
    let D;
    let N;
    let Y;
    R(r, s, 1 + (P < O));
    s += 2;
    if (P < O) {
        k = rr(t_1, l_1, 0);
        D = t_1;
        N = rr(t_2, l_2, 0);
        Y = t_2;
        const ir = rr(t_3, l_3, 0);
        R(r, s, n_1 - 257);
        R(r, s + 5, n_2 - 1);
        R(r, s + 10, E - 4);
        s += 14;
        for(var g = 0; g < E; ++g){
            R(r, s + 3 * g, t_3[zr[g]]);
        }
        s += 3 * E;
        const H = [
            c_1,
            c_2
        ];
        for(let j = 0; j < 2; ++j){
            const V = H[j];
            for(var g = 0; g < V.length; ++g){
                var L = V[g] & 31;
                R(r, s, ir[L]);
                s += t_3[L];
                if (L > 15) {
                    R(r, s, V[g] >> 5 & 127);
                    s += V[g] >> 12;
                }
            }
        }
    } else {
        k = Rr;
        D = J;
        N = Yr;
        Y = nr;
    }
    for(var g = 0; g < f; ++g){
        const U = e[g];
        if (U > 255) {
            var L = U >> 18 & 31;
            b(r, s, k[L + 257]);
            s += D[L + 257];
            if (L > 7) {
                R(r, s, U >> 23 & 31);
                s += cr[L];
            }
            const X = U & 31;
            b(r, s, N[X]);
            s += Y[X];
            if (X > 3) {
                b(r, s, U >> 5 & 8191);
                s += pr[X];
            }
        } else {
            b(r, s, k[U]);
            s += D[U];
        }
    }
    b(r, s, k[256]);
    return s + D[256];
};
const Kr = new Int32Array([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
var Er = new Uint8Array(0);
const Qr = (n, r, t, e, a, i)=>{
    const o = i.z || n.length;
    const f = new Uint8Array(e + o + 5 * (1 + Math.ceil(o / 7000)) + a);
    const l = f.subarray(e, f.length - a);
    const h = i.l;
    let s = (i.r || 0) & 7;
    if (r) {
        if (s) {
            l[0] = i.r >> 3;
        }
        const u = Kr[r - 1];
        const p = u >> 13;
        const m = u & 8191;
        const w = (1 << t) - 1;
        const y = i.p || new Uint16Array(32768);
        const x = i.h || new Uint16Array(w + 1);
        const S = Math.ceil(t / 3);
        const F = 2 * S;
        const T = (sr)=>(n[sr] ^ n[sr + 1] << S ^ n[sr + 2] << F) & w;
        const C = new Int32Array(25000);
        const I = new Uint16Array(288);
        const Z = new Uint16Array(32);
        let M = 0;
        let g = 0;
        var c = i.i || 0;
        let B = 0;
        let K = i.w || 0;
        let E = 0;
        for(; c + 2 < o; ++c){
            const Q = T(c);
            let O = c & 32767;
            let P = x[Q];
            y[O] = P;
            x[Q] = O;
            if (K <= c) {
                const k = o - c;
                if ((M > 7000 || B > 24576) && (k > 423 || !h)) {
                    s = Sr(n, l, 0, C, I, Z, g, B, E, c - E, s);
                    g = 0;
                    M = 0;
                    B = 0;
                    E = c;
                    for(var D = 0; D < 286; ++D){
                        I[D] = 0;
                    }
                    for(var D = 0; D < 30; ++D){
                        Z[D] = 0;
                    }
                }
                let N = 2;
                let Y = 0;
                let ir = m;
                let H = O - P & 32767;
                if (k > 2 && Q == T(c - H)) {
                    const j = Math.min(p, k) - 1;
                    const V = Math.min(32767, c);
                    const L = Math.min(258, k);
                    while(H <= V && --ir && O != P){
                        if (n[c + N] == n[c + N - H]) {
                            let U = 0;
                            for(; U < L && n[c + U] == n[c + U - H]; ++U);
                            if (U > N) {
                                N = U;
                                Y = H;
                                if (U > j) {
                                    break;
                                }
                                const X = Math.min(H, U - 2);
                                let yr = 0;
                                for(var D = 0; D < X; ++D){
                                    const ar = c - H + D & 32767;
                                    const Nr = y[ar];
                                    const wr = ar - Nr & 32767;
                                    if (wr > yr) {
                                        yr = wr;
                                        P = ar;
                                    }
                                }
                            }
                        }
                        O = P;
                        P = y[O];
                        H += O - P & 32767;
                    }
                }
                if (Y) {
                    C[B++] = 268435456 | r_1[N] << 18 | r_2[Y];
                    const mr = r_1[N] & 31;
                    const xr = r_2[Y] & 31;
                    g += cr[mr] + pr[xr];
                    ++I[257 + mr];
                    ++Z[xr];
                    K = c + N;
                    ++M;
                } else {
                    C[B++] = n[c];
                    ++I[n[c]];
                }
            }
        }
        for(c = Math.max(c, K); c < o; ++c){
            C[B++] = n[c];
            ++I[n[c]];
        }
        s = Sr(n, l, h, C, I, Z, g, B, E, c - E, s);
        if (!h) {
            i.r = s & 7 | l[s / 8 | 0] << 3;
            s -= 7;
            i.h = x;
            i.p = y;
            i.i = c;
            i.w = K;
        }
    } else {
        for(var c = i.w || 0; c < o + h; c += 65535){
            let or = c + 65535;
            if (or >= o) {
                l[s / 8 | 0] = h;
                or = o;
            }
            s = Br(l, s + 1, n.subarray(c, or));
        }
        i.i = o;
    }
    return Zr(f, 0, e + Ir(s) + a);
};
const Vr = (()=>{
    const n = new Int32Array(256);
    for(let r = 0; r < 256; ++r){
        let t = r;
        let e = 9;
        while(--e){
            t = (t & 1 && -306674912) ^ t >>> 1;
        }
        n[r] = t;
    }
    return n;
})();
const qr = ()=>{
    let n = -1;
    return {
        p: function(r) {
            let t = n;
            for(let e = 0; e < r.length; ++e){
                t = Vr[t & 255 ^ r[e]] ^ t >>> 8;
            }
            n = t;
        },
        d: function() {
            return ~n;
        }
    };
};
const Gr = (n, r, t, e, a)=>{
    if (!a) {
        a = {
            l: 1
        };
        if (r.dictionary) {
            const i = r.dictionary.subarray(-32768);
            const o = new Uint8Array(i.length + n.length);
            o.set(i);
            o.set(n, i.length);
            n = o;
            a.w = i.length;
        }
    }
    return Qr(n, r.level ?? 6, r.mem == null ? a.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + r.mem, t, e, a);
};
const gr = (n, r)=>{
    const t = {};
    for(var e in n){
        t[e] = n[e];
    }
    for(var e in r){
        t[e] = r[e];
    }
    return t;
};
const A = (n, r, t)=>{
    for(; t; ++r){
        n[r] = t;
        t >>>= 8;
    }
};
class Xr {
    constructor(r, t){
        if (typeof r === "function") {
            t = r;
            r = {};
        }
        this.ondata = t;
        this.o = r || {};
        this.s = {
            l: 0,
            i: 32768,
            w: 32768,
            z: 32768
        };
        this.b = new Uint8Array(98304);
        if (this.o.dictionary) {
            var e = this.o.dictionary.subarray(-32768);
            this.b.set(e, 32768 - e.length);
            this.s.i = 32768 - e.length;
        }
    }
    p(r, t) {
        this.ondata(Gr(r, this.o, 0, 0, this.s), t);
    }
    push(r, t) {
        if (!this.ondata) {
            G(5);
        }
        if (this.s.l) {
            G(4);
        }
        const e = r.length + this.s.z;
        if (e > this.b.length) {
            if (e > 2 * this.b.length - 32768) {
                const a = new Uint8Array(e & -32768);
                a.set(this.b.subarray(0, this.s.z));
                this.b = a;
            }
            const i = this.b.length - this.s.z;
            this.b.set(r.subarray(0, i), this.s.z);
            this.s.z = this.b.length;
            this.p(this.b, false);
            this.b.set(this.b.subarray(-32768));
            this.b.set(r.subarray(i), 32768);
            this.s.z = r.length - i + 32768;
            this.s.i = 32766;
            this.s.w = 32768;
        } else {
            this.b.set(r, this.s.z);
            this.s.z += r.length;
        }
        this.s.l = t & 1;
        if (this.s.z > this.s.w + 8191 || t) {
            this.p(this.b, t || false);
            this.s.w = this.s.i;
            this.s.i -= 2;
        }
    }
    flush() {
        if (!this.ondata) {
            G(5);
        }
        if (this.s.l) {
            G(4);
        }
        this.p(this.b, false);
        this.s.w = this.s.i;
        this.s.i -= 2;
    }
}
function $r(n, r) {
    return Gr(n, r || {}, 0, 0);
}
const Or = (n, r, t, e)=>{
    for(const a in n){
        let i = n[a];
        let o = r + a;
        let f = e;
        if (Array.isArray(i)) {
            f = gr(e, i[1]);
            i = i[0];
        }
        if (i instanceof Uint8Array) {
            t[o] = [
                i,
                f
            ];
        } else {
            t[o += "/"] = [
                new Uint8Array(0),
                f
            ];
            Or(i, o, t, e);
        }
    }
};
const Fr = typeof TextEncoder !== "undefined" && new TextEncoder;
const dr = typeof TextDecoder !== "undefined" && new TextDecoder;
let jr = 0;
try {
    dr.decode(Er, {
        stream: true
    });
    jr = 1;
} catch (n) {}
function tr(n, r) {
    if (r) {
        const t = new Uint8Array(n.length);
        for(var e = 0; e < n.length; ++e){
            t[e] = n.charCodeAt(e);
        }
        return t;
    }
    if (Fr) {
        return Fr.encode(n);
    }
    const n_length = n.length;
    let i = new Uint8Array(n.length + (n.length >> 1));
    let o = 0;
    const f = (s)=>{
        i[o++] = s;
    };
    for(var e = 0; e < n_length; ++e){
        if (o + 5 > i.length) {
            const l = new Uint8Array(o + 8 + (n_length - e << 1));
            l.set(i);
            i = l;
        }
        let h = n.charCodeAt(e);
        if (h < 128 || r) {
            f(h);
        } else if (h < 2048) {
            f(192 | h >> 6);
            f(128 | h & 63);
        } else if (h > 55295 && h < 57344) {
            h = 65536 + (h & 1047552) | n.charCodeAt(++e) & 1023;
            f(240 | h >> 18);
            f(128 | h >> 12 & 63);
            f(128 | h >> 6 & 63);
            f(128 | h & 63);
        } else {
            f(224 | h >> 12);
            f(128 | h >> 6 & 63);
            f(128 | h & 63);
        }
    }
    return Zr(i, 0, o);
}
const br = (level)=>{
    if (level == 1) {
        return 3;
    }
    if (level < 6) {
        return 2;
    }
    if (level == 9) {
        return 1;
    }
    return 0;
};
var d = (n)=>{
    let r = 0;
    if (n) {
        for(const t in n){
            const e = n[t].length;
            if (e > 65535) {
                G(9);
            }
            r += e + 4;
        }
    }
    return r;
};
const er = (n, r, t, e, a, i, o, f)=>{
    const e_length = e.length;
    const t_extra = t.extra;
    const s = f && f.length;
    const u = d(t_extra);
    A(n, r, o != null ? 33639248 : 67324752);
    r += 4;
    if (o != null) {
        n[r++] = 20;
        n[r++] = t.os;
    }
    n[r] = 20;
    r += 2;
    n[r++] = t.flag << 1 | (i < 0 && 8);
    n[r++] = a && 8;
    n[r++] = t.compression & 255;
    n[r++] = t.compression >> 8;
    const p = new Date(t.mtime ?? Date.now());
    const m = p.getFullYear() - 1980;
    if (m < 0 || m > 119) {
        G(10);
    }
    A(n, r, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1);
    r += 4;
    if (i != -1) {
        A(n, r, t.crc);
        A(n, r + 4, i < 0 ? -i - 2 : i);
        A(n, r + 8, t.size);
    }
    A(n, r + 12, e_length);
    A(n, r + 14, u);
    r += 16;
    if (o != null) {
        A(n, r, s);
        A(n, r + 6, t.attrs);
        A(n, r + 10, o);
        r += 14;
    }
    n.set(e, r);
    r += e_length;
    if (u) {
        for(const w in t_extra){
            const y = t_extra[w];
            const x = y.length;
            A(n, r, +w);
            A(n, r + 2, x);
            n.set(y, r + 4);
            r += 4 + x;
        }
    }
    if (s) {
        n.set(f, r);
        r += s;
    }
    return r;
};
const Pr = (n, r, t, e, a)=>{
    A(n, r, 101010256);
    A(n, r + 8, t);
    A(n, r + 10, t);
    A(n, r + 12, e);
    A(n, r + 16, a);
};
const Cr = (()=>{
    function n(r) {
        this.filename = r;
        this.c = qr();
        this.size = 0;
        this.compression = 0;
    }
    n.prototype.process = function(r, t) {
        this.ondata(null, r, t);
    };
    n.prototype.push = function(r, t) {
        if (!this.ondata) {
            G(5);
        }
        this.c.p(r);
        this.size += r.length;
        if (t) {
            this.crc = this.c.d();
        }
        this.process(r, t || false);
    };
    return n;
})();
export class ZipDeflate {
    constructor(r, t){
        var e = this;
        if (!t) {
            t = {};
        }
        Cr.call(this, r);
        this.d = new Xr(t, function(a, i) {
            e.ondata(null, a, i);
        });
        this.compression = 8;
        this.flag = br(t.level);
    }
    process(r, t) {
        try {
            this.d.push(r, t);
        } catch (error) {
            this.ondata(error, null, t);
        }
    }
    push(r, t) {
        Cr.prototype.push.call(this, r, t);
    }
}
export class Zip {
    constructor(r){
        this.ondata = r;
        this.u = [];
        this.d = 1;
    }
    add(r) {
        const t = this;
        if (!this.ondata) {
            G(5);
        }
        if (this.d & 2) {
            this.ondata(G(4 + (this.d & 1) * 8, 0, 1), null, false);
        } else {
            const e = tr(r.filename);
            const a = e.length;
            const i = r.comment;
            const o = i && tr(i);
            const u_1 = a != r.filename.length || o && i.length != o.length;
            const l = a + d(r.extra) + 30;
            if (a > 65535) {
                this.ondata(G(11, 0, 1), null, false);
            }
            const h = new Uint8Array(l);
            er(h, 0, r, e, u_1, -1);
            let s = [
                h
            ];
            const u = ()=>{
                for (const F of s){
                    t.ondata(null, F, false);
                }
                s = [];
            };
            let p = this.d;
            this.d = 0;
            const m = this.u.length;
            const w = gr(r, {
                f: e,
                u: u_1,
                o,
                t: function() {
                    if (r.terminate) {
                        r.terminate();
                    }
                },
                r: function() {
                    u();
                    if (p) {
                        const x = t.u[m + 1];
                        if (x) {
                            x.r();
                        } else {
                            t.d = 1;
                        }
                    }
                    p = 1;
                }
            });
            let y = 0;
            r.ondata = function(x, S, F) {
                if (x) {
                    t.ondata(x, S, F);
                    t.terminate();
                } else {
                    y += S.length;
                    s.push(S);
                    if (F) {
                        const T = new Uint8Array(16);
                        A(T, 0, 134695760);
                        A(T, 4, r.crc);
                        A(T, 8, y);
                        A(T, 12, r.size);
                        s.push(T);
                        w.c = y;
                        w.b = l + y + 16;
                        w.crc = r.crc;
                        w.size = r.size;
                        if (p) {
                            w.r();
                        }
                        p = 1;
                    } else if (p) {
                        u();
                    }
                }
            };
            this.u.push(w);
        }
    }
    end() {
        const r = this;
        if (this.d & 2) {
            this.ondata(G(4 + (this.d & 1) * 8, 0, 1), null, true);
            return;
        }
        if (this.d) {
            this.e();
        } else {
            this.u.push({
                r: function() {
                    if (!(r.d & 1)) {
                        return;
                    }
                    r.u.splice(-1, 1);
                    r.e();
                },
                t: function() {}
            });
        }
        this.d = 3;
    }
    e() {
        let r = 0;
        let t = 0;
        let e = 0;
        for (var o of this.u){
            e += 46 + o.f.length + d(o.extra) + (o.o ? o.o.length : 0);
        }
        const f = new Uint8Array(e + 22);
        for (var o of this.u){
            er(f, r, o, o.f, o.u, -o.c - 2, t, o.o);
            r += 46 + o.f.length + d(o.extra) + (o.o ? o.o.length : 0);
            t += o.b;
        }
        Pr(f, r, this.u.length, e, t);
        this.ondata(null, f, true);
        this.d = 2;
    }
    terminate() {
        for (const e of this.u){
            e.t();
        }
        this.d = 2;
    }
}
export function zipSync(n, r) {
    if (!r) {
        r = {};
    }
    const t = {};
    const e = [];
    Or(n, "", t, r);
    let o_1 = 0;
    let i = 0;
    for(const o in t){
        const f = t[o];
        const l = f[0];
        const h = f[1];
        const compression = h.level == 0 ? 0 : 8;
        var u = tr(o);
        const p = u.length;
        const m = h.comment;
        const m_1 = m && tr(m);
        const y = m_1 && m_1.length;
        const x = d(h.extra);
        if (p > 65535) {
            G(11);
        }
        const c = compression ? $r(l, h) : l;
        const F = c.length;
        const T = qr();
        T.p(l);
        e.push(gr(h, {
            size: l.length,
            crc: T.d(),
            c,
            f: u,
            m: m_1,
            u: p != o.length || m_1 && m.length != y,
            o: o_1,
            compression
        }));
        o_1 += 30 + p + x + F;
        i += 76 + 2 * (p + x) + (y || 0) + F;
    }
    const C = new Uint8Array(i + 22);
    const I = o_1;
    const Z = i - o_1;
    for (var u of e){
        er(C, u.o, u, u.f, u.u, u.c.length);
        const g = 30 + u.f.length + d(u.extra);
        C.set(u.c, u.o + g);
        er(C, o_1, u, u.f, u.u, u.c.length, u.o, u.m);
        o_1 += 16 + g + (u.m ? u.m.length : 0);
    }
    Pr(C, o_1, e.length, Z, I);
    return C;
}
