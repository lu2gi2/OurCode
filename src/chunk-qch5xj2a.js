function Ei(t, n) {
    return t.repeat(Number.isFinite(n) && n > 0 ? n : 0);
}
function ml(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ca(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}
function I(t, n, e = `${n}s`) {
    if (t === 1) {
        return n;
    }
    return e;
}
function xPe(t) {
    let n = 0;
    for(let e = 0; e < t.length; e++){
        let r = t.charCodeAt(e);
        if (r >= 55296 && r <= 56319 && e + 1 < t.length) {
            let i = t.charCodeAt(e + 1);
            if (i >= 56320 && i <= 57343) {
                e++;
            }
        }
        n++;
    }
    return n;
}
function Ms(t, n) {
    if (t.length <= n) {
        return t;
    }
    let e = [];
    for (let r of t){
        if (e.length >= n) {
            break;
        }
        e.push(r);
    }
    return e.join("");
}
function ne(t, n) {
    if (n <= 0) {
        return "";
    }
    if (t.length <= n) {
        return t;
    }
    let e = t.slice(0, n);
    let r = e.charCodeAt(n - 1);
    return MDt(r >= 55296 && r <= 56319 ? e.slice(0, -1) : e);
}
function jl(t, n) {
    if (n <= 0) {
        return "";
    }
    if (t.length <= n) {
        return t;
    }
    let e = t.slice(-n);
    let r = e.charCodeAt(0);
    return MDt(r >= 56320 && r <= 57343 ? e.slice(1) : e);
}
function c6(t, n, e, r) {
    if (t.length <= n + e) {
        return t;
    }
    let i = n > 0 ? ne(t, n) : "";
    let o = e > 0 ? jl(t, e) : "";
    return `${i}${r(t.length - i.length - o.length)}${o}`;
}
function MDt(t) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(t, "utf16le").toString("utf16le");
    }
    return x(t);
}
function x(t) {
    let e = [];
    for(let r = 0; r < t.length; r += 8192){
        let i = Math.min(r + 8192, t.length);
        let o = new Uint16Array(i - r);
        for(let u = r; u < i; u++){
            o[u - r] = t.charCodeAt(u);
        }
        e.push(String.fromCharCode(...o));
    }
    return e.join("");
}
const m = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;
const a = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g;
const l = typeof String.prototype.isWellFormed === "function" ? Function.prototype.call.bind(String.prototype.isWellFormed) : undefined;
const g = typeof String.prototype.toWellFormed === "function" ? Function.prototype.call.bind(String.prototype.toWellFormed) : undefined;
function Yc(t) {
    if (l) {
        return l(t);
    }
    return !m.test(t);
}
function yf(t) {
    if (g) {
        return g(t);
    }
    return t.replace(a, "\uFFFD");
}
function Ww(t) {
    if (l && l(t)) {
        return t;
    }
    return t.replace(a, "");
}
function yBe(t) {
    let n = false;
    let e = [
        t
    ];
    while(e.length > 0){
        let r = e.pop();
        if (Array.isArray(r)) {
            for(let i = 0; i < r.length; i++){
                let o = r[i];
                if (typeof o === "string") {
                    if (!Yc(o)) {
                        r[i] = yf(o);
                        n = true;
                    }
                } else if (o !== null && typeof o === "object") {
                    e.push(o);
                }
            }
        } else if (r !== null && typeof r === "object") {
            let i = r;
            for (let o of Object.keys(i)){
                let u = i[o];
                if (typeof u === "string") {
                    if (!Yc(u)) {
                        i[o] = yf(u);
                        n = true;
                    }
                } else if (u !== null && typeof u === "object") {
                    e.push(u);
                }
            }
        }
    }
    return n;
}
function g2n(t) {
    let n = [
        t
    ];
    while(n.length > 0){
        let e = n.pop();
        if (Array.isArray(e)) {
            for (const i of e){
                if (typeof i === "string") {
                    if (!Yc(i)) {
                        return true;
                    }
                } else if (i !== null && typeof i === "object") {
                    n.push(i);
                }
            }
        } else if (e !== null && typeof e === "object") {
            let r = e;
            for (let i of Object.keys(r)){
                let o = r[i];
                if (typeof o === "string") {
                    if (!Yc(o)) {
                        return true;
                    }
                } else if (o !== null && typeof o === "object") {
                    n.push(o);
                }
            }
        }
    }
    return false;
}
function Qe(t, n) {
    let e = t.indexOf(n);
    if (e === -1) {
        return t;
    }
    return t.slice(0, e);
}
function HDt(t, n) {
    let t_length = t.length;
    while(t_length > 0 && n.includes(t[t_length - 1])){
        t_length--;
    }
    return t.slice(0, t_length);
}
const f = /^[\x00-\x7f]*$/;
function PPe(t, n) {
    let e = f.test(t);
    if (e !== f.test(n)) {
        if (e) {
            return -1;
        }
        return 1;
    }
    if (e) {
        return t.localeCompare(n);
    }
    if (t === n) {
        return 0;
    }
    if (t < n) {
        return -1;
    }
    return 1;
}
function Tr(t) {
    return Qe(t, `
`);
}
function Lt(t, n, e = 0) {
    let r = 0;
    let i = t.indexOf(n, e);
    while(i !== -1){
        r++;
        i = t.indexOf(n, i + 1);
    }
    return r;
}
function v9(t) {
    return t.replace(/[\uFF10-\uFF19]/g, (n)=>String.fromCharCode(n.charCodeAt(0) - 65248));
}
function d6(t) {
    return t.replaceAll("\u3000", " ");
}
const p = 33554432;
function txr(t, n = ",", e = p) {
    let i = "";
    for (let o of t){
        let u = i ? n : "";
        let c = u + o;
        if (i.length + c.length <= e) {
            i += c;
        } else {
            let s = e - i.length - u.length - 14;
            if (s > 0) {
                i += `${u + o.slice(0, s)}...[truncated]`;
            } else {
                i += "...[truncated]";
            }
            return i;
        }
    }
    return i;
}
class Mon {
    maxSize;
    content = "";
    isTruncated = false;
    totalBytesReceived = 0;
    constructor(t = p){
        this.maxSize = t;
    }
    append(t) {
        let n = typeof t === "string" ? t : t.toString();
        this.totalBytesReceived += n.length;
        if (this.isTruncated && this.content.length >= this.maxSize) {
            return;
        }
        if (this.content.length + n.length > this.maxSize) {
            let e = this.maxSize - this.content.length;
            if (e > 0) {
                this.content += n.slice(0, e);
            }
            this.isTruncated = true;
        } else {
            this.content += n;
        }
    }
    toString() {
        if (!this.isTruncated) {
            return this.content;
        }
        let t = this.totalBytesReceived - this.maxSize;
        let n = Math.round(t / 1024);
        return this.content + `
... [output truncated - ${n}KB removed]`;
    }
    clear() {
        this.content = "";
        this.isTruncated = false;
        this.totalBytesReceived = 0;
    }
    get length() {
        return this.content.length;
    }
    get truncated() {
        return this.isTruncated;
    }
    get totalBytes() {
        return this.totalBytesReceived;
    }
}
function Hon(t, n) {
    let e = t.split(`
`);
    if (e.length <= n) {
        return t;
    }
    return `${e.slice(0, n).join(`
`)}…`;
}
function _c(t, n) {
    if (t.length <= n) {
        return t;
    }
    let e = ne(t, n);
    return `${e}\u2026 [+${t.length - e.length} chars]`;
}
function $O(t, n) {
    if (t.length <= n) {
        return t;
    }
    let e = ne(t, n - 1);
    let r = e.search(/\s\S*$/);
    let i = r === -1 ? "" : e.slice(0, r).trimEnd();
    return `${i.length > n / 2 ? i : e.trimEnd()}\u2026`;
}
const Lse = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g;
const eG = /[\x00-\x1F\x7F-\x9F]/;
function Nr(t) {
    return t.replace(Lse, "").replace(/\s+/g, " ").trim();
}
function FP(t) {
    return t.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu, "");
}
const d = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?(?:\u0007|\u001B\u005C|\u009C))|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g;
function dy(t) {
    return Ww(t).replace(d, "").replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}
