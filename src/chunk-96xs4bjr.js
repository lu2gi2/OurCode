import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { _, X, CPe, b9, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Ms, yf } from "/$bunfs/root/chunk-qch5xj2a.js";
import { hO, h1, aC } from "/$bunfs/root/chunk-k3tkc302.js";
import { k, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { randomInt } from "crypto";
function yjo() {
    return k("tengu_harbor_permissions", false);
}
function q() {
    return Gr("tengu_quiet_elephant", true);
}
const B = "abcdefghijkmnopqrstuvwxyz";
const H = [
    "fuck",
    "shit",
    "cunt",
    "cock",
    "dick",
    "twat",
    "piss",
    "crap",
    "bitch",
    "whore",
    "ass",
    "tit",
    "cum",
    "fag",
    "dyke",
    "nig",
    "kike",
    "rape",
    "nazi",
    "damn",
    "poo",
    "pee",
    "wank",
    "anus"
];
function N(n) {
    let e = 2166136261;
    for(let r = 0; r < n.length; r++){
        e ^= n.charCodeAt(r);
        e = Math.imul(e, 16777619);
    }
    e = e >>> 0;
    let o = "";
    for(let r = 0; r < 5; r++){
        o += B[e % 25];
        e = Math.floor(e / 25);
    }
    return o;
}
function _jo(n) {
    if (!q()) {
        return K(n);
    }
    let e = "";
    for(let o = 0; o <= 10; o++){
        e = "";
        for(let r = 0; r < 5; r++){
            e += B[randomInt(B.length)];
        }
        if (!H.some((r)=>e.includes(r))) {
            return e;
        }
    }
    return e;
}
function K(n) {
    let e = N(n);
    for(let o = 0; o < 10; o++){
        if (!H.some((r)=>e.includes(r))) {
            return e;
        }
        e = N(`${n}:${o}`);
    }
    return e;
}
const U = 3500;
const w = 2000;
const E = 1500;
const L = 15000;
const z = 30000;
function sBt(n) {
    return R(f(n).replace(/\s+/g, " ").trim());
}
function R(n) {
    let e = Array.from(n);
    if (e.length <= U) {
        return n;
    }
    let o = e.length - w - E;
    return e.slice(0, w).join("") + `
\u22EF ${o} ${I(o, "code point")} elided \u22EF
` + e.slice(e.length - E).join("");
}
function f(n) {
    return Array.from(yf(n), (e)=>{
        if (aC(e.codePointAt(0) ?? 0)) {
            return " ";
        }
        return e;
    }).join("").replace(hO, "·").replace(V, "·").replace(W, "·").replace(h1, " ");
}
var V = /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g;
var W = /[\u02C2\u02C3\uFE64\uFE65\uFF1C\uFF1E]/g;
function A(n) {
    return v(_(n)).replace(/\s/g, " ");
}
function T(n, e, o) {
    let r = n;
    let s = A(n);
    if (e.has(s)) {
        let i = s;
        let a = o.get(i) ?? 2;
        r = `${n}#${a}`;
        s = A(r);
        while(e.has(s)){
            a++;
            r = `${n}#${a}`;
            s = A(r);
        }
        o.set(i, a + 1);
    }
    e.add(s);
    return r;
}
function C(n) {
    if (Array.isArray(n)) {
        return n.map(C);
    }
    if (n !== null && typeof n === "object") {
        let e = Object.create(null);
        let o = new Set;
        let r = new Map;
        for (let [s, i] of Object.entries(n)){
            e[T(CPe(s), o, r)] = C(i);
        }
        return e;
    }
    return n;
}
const Y = 32000;
const Q = 2000000;
function M(n) {
    if (n === null || typeof n !== "object") {
        return false;
    }
    let e = Q;
    let o = [
        {
            node: n,
            depth: 1
        }
    ];
    while(o.length > 0){
        let r = o.pop();
        let { depth, node } = r;
        if (depth >= Y) {
            return true;
        }
        if (typeof node.toJSON === "function") {
            e -= 1;
            if (e < 0) {
                return true;
            }
            let l;
            try {
                l = node.toJSON();
            } catch  {
                return true;
            }
            if (l === null || typeof l !== "object") {
                continue;
            }
            node = l;
        }
        if (Array.isArray(node)) {
            e -= node.length;
            if (e < 0) {
                return true;
            }
        }
        for (let l of Object.keys(node)){
            e -= 1;
            if (e < 0) {
                return true;
            }
            let p = node[l];
            if (p !== null && typeof p === "object") {
                o.push({
                    node: p,
                    depth: depth + 1
                });
            }
        }
    }
    return false;
}
function bjo(n) {
    try {
        if (n !== null && typeof n === "object" && !Array.isArray(n)) {
            let s = [];
            let i = 0;
            let a = [];
            let l = new Set;
            let p = new Map;
            for (let g of Object.keys(n)){
                let h;
                let m;
                let y = false;
                try {
                    h = n[g];
                    if (M(h)) {
                        y = true;
                    } else {
                        m = _(h);
                    }
                } catch  {
                    y = true;
                }
                if (m === undefined) {
                    if (!y) {
                        continue;
                    }
                    let F = T(CPe(g), l, p);
                    t("truncateForPreview: field serialization threw (depth) — rendering a loud unserializable marker", {
                        level: "error"
                    });
                    let b = f(_(F)).replace(/\s+/g, " ");
                    let P = Ms(b, 50);
                    let O = P.length < b.length ? `${P}…` : P;
                    if (i >= L) {
                        a.push(O);
                        continue;
                    }
                    let j = `${O}: (value unserializable)`;
                    i += Array.from(j).length;
                    s.push(j);
                    continue;
                }
                let d = T(CPe(g), l, p);
                if (i >= L) {
                    let F = f(_(d)).replace(/\s+/g, " ");
                    let b = Ms(F, 50);
                    a.push(b.length < F.length ? `${b}…` : b);
                    continue;
                }
                let u;
                let x = false;
                try {
                    u = _(C(b9({
                        [g]: X(m)
                    }, CPe)[g]));
                } catch  {
                    x = true;
                }
                if (u === undefined) {
                    if (x) {
                        t(`truncateForPreview: redaction round-trip threw for field ${_(d)} \u2014 rendering unredacted`, {
                            level: "error"
                        });
                    } else {
                        t(`truncateForPreview: redaction round-trip yielded no text for field ${_(d)} \u2014 rendering unredacted`, {
                            level: "error"
                        });
                        c(Error("truncateForPreview: redaction round-trip yielded no text for a field — rendering unredacted"));
                    }
                }
                let J = u === undefined ? m : u;
                let D = `${v(_(d))}: ${v(J)}`;
                i += Array.from(D).length;
                s.push(D);
            }
            let S = "";
            if (a.length > 0) {
                let h = Math.floor(z / 10);
                if (a.length <= h) {
                    let m = Math.max(8, Math.floor(z / a.length) - 2);
                    let y = a.map((d)=>{
                        let u = Ms(d, m);
                        if (u.length < d.length) {
                            return `${u}…`;
                        }
                        return u;
                    });
                    S = `
\u22EF ${a.length} ${I(a.length, "field")} elided: ${y.join(", ")} \u22EF
`;
                } else {
                    S = `
\u22EF ${a.length} ${I(a.length, "field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22EF
`;
                }
            }
            return `{ ${s.join(", ")} }${S}`;
        }
        let e;
        try {
            if (M(n)) {
                t("truncateForPreview: non-object input exceeds the serialization depth probe — rendering a loud unserializable marker", {
                    level: "error"
                });
                return "(value unserializable)";
            }
            e = _(n);
        } catch  {
            t("truncateForPreview: non-object input serialization threw — rendering a loud unserializable marker", {
                level: "error"
            });
            return "(value unserializable)";
        }
        if (e === undefined) {
            return "(unserializable)";
        }
        let o;
        let r = false;
        try {
            o = _(C(b9(X(e), CPe)));
        } catch  {
            r = true;
        }
        if (o === undefined) {
            if (r) {
                t("truncateForPreview: non-object redaction round-trip threw — rendering unredacted", {
                    level: "error"
                });
            } else {
                t("truncateForPreview: non-object redaction round-trip failed — rendering unredacted", {
                    level: "error"
                });
                c(Error("truncateForPreview: non-object redaction round-trip failed — rendering unredacted"));
            }
            o = e;
        }
        return R(f(o).replace(/\s{2,}/g, " "));
    } catch  {
        return "(unserializable)";
    }
}
function v(n) {
    if (n.length <= 100000) {
        return R(f(n).replace(/\s{2,}/g, " "));
    }
    let e = 0;
    for (let a of n){
        e++;
    }
    let o = f(Ms(n.slice(0, w * 2 + 1), w)).replace(/\s{2,}/g, " ");
    let r = Array.from(yf(n.slice(-(E * 2 + 1))));
    let s = f(r.slice(-E).join("")).replace(/\s{2,}/g, " ");
    let i = e - w - E;
    return o + `
\u22EF ${i} ${I(i, "code point")} elided \u22EF
` + s;
}
function bht(n, e) {
    return !!n?.experimental?.[e];
}
function Sjo(n, e, o) {
    return n.filter((r)=>r.type === "connected" && e(r.name) && bht(r.capabilities, "claude/channel") && bht(r.capabilities, "claude/channel/permission") && o(r.name) && r.protocolEra !== "modern");
}
function wjo(isServerRegistered) {
    let e = new Map;
    let o = new Set;
    return {
        isServerRegistered,
        onResponse (r, s) {
            let i = r.toLowerCase();
            if (q()) {
                if (o.has(i)) {
                    e.delete(i);
                    t("Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored — answer in the terminal", {
                        level: "warn"
                    });
                    return ()=>{};
                }
                o.add(i);
            }
            e.set(i, s);
            return ()=>{
                e.delete(i);
            };
        },
        resolve (r, behavior, fromServer) {
            let a = r.toLowerCase();
            let l = e.get(a);
            if (!l) {
                return false;
            }
            e.delete(a);
            l({
                behavior,
                fromServer
            });
            return true;
        }
    };
}
export { yjo, _jo, sBt, bjo, bht, Sjo, wjo };
