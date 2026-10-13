import { $o } from "/$bunfs/root/chunk-bd805sh6.js";
const A = /^[\t\n\r ]*[[{]/;
function w_e(e, i, n = i) {
    if (!A.test(e)) {
        return {
            members: 0,
            outsideStringsOnly: true
        };
    }
    let t = 0;
    let r = e.indexOf(":");
    while(r !== -1 && t <= n){
        t++;
        r = e.indexOf(":", r + 1);
    }
    if (t <= n) {
        return {
            members: t,
            outsideStringsOnly: false
        };
    }
    let o = 0;
    for(let s = 0; s < e.length; s++){
        let u = e.charCodeAt(s);
        if (u === 58) {
            if (++o > i) {
                return;
            }
        } else if (u === 34) {
            for(s++; s < e.length; s++){
                let f = e.charCodeAt(s);
                if (f === 34) {
                    break;
                }
                if (f === 92) {
                    s++;
                }
            }
        }
    }
    return {
        members: o,
        outsideStringsOnly: true
    };
}
function mDn(e, i) {
    if (!A.test(e)) {
        return true;
    }
    let n = 0;
    for (let r of [
        "[",
        "{"
    ]){
        let o = e.indexOf(r);
        while(o !== -1 && n <= i){
            n++;
            o = e.indexOf(r, o + 1);
        }
    }
    if (n <= i) {
        return true;
    }
    let t = 0;
    for(let r = 0; r < e.length; r++){
        let o = e.charCodeAt(r);
        if (o === 91 || o === 123) {
            if (++t > i) {
                return false;
            }
        } else if (o === 93 || o === 125) {
            t--;
        } else if (o === 34) {
            for(r++; r < e.length; r++){
                let s = e.charCodeAt(r);
                if (s === 34) {
                    break;
                }
                if (s === 92) {
                    r++;
                }
            }
        }
    }
    return true;
}
function Hps(e, i, n) {
    let e_length = e.length;
    let r = 0;
    for(let o = 0; o < e.length && e_length <= n; o++){
        let s = e.charCodeAt(o);
        if (s === 34) {
            o = R(e, o);
        } else if (s === 91 || s === 123) {
            let u = e.charCodeAt(o + 1);
            if (u === 93 || u === 125) {
                o++;
            } else {
                e_length += 1 + i * ++r;
            }
        } else if (s === 93 || s === 125) {
            e_length += 1 + i * --r;
        } else if (s === 44) {
            e_length += 1 + i * r;
        } else if (s === 58) {
            e_length++;
        }
    }
    return e_length <= n;
}
const Dps = 64;
function R(e, i) {
    for(let n = e.indexOf('"', i + 1); n !== -1; n = e.indexOf('"', n + 1)){
        let t = 0;
        while(e.charCodeAt(n - 1 - t) === 92){
            t++;
        }
        if (t % 2 === 0) {
            return n;
        }
    }
    return e.length - 1;
}
function wst(e, i) {
    let n = new Map;
    if (g(e, (t, r, o)=>{
        if (i.has(t)) {
            n.set(t, e.slice(r, o));
        }
    })) {
        return n;
    }
}
function Lps(e, i) {
    let n = [];
    let t = 0;
    if (g(e, (r, o, s)=>{
        let u = e.slice(o, s);
        let f = i(r, u);
        if (f !== u) {
            n.push(e.slice(t, o), f);
            t = s;
        }
    })) {
        return n.join("") + e.slice(t);
    }
}
function g(e, i) {
    let n = c(e, 0);
    if (e.charCodeAt(n) !== a) {
        return false;
    }
    n = c(e, n + 1);
    if (e.charCodeAt(n) === d) {
        return C(e, n + 1);
    }
    while(true){
        if (e.charCodeAt(n) !== l) {
            return false;
        }
        let t = h(e, n);
        if (t === -1) {
            return false;
        }
        let r = e.slice(n + 1, t - 1);
        if (r.includes("\\")) {
            try {
                let u = $o(e.slice(n, t));
                if (typeof u !== "string") {
                    return false;
                }
                r = u;
            } catch  {
                return false;
            }
        }
        n = c(e, t);
        if (e.charCodeAt(n) !== p) {
            return false;
        }
        n = c(e, n + 1);
        let o = _(e, n);
        if (o === -1) {
            return false;
        }
        i(r, n, o);
        n = c(e, o);
        let s = e.charCodeAt(n);
        if (s === b) {
            n = c(e, n + 1);
            continue;
        }
        if (s === d) {
            return C(e, n + 1);
        }
        return false;
    }
}
var l = 34;
const O = 92;
var b = 44;
var p = 58;
var a = 123;
var d = 125;
const E = 91;
const T = 93;
function m(e) {
    return e === 32 || e === 9 || e === 10 || e === 13;
}
function c(e, i) {
    while(m(e.charCodeAt(i))){
        i++;
    }
    return i;
}
function C(e, i) {
    return c(e, i) === e.length;
}
function h(e, i) {
    let n = i;
    while(true){
        n = e.indexOf('"', n + 1);
        if (n === -1) {
            return -1;
        }
        let t = 0;
        while(e.charCodeAt(n - 1 - t) === O){
            t++;
        }
        if ((t & 1) === 0) {
            return n + 1;
        }
    }
}
function _(e, i) {
    let n = e.charCodeAt(i);
    if (n === l) {
        return h(e, i);
    }
    if (n === a || n === E) {
        return B(e, i);
    }
    let t = i;
    while(t < e.length){
        let r = e.charCodeAt(t);
        if (r === b || r === d || r === T || m(r)) {
            break;
        }
        t++;
    }
    if (t === i) {
        return -1;
    }
    return t;
}
function B(e, i) {
    let n = 0;
    let t = i;
    while(t < e.length){
        let r = e.charCodeAt(t);
        if (r === l) {
            t = h(e, t);
            if (t === -1) {
                return -1;
            }
            continue;
        }
        if (r === a || r === E) {
            n++;
        } else if (r === d || r === T) {
            n--;
            if (n === 0) {
                return t + 1;
            }
        }
        t++;
    }
    return -1;
}
export { w_e, mDn, Hps, Dps, wst, Lps };