function rU(t) {
    let n = /[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu;
    if (!n.test(t)) {
        return t;
    }
    let e = "";
    for (let { segment } of new Intl.Segmenter(undefined, {
        granularity: "grapheme"
    }).segment(t)){
        let i = /\p{Extended_Pictographic}|\p{Regional_Indicator}|^[#*0-9]\uFE0F?\u20E3$/u.test(segment);
        let o = /^\u{1F3F4}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,6}\u{E007F}$/u.test(segment);
        n.lastIndex = 0;
        e += segment.replace(n, (u, c)=>{
            if (u === `
` || u === "\t") {
                return u;
            }
            let s = u.codePointAt(0) ?? 0;
            if (i && (u === "\uFE0F" || u === "\uFE0E" || u === "⃣" || u === "\u200D" && c + u.length < segment.length || o && s >= 917536 && s <= 917631)) {
                return u;
            }
            if (s === 27) {
                return "␛";
            }
            if (s < 32) {
                return String.fromCodePoint(9216 + s);
            }
            if (s === 127) {
                return "␡";
            }
            return `\\u{${s.toString(16).toUpperCase()}}`;
        });
    }
    return e;
}
function tp(t) {
    return rU(t).replace(/\n/g, "␤").replace(/\t/g, "␉");
}
function MH(t) {
    let n = dy(Tr(t));
    if (n.length > 200) {
        return `${ne(n, 200)}\u2026`;
    }
    return n;
}
function Cq(t, n) {
    return ne(HH(t), n);
}
function HH(t) {
    return FP(Nr(t.replace(d, ""))).trim();
}
const h2n = 500;
function Lpe(t, n) {
    if (t.length * 3 <= n) {
        return t;
    }
    let e = new TextEncoder;
    let r = new Uint8Array(Math.max(0, Math.min(n, 4194304)));
    let i = 0;
    let o = 0;
    while(o < t.length){
        let u = n - i;
        if (u <= 0) {
            break;
        }
        let c = u < r.length ? r.subarray(0, u) : r;
        let { read, written } = e.encodeInto(t.slice(o), c);
        if (read === 0) {
            break;
        }
        o += read;
        i += written;
    }
    if (o >= t.length) {
        return t;
    }
    return t.slice(0, o);
}
function y2n(t, n = "") {
    let e = (t.match(/`+/g) ?? []).reduce((acc, item)=>Math.max(acc, item.length), 0);
    let r = "`".repeat(Math.max(3, e + 1));
    return `${r}${n.replace(/[`\s].*$/s, "")}
${t}
${r}`;
}
export { Ei, ml, Ca, I, xPe, Ms, ne, jl, c6, MDt, Yc, yf, Ww, yBe, g2n, Qe, HDt, PPe, Tr, Lt, v9, d6, txr, Mon, Hon, _c, $O, Lse, eG, Nr, FP, dy, rU, tp, MH, Cq, HH, h2n, Lpe, y2n };
