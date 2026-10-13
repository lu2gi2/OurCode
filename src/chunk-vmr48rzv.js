class L {
    diff(n, e, t = {}) {
        let i;
        if (typeof t === "function") {
            i = t;
            t = {};
        } else if ("callback" in t) {
            i = t.callback;
        }
        let l = this.castInput(n, t);
        let r = this.castInput(e, t);
        let s = this.removeEmpty(this.tokenize(l, t));
        let o = this.removeEmpty(this.tokenize(r, t));
        return this.diffWithOptionsObj(s, o, t, i);
    }
    diffWithOptionsObj(n, e, t, i) {
        let r = (d)=>{
            d = this.postProcess(d, t);
            if (i) {
                setTimeout(()=>{
                    i(d);
                }, 0);
                return;
            } else {
                return d;
            }
        };
        let e_length = e.length;
        let n_length = n.length;
        let f = 1;
        let u = e_length + n_length;
        if (t.maxEditLength != null) {
            u = Math.min(u, t.maxEditLength);
        }
        let h = t.timeout ?? Infinity;
        let c = Date.now() + h;
        let a = [
            {
                oldPos: -1,
                lastComponent: undefined
            }
        ];
        let g = this.extractCommon(a[0], e, n, 0, t);
        if (a[0].oldPos + 1 >= n_length && g + 1 >= e_length) {
            return r(this.buildValues(a[0].lastComponent, e, n));
        }
        let w = -Infinity;
        let P = Infinity;
        let C = ()=>{
            for(let d = Math.max(w, -f); d <= Math.min(P, f); d += 2){
                let p;
                let m = a[d - 1];
                let x = a[d + 1];
                if (m) {
                    a[d - 1] = undefined;
                }
                let v = false;
                if (x) {
                    let D = x.oldPos - d;
                    v = x && D >= 0 && D < e_length;
                }
                let S = m && m.oldPos + 1 < n_length;
                if (!v && !S) {
                    a[d] = undefined;
                    continue;
                }
                if (!S || v && m.oldPos < x.oldPos) {
                    p = this.addToPath(x, true, false, 0, t);
                } else {
                    p = this.addToPath(m, false, true, 1, t);
                }
                g = this.extractCommon(p, e, n, d, t);
                if (p.oldPos + 1 >= n_length && g + 1 >= e_length) {
                    return r(this.buildValues(p.lastComponent, e, n)) || true;
                } else {
                    a[d] = p;
                    if (p.oldPos + 1 >= n_length) {
                        P = Math.min(P, d - 1);
                    }
                    if (g + 1 >= e_length) {
                        w = Math.max(w, d + 1);
                    }
                }
            }
            f++;
        };
        if (i) {
            (function d() {
                setTimeout(()=>{
                    if (f > u || Date.now() > c) {
                        return i(undefined);
                    }
                    if (!C()) {
                        d();
                    }
                }, 0);
            })();
        } else {
            while(f <= u && Date.now() <= c){
                let d = C();
                if (d) {
                    return d;
                }
            }
        }
    }
    addToPath(n, added, removed, i, l) {
        let n_lastComponent = n.lastComponent;
        if (n_lastComponent && !l.oneChangePerToken && n_lastComponent.added === added && n_lastComponent.removed === removed) {
            return {
                oldPos: n.oldPos + i,
                lastComponent: {
                    count: n_lastComponent.count + 1,
                    added,
                    removed,
                    previousComponent: n_lastComponent.previousComponent
                }
            };
        } else {
            return {
                oldPos: n.oldPos + i,
                lastComponent: {
                    count: 1,
                    added,
                    removed,
                    previousComponent: n_lastComponent
                }
            };
        }
    }
    extractCommon(n, e, t, i, l) {
        let e_length = e.length;
        let t_length = t.length;
        let n_oldPos = n.oldPos;
        let f = n_oldPos - i;
        let count = 0;
        while(f + 1 < e_length && n_oldPos + 1 < t_length && this.equals(t[n_oldPos + 1], e[f + 1], l)){
            f++;
            n_oldPos++;
            count++;
            if (l.oneChangePerToken) {
                n.lastComponent = {
                    count: 1,
                    previousComponent: n.lastComponent,
                    added: false,
                    removed: false
                };
            }
        }
        if (count && !l.oneChangePerToken) {
            n.lastComponent = {
                count,
                previousComponent: n.lastComponent,
                added: false,
                removed: false
            };
        }
        n.oldPos = n_oldPos;
        return f;
    }
    equals(n, e, t) {
        if (t.comparator) {
            return t.comparator(n, e);
        } else {
            return n === e || !!t.ignoreCase && n.toLowerCase() === e.toLowerCase();
        }
    }
    removeEmpty(n) {
        let e = [];
        for(let t = 0; t < n.length; t++){
            if (n[t]) {
                e.push(n[t]);
            }
        }
        return e;
    }
    castInput(n, e) {
        return n;
    }
    tokenize(n, e) {
        return Array.from(n);
    }
    join(n) {
        return n.join("");
    }
    postProcess(n, e) {
        return n;
    }
    get useLongestToken() {
        return false;
    }
    buildValues(n, e, t) {
        let i = [];
        let l;
        while(n){
            i.push(n);
            l = n.previousComponent;
            delete n.previousComponent;
            n = l;
        }
        i.reverse();
        let i_length = i.length;
        let s = 0;
        let o = 0;
        let f = 0;
        for(; s < i_length; s++){
            let u = i[s];
            if (!u.removed) {
                if (!u.added && this.useLongestToken) {
                    let h = e.slice(o, o + u.count);
                    h = h.map((c, a)=>{
                        let g = t[f + a];
                        if (g.length > c.length) {
                            return g;
                        }
                        return c;
                    });
                    u.value = this.join(h);
                } else {
                    u.value = this.join(e.slice(o, o + u.count));
                }
                o += u.count;
                if (!u.added) {
                    f += u.count;
                }
            } else {
                u.value = this.join(t.slice(f, f + u.count));
                f += u.count;
            }
        }
        return i;
    }
}
class N extends L {
    constructor(){
        super(...arguments);
        this.tokenize = V;
    }
    equals(n, e, t) {
        if (t.ignoreWhitespace) {
            if (!t.newlineIsToken || !n.includes(`
`)) {
                n = n.trim();
            }
            if (!t.newlineIsToken || !e.includes(`
`)) {
                e = e.trim();
            }
        } else if (t.ignoreNewlineAtEof && !t.newlineIsToken) {
            if (n.endsWith(`
`)) {
                n = n.slice(0, -1);
            }
            if (e.endsWith(`
`)) {
                e = e.slice(0, -1);
            }
        }
        return super.equals(n, e, t);
    }
}
const R = new N;
function dKe(n, e, t) {
    return R.diff(n, e, t);
}
function V(n, e) {
    if (e.stripTrailingCr) {
        n = n.replace(/\r\n/g, `
`);
    }
    let t = [];
    let i = n.split(/(\n|\r\n)/);
    if (!i[i.length - 1]) {
        i.pop();
    }
    for(let l = 0; l < i.length; l++){
        let r = i[l];
        if (l % 2 && !e.newlineIsToken) {
            t[t.length - 1] += r;
        } else {
            t.push(r);
        }
    }
    return t;
}
function G2(oldFileName, newFileName, t, i, oldHeader, newHeader, callback) {
    let o;
    if (!callback) {
        o = {};
    } else if (typeof callback === "function") {
        o = {
            callback
        };
    } else {
        o = callback;
    }
    if (typeof o.context === "undefined") {
        o.context = 4;
    }
    let o_context = o.context;
    if (o.newlineIsToken) {
        throw Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
    }
    if (!o.callback) {
        return u(dKe(t, i, o));
    } else {
        let { callback } = o;
        dKe(t, i, {
            ...o,
            callback: (c)=>{
                let a = u(c);
                callback(a);
            }
        });
    }
    function u(h) {
        if (!h) {
            return;
        }
        h.push({
            value: "",
            lines: []
        });
        function c(p) {
            return p.map((m)=>` ${m}`);
        }
        let hunks = [];
        let oldStart = 0;
        let newStart = 0;
        let lines = [];
        let C = 1;
        let d = 1;
        for(let p = 0; p < h.length; p++){
            let m = h[p];
            let x = m.lines || Y(m.value);
            m.lines = x;
            if (m.added || m.removed) {
                if (!oldStart) {
                    let v = h[p - 1];
                    oldStart = C;
                    newStart = d;
                    if (v) {
                        lines = o_context > 0 ? c(v.lines.slice(-o_context)) : [];
                        oldStart -= lines.length;
                        newStart -= lines.length;
                    }
                }
                for (let v of x){
                    lines.push((m.added ? "+" : "-") + v);
                }
                if (m.added) {
                    d += x.length;
                } else {
                    C += x.length;
                }
            } else {
                if (oldStart) {
                    if (x.length <= o_context * 2 && p < h.length - 2) {
                        for (let v of c(x)){
                            lines.push(v);
                        }
                    } else {
                        let v = Math.min(x.length, o_context);
                        for (let D of c(x.slice(0, v))){
                            lines.push(D);
                        }
                        let S = {
                            oldStart,
                            oldLines: C - oldStart + v,
                            newStart,
                            newLines: d - newStart + v,
                            lines
                        };
                        hunks.push(S);
                        oldStart = 0;
                        newStart = 0;
                        lines = [];
                    }
                }
                C += x.length;
                d += x.length;
            }
        }
        for (let p of hunks){
            for(let m = 0; m < p.lines.length; m++){
                if (p.lines[m].endsWith(`
`)) {
                    p.lines[m] = p.lines[m].slice(0, -1);
                } else {
                    p.lines.splice(m + 1, 0, "\\ No newline at end of file");
                    m++;
                }
            }
        }
        return {
            oldFileName,
            newFileName,
            oldHeader,
            newHeader,
            hunks
        };
    }
}
function Y(n) {
    let e = n.endsWith(`
`);
    let t = n.split(`
`).map((i)=>i + `
`);
    if (e) {
        t.pop();
    } else {
        t.push(t.pop().slice(0, -1));
    }
    return t;
}
function H(n, e) {
    let t;
    for(t = 0; t < n.length && t < e.length; t++){
        if (n[t] != e[t]) {
            return n.slice(0, t);
        }
    }
    return n.slice(0, t);
}
function b(n, e) {
    let t;
    if (!n || !e || n[n.length - 1] != e[e.length - 1]) {
        return "";
    }
    for(t = 0; t < n.length && t < e.length; t++){
        if (n[n.length - (t + 1)] != e[e.length - (t + 1)]) {
            return n.slice(-t);
        }
    }
    return n.slice(-t);
}
function I(n, e, t) {
    if (n.slice(0, e.length) != e) {
        throw Error(`string ${JSON.stringify(n)} doesn't start with prefix ${JSON.stringify(e)}; this is a bug`);
    }
    return t + n.slice(e.length);
}
function T(n, e, t) {
    if (!e) {
        return n + t;
    }
    if (n.slice(-e.length) != e) {
        throw Error(`string ${JSON.stringify(n)} doesn't end with suffix ${JSON.stringify(e)}; this is a bug`);
    }
    return n.slice(0, -e.length) + t;
}
function W(n, e) {
    return I(n, e, "");
}
function y(n, e) {
    return T(n, e, "");
}
function A(n, e) {
    return e.slice(0, B(n, e));
}
function B(n, e) {
    let t = 0;
    if (n.length > e.length) {
        t = n.length - e.length;
    }
    let e_length = e.length;
    if (n.length < e.length) {
        e_length = n.length;
    }
    let l = Array(e_length);
    let r = 0;
    l[0] = 0;
    for(let s = 1; s < e_length; s++){
        if (e[s] == e[r]) {
            l[s] = l[r];
        } else {
            l[s] = r;
        }
        while(r > 0 && e[s] != e[r]){
            r = l[r];
        }
        if (e[s] == e[r]) {
            r++;
        }
    }
    r = 0;
    for(let s = t; s < n.length; s++){
        while(r > 0 && n[s] != e[r]){
            r = l[r];
        }
        if (n[s] == e[r]) {
            r++;
        }
    }
    return r;
}
function j(n, e) {
    let t = [];
    for (let i of Array.from(e.segment(n))){
        let l = i.segment;
        if (t.length && /\s/.test(t[t.length - 1]) && /\s/.test(l)) {
            t[t.length - 1] += l;
        } else {
            t.push(l);
        }
    }
    return t;
}
function O(n, e) {
    if (e) {
        return k(n, e)[1];
    }
    let t;
    for(t = n.length - 1; t >= 0; t--){
        if (!n[t].match(/\s/)) {
            break;
        }
    }
    return n.substring(t + 1);
}
function E(n, e) {
    if (e) {
        return k(n, e)[0];
    }
    let t = n.match(/^\s*/);
    if (t) {
        return t[0];
    }
    return "";
}
function k(n, e) {
    if (!e) {
        return [
            E(n),
            O(n)
        ];
    }
    if (e.resolvedOptions().granularity != "word") {
        throw Error('The segmenter passed must have a granularity of "word"');
    }
    let t = j(n, e);
    let i = t[0];
    let l = t[t.length - 1];
    let r = /\s/.test(i) ? i : "";
    let s = /\s/.test(l) ? l : "";
    return [
        r,
        s
    ];
}
const F = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
const X = new RegExp(`[${F}]+|\\s+|[^${F}]`, "ug");
class M extends L {
    equals(n, e, t) {
        if (t.ignoreCase) {
            n = n.toLowerCase();
            e = e.toLowerCase();
        }
        return n.trim() === e.trim();
    }
    tokenize(n, e = {}) {
        let t;
        if (e.intlSegmenter) {
            let r = e.intlSegmenter;
            if (r.resolvedOptions().granularity != "word") {
                throw Error('The segmenter passed must have a granularity of "word"');
            }
            t = j(n, r);
        } else {
            t = n.match(X) || [];
        }
        let i = [];
        let l = null;
        t.forEach((r)=>{
            if (/\s/.test(r)) {
                if (l == null) {
                    i.push(r);
                } else {
                    i.push(i.pop() + r);
                }
            } else if (l != null && /\s/.test(l)) {
                if (i[i.length - 1] == l) {
                    i.push(i.pop() + r);
                } else {
                    i.push(l + r);
                }
            } else {
                i.push(r);
            }
            l = r;
        });
        return i;
    }
    join(n) {
        return n.map((e, t)=>{
            if (t == 0) {
                return e;
            } else {
                return e.replace(/^\s+/, "");
            }
        }).join("");
    }
    postProcess(n, e) {
        if (!n || e.oneChangePerToken) {
            return n;
        }
        let t = null;
        let i = null;
        let l = null;
        n.forEach((r)=>{
            if (r.added) {
                i = r;
            } else if (r.removed) {
                l = r;
            } else {
                if (i || l) {
                    z(t, l, i, r, e.intlSegmenter);
                }
                t = r;
                i = null;
                l = null;
            }
        });
        if (i || l) {
            z(t, l, i, null, e.intlSegmenter);
        }
        return n;
    }
}
const Z = new M;
function z(n, e, t, i, intlSegmenter) {
    if (e && t) {
        let [r, s] = k(e.value, intlSegmenter);
        let [o, f] = k(t.value, intlSegmenter);
        if (n) {
            let u = H(r, o);
            n.value = T(n.value, o, u);
            e.value = W(e.value, u);
            t.value = W(t.value, u);
        }
        if (i) {
            let u = b(s, f);
            i.value = I(i.value, f, u);
            e.value = y(e.value, u);
            t.value = y(t.value, u);
        }
    } else if (t) {
        if (n) {
            let r = E(t.value, intlSegmenter);
            t.value = t.value.substring(r.length);
        }
        if (i) {
            let r = E(i.value, intlSegmenter);
            i.value = i.value.substring(r.length);
        }
    } else if (n && i) {
        let r = E(i.value, intlSegmenter);
        let [s, o] = k(e.value, intlSegmenter);
        let f = H(r, s);
        e.value = W(e.value, f);
        let u = b(W(r, f), o);
        e.value = y(e.value, u);
        i.value = I(i.value, r, u);
        n.value = T(n.value, r, r.slice(0, r.length - u.length));
    } else if (i) {
        let r = E(i.value, intlSegmenter);
        let s = O(e.value, intlSegmenter);
        let o = A(s, r);
        e.value = y(e.value, o);
    } else if (n) {
        let r = O(n.value, intlSegmenter);
        let s = E(e.value, intlSegmenter);
        let o = A(r, s);
        e.value = W(e.value, o);
    }
}
class _ extends L {
    tokenize(n) {
        let e = new RegExp(`(\\r?\\n)|[${F}]+|[^\\S\\n\\r]+|[^${F}]`, "ug");
        return n.match(e) || [];
    }
}
const U = new _;
function koo(n, e, t) {
    return U.diff(n, e, t);
}
class J extends L {
    tokenize(n) {
        return n.slice();
    }
    join(n) {
        return n;
    }
    removeEmpty(n) {
        return n;
    }
}
const q = new J;
function Too(n, e, t) {
    return q.diff(n, e, t);
}
function Aoo(n) {
    let e = n.split(/\n/);
    let t = [];
    let i = 0;
    function l() {
        let o = {};
        t.push(o);
        while(i < e.length){
            let f = e[i];
            if (/^(---|\+\+\+|@@)\s/.test(f)) {
                break;
            }
            let u = /^(?:Index:|diff(?: -r \w+)+)\s+/.exec(f);
            if (u) {
                o.index = f.substring(u[0].length).trim();
            }
            i++;
        }
        r(o);
        r(o);
        o.hunks = [];
        while(i < e.length){
            let f = e[i];
            if (/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(f)) {
                break;
            } else if (/^@@/.test(f)) {
                o.hunks.push(s());
            } else if (f) {
                throw Error(`Unknown line ${i + 1} ${JSON.stringify(f)}`);
            } else {
                i++;
            }
        }
    }
    function r(o) {
        let f = /^(---|\+\+\+)\s+/.exec(e[i]);
        if (f) {
            let u = f[1];
            let h = e[i].substring(3).trim().split("\t", 2);
            let c = (h[1] || "").trim();
            let a = h[0].replace(/\\\\/g, "\\");
            if (a.startsWith('"') && a.endsWith('"')) {
                a = a.substr(1, a.length - 2);
            }
            if (u === "---") {
                o.oldFileName = a;
                o.oldHeader = c;
            } else {
                o.newFileName = a;
                o.newHeader = c;
            }
            i++;
        }
    }
    function s() {
        let f = i;
        let u = e[i++];
        let h = u.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
        let c = {
            oldStart: +h[1],
            oldLines: typeof h[2] === "undefined" ? 1 : +h[2],
            newStart: +h[3],
            newLines: typeof h[4] === "undefined" ? 1 : +h[4],
            lines: []
        };
        if (c.oldLines === 0) {
            c.oldStart += 1;
        }
        if (c.newLines === 0) {
            c.newStart += 1;
        }
        let a = 0;
        let g = 0;
        for(; i < e.length && (g < c.oldLines || a < c.newLines || e[i]?.startsWith("\\")); i++){
            let w = e[i].length == 0 && i != e.length - 1 ? " " : e[i][0];
            if (w === "+" || w === "-" || w === " " || w === "\\") {
                c.lines.push(e[i]);
                if (w === "+") {
                    a++;
                } else if (w === "-") {
                    g++;
                } else if (w === " ") {
                    a++;
                    g++;
                }
            } else {
                throw Error(`Hunk at line ${f + 1} contained invalid line ${e[i]}`);
            }
        }
        if (!a && c.newLines === 1) {
            c.newLines = 0;
        }
        if (!g && c.oldLines === 1) {
            c.oldLines = 0;
        }
        if (a !== c.newLines) {
            throw Error(`Added line count did not match for hunk at line ${f + 1}`);
        }
        if (g !== c.oldLines) {
            throw Error(`Removed line count did not match for hunk at line ${f + 1}`);
        }
        return c;
    }
    while(i < e.length){
        l();
    }
    return t;
}
export { koo, dKe, Too, Aoo, G2 };
