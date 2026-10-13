import { ho } from "/$bunfs/root/chunk-wew3321y.js";
function Ruo(n, { maxLines = 2000 } = {}) {
    let e = [];
    pxt(n, {
        entry (c, s, t) {
            if (t !== undefined && t !== "" && c !== null && E(c) && (s === "url" || s === "pushurl")) {
                e.push(t);
            }
        }
    }, {
        maxLines
    });
    return e;
}
function E({ name, quoted }) {
    if (quoted) {
        return name === "remote" || name.startsWith("remote.");
    }
    let e = name.indexOf(".");
    return e !== -1 && name.slice(0, e) === "remote";
}
function pxt(n, i, { maxLines = 2000 } = {}) {
    let s = (n.codePointAt(0) === 65279 ? n.slice(1) : n).split(/\r\n|\n/).slice(0, maxLines);
    let t = null;
    let u = ()=>{
        t = null;
        i.malformed?.();
    };
    let l = 0;
    while(l < s.length){
        let r = s[l] ?? "";
        l++;
        let o = h(r, 0);
        let d = false;
        while(r[o] === "["){
            let p = I(r, o);
            if (p === null) {
                u();
                d = true;
                break;
            }
            t = {
                name: p.name,
                quoted: p.quoted
            };
            i.header?.(t);
            o = h(r, p.end);
        }
        if (d) {
            continue;
        }
        let a = r[o];
        if (a === undefined || a === "#" || a === ";") {
            continue;
        }
        if (!O(a)) {
            u();
            continue;
        }
        let f = o;
        while(o < r.length && b(r[o] ?? "")){
            o++;
        }
        let v = r.slice(f, o).toLowerCase();
        while(o < r.length && (r[o] === " " || r[o] === "\t")){
            o++;
        }
        if (o >= r.length) {
            i.entry?.(t, v, undefined);
            continue;
        }
        if (r[o] !== "=") {
            u();
            continue;
        }
        let g = C(r, o + 1, s, l);
        l = g.nextLineIndex;
        if (g.value === null) {
            u();
            continue;
        }
        i.entry?.(t, v, g.value);
    }
}
function I(n, i) {
    let e = i + 1;
    let c = e;
    while(e < n.length){
        let t = n[e];
        if (t === undefined || !(b(t) || t === ".")) {
            break;
        }
        e++;
    }
    let s = n.slice(c, e);
    if (n[e] === "]") {
        if (s === "") {
            return null;
        }
        return {
            name: s.toLowerCase(),
            quoted: false,
            end: e + 1
        };
    }
    if (n[e] !== " " && n[e] !== "\t" && n[e] !== "\r") {
        return null;
    }
    e = h(n, e);
    if (n[e] !== '"') {
        return null;
    }
    e++;
    while(true){
        if (e >= n.length) {
            return null;
        }
        let t = n[e];
        if (t === "\\") {
            e += 2;
            continue;
        }
        e++;
        if (t === '"') {
            break;
        }
    }
    if (n[e] !== "]") {
        return null;
    }
    return {
        name: s.toLowerCase(),
        quoted: true,
        end: e + 1
    };
}
function C(n, i, e, c) {
    let s = n;
    let nextLineIndex = c;
    let u = "";
    let l = "";
    let r = false;
    let o = i;
    while(true){
        if (o >= s.length) {
            if (r) {
                return {
                    value: null,
                    nextLineIndex
                };
            }
            break;
        }
        let a = s[o];
        if (!r && (a === " " || a === "\t" || a === "\r")) {
            if (u !== "") {
                l += " ";
            }
            o++;
            continue;
        }
        if (!r && (a === ";" || a === "#")) {
            break;
        }
        u += l;
        l = "";
        if (a === "\\") {
            if (o + 1 >= s.length) {
                if (nextLineIndex >= e.length) {
                    return {
                        value: null,
                        nextLineIndex
                    };
                }
                s = e[nextLineIndex] ?? "";
                nextLineIndex++;
                o = 0;
                continue;
            }
            let f;
            switch(s[o + 1]){
                case "\\":
                    f = "\\";
                    break;
                case '"':
                    f = '"';
                    break;
                case "n":
                    f = `
`;
                    break;
                case "t":
                    f = "\t";
                    break;
                case "b":
                    f = "\b";
                    break;
                default:
                    return {
                        value: null,
                        nextLineIndex
                    };
            }
            u += f;
            o += 2;
            continue;
        }
        if (a === '"') {
            r = !r;
            o++;
            continue;
        }
        u += a;
        o++;
    }
    let d = u.indexOf("\x00");
    return {
        value: d === -1 ? u : u.slice(0, d),
        nextLineIndex
    };
}
function h(n, i) {
    while(i < n.length && (n[i] === " " || n[i] === "\t" || n[i] === "\r")){
        i++;
    }
    return i;
}
function O(n) {
    return n >= "a" && n <= "z" || n >= "A" && n <= "Z";
}
function b(n) {
    return O(n) || n >= "0" && n <= "9" || n === "-";
}
const _ = "anthropics";
const m = "anthropic";
const sn = `github.com/${_}/${m}`;
const an = new RegExp(`${_}[^]*${m}`);
const un = new RegExp(`^${m}(?:\\.git)*$`);
function Bhs() {}
function RNn(n) {
    return ho(n.host) && n.owner.toLowerCase() === _ && n.name.toLowerCase() === m;
}
export { Ruo, pxt, Bhs, RNn };
