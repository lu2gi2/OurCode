import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Cu } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { MO, Yz, a8e } from "/$bunfs/root/chunk-svqqgdca.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstat, realpath, open, readdir, stat, unlink } from "fs/promises";
import { resolve, sep, join } from "path";
const re = (e)=>e === "a" || e === "e" || e === "i" || e === "o" || e === "u";
const se = (e, t)=>{
    let n = e[t];
    if (re(n)) {
        return true;
    }
    if (n !== "y") {
        return false;
    }
    let o = t;
    while(o > 0 && e[o - 1] === "y"){
        o--;
    }
    let s = o === 0 ? true : re(e[o - 1]);
    if ((t - o) % 2 === 0) {
        return !s;
    }
    return s;
};
const G = (e)=>{
    let t = 0;
    let n = false;
    for(let o = 0; o < e.length; o++){
        let s = e[o];
        let r = re(s) || s === "y" && o > 0 && !n;
        if (!r && n) {
            t++;
        }
        n = r;
    }
    return t;
};
const Be = (e)=>{
    let t = false;
    for(let n = 0; n < e.length; n++){
        let o = e[n];
        t = re(o) || o === "y" && n > 0 && !t;
        if (t) {
            return true;
        }
    }
    return false;
};
const We = (e)=>e.length >= 2 && e.at(-1) === e.at(-2) && !se(e, e.length - 1);
const je = (e)=>{
    if (e.length < 3) {
        return false;
    }
    let t = e.at(-1);
    return !se(e, e.length - 3) && se(e, e.length - 2) && !se(e, e.length - 1) && t !== "w" && t !== "x" && t !== "y";
};
const Le = (e, t)=>{
    for (let [n, o, s] of t){
        if (!e.endsWith(n)) {
            continue;
        }
        let r = e.slice(0, e.length - n.length);
        if (G(r) > s) {
            return r + o;
        }
        return e;
    }
    return e;
};
const Nt = (e)=>{
    if (e.endsWith("sses")) {
        return e.slice(0, -2);
    }
    if (e.endsWith("ies")) {
        return e.slice(0, -2);
    }
    if (e.endsWith("ss")) {
        return e;
    }
    if (e.endsWith("s")) {
        return e.slice(0, -1);
    }
    return e;
};
const Ct = (e)=>{
    if (e.endsWith("eed")) {
        let o = e.slice(0, -3);
        if (G(o) > 0) {
            return e.slice(0, -1);
        }
        return e;
    }
    let t = e.endsWith("ed") ? e.slice(0, -2) : e.endsWith("ing") ? e.slice(0, -3) : undefined;
    if (t === undefined || !Be(t)) {
        return e;
    }
    if (t.endsWith("at") || t.endsWith("bl") || t.endsWith("iz")) {
        return `${t}e`;
    }
    let n = t.at(-1);
    if (We(t) && n !== "l" && n !== "s" && n !== "z") {
        return t.slice(0, -1);
    }
    if (G(t) === 1 && je(t)) {
        return `${t}e`;
    }
    return t;
};
const _t = (e)=>{
    if (e.endsWith("y") && Be(e.slice(0, -1))) {
        return `${e.slice(0, -1)}i`;
    }
    return e;
};
const Lt = [
    [
        "ational",
        "ate",
        0
    ],
    [
        "tional",
        "tion",
        0
    ],
    [
        "enci",
        "ence",
        0
    ],
    [
        "anci",
        "ance",
        0
    ],
    [
        "izer",
        "ize",
        0
    ],
    [
        "abli",
        "able",
        0
    ],
    [
        "bli",
        "ble",
        0
    ],
    [
        "alli",
        "al",
        0
    ],
    [
        "entli",
        "ent",
        0
    ],
    [
        "eli",
        "e",
        0
    ],
    [
        "ousli",
        "ous",
        0
    ],
    [
        "ization",
        "ize",
        0
    ],
    [
        "ation",
        "ate",
        0
    ],
    [
        "ator",
        "ate",
        0
    ],
    [
        "alism",
        "al",
        0
    ],
    [
        "iveness",
        "ive",
        0
    ],
    [
        "fulness",
        "ful",
        0
    ],
    [
        "ousness",
        "ous",
        0
    ],
    [
        "aliti",
        "al",
        0
    ],
    [
        "iviti",
        "ive",
        0
    ],
    [
        "biliti",
        "ble",
        0
    ],
    [
        "logi",
        "log",
        0
    ]
];
const Bt = [
    [
        "icate",
        "ic",
        0
    ],
    [
        "ative",
        "",
        0
    ],
    [
        "alize",
        "al",
        0
    ],
    [
        "iciti",
        "ic",
        0
    ],
    [
        "ical",
        "ic",
        0
    ],
    [
        "ful",
        "",
        0
    ],
    [
        "ness",
        "",
        0
    ]
];
const Wt = [
    "al",
    "ance",
    "ence",
    "er",
    "ic",
    "able",
    "ible",
    "ant",
    "ement",
    "ment",
    "ent",
    "ion",
    "ou",
    "ism",
    "ate",
    "iti",
    "ous",
    "ive",
    "ize"
];
const jt = (e)=>{
    for (let t of Wt){
        if (!e.endsWith(t)) {
            continue;
        }
        let n = e.slice(0, e.length - t.length);
        let o = t !== "ion" || n.endsWith("s") || n.endsWith("t");
        if (G(n) > 1 && o) {
            return n;
        }
        return e;
    }
    return e;
};
const Ut = (e)=>{
    if (!e.endsWith("e")) {
        return e;
    }
    let t = e.slice(0, -1);
    let n = G(t);
    if (n > 1) {
        return t;
    }
    if (n === 1 && !je(t)) {
        return t;
    }
    return e;
};
const Ht = (e)=>{
    if (G(e) > 1 && We(e) && e.endsWith("l")) {
        return e.slice(0, -1);
    }
    return e;
};
const Gt = (e)=>{
    if (e.length <= 2) {
        return e;
    }
    let t = Nt(e);
    t = Ct(t);
    t = _t(t);
    t = Le(t, Lt);
    t = Le(t, Bt);
    t = jt(t);
    t = Ut(t);
    t = Ht(t);
    return t;
};
const Ue = MO(Gt, (e)=>e, 50000);
const eo = Yz(Ue.cache);
const be = (text)=>{
    if (text.length <= 2) {
        return text;
    }
    return Ue(text);
};
const Qt = /[\p{L}\p{M}\p{N}]+/gu;
const ae = (e)=>e >= "A" && e <= "Z";
const Se = (e)=>e >= "a" && e <= "z";
const xe = (e)=>e >= "0" && e <= "9";
const He = (e)=>ae(e) || Se(e);
const $t = (e)=>{
    let t = [];
    let n = 0;
    for(let o = 1; o < e.length; o++){
        let s = e[o - 1] ?? "";
        let r = e[o] ?? "";
        let i = e[o + 1] ?? "";
        let a = i === "s" && o + 2 === e.length;
        if ((Se(s) || xe(s)) && ae(r) || ae(s) && ae(r) && Se(i) && !a || He(s) && xe(r) || xe(s) && He(r)) {
            t.push(e.slice(n, o));
            n = o;
        }
    }
    t.push(e.slice(n));
    return t;
};
const de = (e)=>e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const Ge = (text)=>/^[a-z]+$/.test(text);
const Qe = (e)=>{
    let t = $t(e);
    if (t.length > 1) {
        return [
            {
                text: e,
                compound: true
            },
            ...t.map((n)=>({
                    text: n,
                    compound: false
                }))
        ];
    }
    return [
        {
            text: e,
            compound: false
        }
    ];
};
const q = String.raw`(^|[^\p{L}\p{N}]|[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])`;
const ie = String.raw`(?!(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}])`;
const Vt = [
    [
        new RegExp(q + String.raw`[cC]\+\+` + ie, "gu"),
        " cpp "
    ],
    [
        new RegExp(q + String.raw`[cC]#` + ie, "gu"),
        " csharp "
    ],
    [
        new RegExp(q + String.raw`[fF]#` + ie, "gu"),
        " fsharp "
    ],
    [
        new RegExp(q + String.raw`\.[nN][eE][tT]` + ie, "gu"),
        " dotnet "
    ]
];
const Kt = new RegExp(q + String.raw`([vV]?\d+(?:\.\d+)+)`, "gu");
const Yt = /^(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}]/u;
const N = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/;
const Xt = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+|[^\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+/gu;
const Jt = (e)=>{
    let t = [
        ...e
    ];
    if (t.length <= 2) {
        return [
            e
        ];
    }
    let n = [
        e
    ];
    for(let o = 0; o < t.length - 1; o++){
        n.push(t[o] + t[o + 1]);
    }
    return n;
};
const Zt = /[\uFF66-\uFF9F]/;
const $e = /^\p{N}+$/u;
const qt = (e)=>{
    let t = [];
    let n = false;
    let o = false;
    for (let s of e){
        let r = t.at(-1);
        if (r !== undefined && $e.test(s) && o) {
            r.push(s);
            n = true;
            continue;
        }
        if (r !== undefined && n && N.test(s)) {
            r.push(s);
            n = false;
            o = true;
            continue;
        }
        t.push([
            s
        ]);
        n = $e.test(s);
        o = N.test(s);
    }
    return t.map((s)=>{
        if (s.length === 1) {
            return s[0];
        }
        return s.join("");
    });
};
const Ve = /^\p{L}$/u;
const en = (e)=>{
    let t = [];
    for (let n of e){
        let o = t.at(-1);
        let s = Ve.test(n) && !N.test(n);
        if (o !== undefined) {
            let r = o.at(-1);
            if (s && N.test(r)) {
                o.push(n);
                continue;
            }
            if (N.test(n) && Ve.test(r) && !N.test(r)) {
                o.push(n);
                continue;
            }
        }
        t.push([
            n
        ]);
    }
    return t.map((n)=>{
        if (n.length === 1) {
            return n[0];
        }
        return n.join("");
    });
};
const tn = (e)=>{
    let t = [];
    for(let n = 0; n < e.length; n++){
        let o = e[n];
        if (!N.test(o) || [
            ...o
        ].length !== 1) {
            continue;
        }
        let s = n > 0 ? e[n - 1] : undefined;
        let r = n + 1 < e.length ? e[n + 1] : undefined;
        let i = s !== undefined && !N.test(s) && [
            ...de(s)
        ].length > 1 ? s + o : r !== undefined && !N.test(r) && [
            ...de(r)
        ].length > 1 ? o + r : undefined;
        if (i !== undefined) {
            t.push({
                text: i,
                compound: true
            });
        }
    }
    return t;
};
const ce = (e, t)=>{
    let n = e.replace(/\[\[([^[\]]*)\]\]/g, " $1 ");
    for (let [r, i] of Vt){
        n = n.replace(r, (a, c)=>c + i);
    }
    n = n.replace(Kt, (r, i, a, c, l)=>{
        let d = l.codePointAt(c + r.length);
        if (d !== undefined && Yt.test(String.fromCodePoint(d))) {
            return r;
        }
        return `${i}${a} ${a.replaceAll(".", "")}`;
    });
    let o = n.match(Qt) ?? [];
    let s = o.flatMap((r)=>{
        let i = Zt.test(r) ? r.normalize("NFKC") : r;
        if (N.test(i)) {
            let c = en(qt(i.match(Xt) ?? []));
            let l = t.compounds ? tn(c) : [];
            let d = c.flatMap((h)=>{
                if (!N.test(h)) {
                    let m = Qe(h);
                    if (t.compounds) {
                        return m;
                    }
                    return m.filter((g)=>!g.compound);
                }
                let u = Jt(h);
                let p = u.length > 1;
                let f = (h.match(/\p{N}{3,}/gu) ?? []).map((m)=>({
                        text: m,
                        compound: true
                    }));
                return [
                    ...u.map((m, g)=>({
                            text: m,
                            compound: p && g === 0
                        })),
                    ...f
                ].filter((m)=>!m.compound || t.compounds);
            });
            d.push(...l);
            return [
                ...d.filter((h)=>h.compound),
                ...d.filter((h)=>!h.compound)
            ];
        }
        let a = Qe(i);
        if (t.compounds) {
            return a;
        }
        return a.filter((c)=>!c.compound);
    }).map(({ text, compound })=>({
            text: de(text),
            compound
        })).filter(({ text })=>text.length > 1).flatMap(({ text, compound })=>{
        if (compound) {
            let c = t.dualStem && Ge(text) ? be(text) : text;
            if (c !== text) {
                return [
                    text,
                    c
                ];
            }
            return [
                text
            ];
        }
        if (!Ge(text)) {
            return [
                text
            ];
        }
        let a = be(text);
        if (t.dualStem && a !== text) {
            return [
                a,
                text
            ];
        }
        return [
            a
        ];
    });
    if (s.length > 0 || o.length === 0 || t.singleCharFallback === false) {
        return s;
    }
    return o.map(de);
};
const j = (e)=>ce(e, {
        dualStem: false,
        compounds: true
    });
const Ie = (e)=>ce(e, {
        dualStem: false,
        compounds: true,
        singleCharFallback: false
    });
const Q = (e)=>ce(e, {
        dualStem: true,
        compounds: true
    });
const Ke = (e)=>ce(e, {
        dualStem: false,
        compounds: false
    });
const b = [
    "filename",
    "frontmatter",
    "headings",
    "body"
];
const nn = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;
const on = /^[\w-]+:/m;
const sn = /^#{1,6}\s+(.*)$/;
const rn = /^(`{3,}|~{3,})(.*)$/;
const an = (e)=>{
    let t = e.slice(e.lastIndexOf("/") + 1);
    let n = t.lastIndexOf(".");
    if (n > 0) {
        return t.slice(0, n);
    }
    return t;
};
const dn = (e)=>{
    let t = {
        headings: [],
        body: [
            []
        ]
    };
    let n;
    for (let o of e){
        let s = o.match(rn);
        if (s !== null) {
            let a = s[1];
            if (n === undefined) {
                n = a;
                t.body.at(-1).push(o);
                continue;
            }
            if (a[0] === n[0] && a.length >= n.length && s[2].trim() === "") {
                n = undefined;
                t.body.at(-1).push(o);
                continue;
            }
        }
        let i = n !== undefined ? undefined : o.match(sn)?.[1];
        if (i === undefined) {
            t.body.at(-1).push(o);
        } else {
            t.headings.push(i);
            t.body.push([]);
        }
    }
    return t;
};
const cn = (headings)=>{
    let t = headings.map((n)=>Ie(n)).filter((n)=>n.length > 0);
    if (t.length > 0) {
        return t.flatMap((n)=>[
                ...n,
                ""
            ]);
    }
    return j(headings.join(`
`));
};
const ln = (body)=>{
    let t = body.map((n)=>Ie(n.join(`
`))).filter((n)=>n.length > 0);
    if (t.length > 0) {
        return t.flatMap((n, o)=>{
            if (o === 0) {
                return n;
            }
            return [
                "",
                ...n
            ];
        });
    }
    return j(body.map((n)=>n.join(`
`)).join(`
`));
};
const we = (path, t)=>{
    let n = t.replace(/^\uFEFF/, "");
    let o = n.match(nn);
    let s = o !== null && on.test(o[1] ?? "");
    let r = s ? o[1] ?? "" : "";
    let i = s ? n.slice(o[0].length) : n;
    let { headings, body } = dn(i.split(/\r?\n/));
    return {
        path,
        fields: {
            filename: j(an(path)),
            frontmatter: j(r),
            headings: cn(headings),
            body: ln(body)
        }
    };
};
const b_length = b.length;
const le = Object.fromEntries(b.map((e, t)=>[
        e,
        t
    ]));
const V = 4294967295;
const Ye = ()=>Object.fromEntries(b.map((e)=>[
            e,
            0
        ]));
const ee = ()=>({
        terms: new Map,
        docs: new Map,
        pathToId: new Map,
        unverified: new Set,
        fieldLengthTotals: Ye(),
        fieldDocCounts: Ye(),
        nextDocId: 0
    });
const Fe = (e, t)=>{
    if (e.length >= t) {
        return e;
    }
    let n = new Uint32Array(Math.max(t, e.length * 2));
    n.set(e);
    return n;
};
const un = (e)=>{
    let t = new Map;
    b.forEach((n, o)=>{
        e.fields[n].forEach((s, r)=>{
            if (s === "") {
                return;
            }
            let i = t.get(s) ?? b.map(()=>[]);
            i[o].push(r);
            t.set(s, i);
        });
    });
    return t;
};
const Ee = (e, t, n, o)=>{
    let s = e.terms.get(t) ?? {
        docIds: new Uint32Array(2),
        offsets: new Uint32Array(2 * b_length + 1),
        positions: new Uint32Array(8),
        size: 0
    };
    let s_size = s.size;
    let i = s.offsets[b_length * s_size];
    let a = o.reduce((acc, item)=>acc + item.length, 0);
    if (i + a > V) {
        throw Error("position space exhausted");
    }
    if (s_size > 0 && s.docIds[s_size - 1] >= n) {
        throw Error("posting docId out of order");
    }
    s.docIds = Fe(s.docIds, s_size + 1);
    s.offsets = Fe(s.offsets, b_length * (s_size + 1) + 1);
    s.positions = Fe(s.positions, i + a);
    s.docIds[s_size] = n;
    let c = i;
    o.forEach((l, d)=>{
        s.offsets[b_length * s_size + d] = c;
        s.positions.set(l, c);
        c += l.length;
    });
    s.offsets[b_length * (s_size + 1)] = c;
    s.size = s_size + 1;
    if (s_size === 0) {
        e.terms.set(t, s);
    }
};
const fn = (e, t)=>{
    let n = e.offsets[b_length * t];
    let o = e.offsets[b_length * (t + 1)];
    let s = e.offsets[b_length * e.size];
    e.positions.copyWithin(n, o, s);
    e.docIds.copyWithin(t, t + 1, e.size);
    for(let r = b_length * (t + 1); r <= b_length * e.size; r++){
        e.offsets[r - b_length] = e.offsets[r] - (o - n);
    }
    e.size--;
};
const ue = (e, t)=>{
    let n = 0;
    let o = e.size - 1;
    while(n <= o){
        let s = n + o >> 1;
        let r = e.docIds[s];
        if (r === t) {
            return s;
        }
        if (r < t) {
            n = s + 1;
        } else {
            o = s - 1;
        }
    }
    return -1;
};
const K = (e)=>e.docIds.subarray(0, e.size);
const Xe = (e, t, item)=>e.offsets[b_length * t + le[item] + 1] - e.offsets[b_length * t + le[item]];
const te = (e, t, n)=>{
    let o = e.offsets[b_length * t + le[n]];
    let s = e.offsets[b_length * t + le[n] + 1];
    if (o === s) {
        return undefined;
    }
    return e.positions.subarray(o, s);
};
const Je = (index, t)=>index.terms.get(t)?.size ?? 0;
const Ze = (index, t)=>{
    let n = index.terms.get(t);
    if (n?.size === 1) {
        return n.docIds[0];
    }
};
const qe = (e)=>{
    e.docIds = e.docIds.slice(0, e.size);
    e.offsets = e.offsets.slice(0, b_length * e.size + 1);
    e.positions = e.positions.slice(0, e.offsets[b_length * e.size]);
};
const Pe = (e, t, n)=>{
    if (e.nextDocId > V) {
        throw Error("docId space exhausted");
    }
    if (e.pathToId.has(t.path)) {
        C(e, t.path);
    }
    let o = e.nextDocId++;
    for (let [r, i] of un(t)){
        Ee(e, r, o, i);
    }
    let s = Object.fromEntries(b.map((r)=>[
            r,
            F(t.fields[r], (i)=>i !== "")
        ]));
    for (let r of b){
        e.fieldLengthTotals[r] += s[r];
        if (s[r] > 0) {
            e.fieldDocCounts[r]++;
        }
    }
    e.docs.set(o, {
        path: t.path,
        hash: n.hash,
        size: n.size,
        mtimeMs: n.mtimeMs,
        fieldLengths: s
    });
    e.pathToId.set(t.path, o);
    return o;
};
const et = (e, t, n)=>{
    for (let o of b){
        e.fieldLengthTotals[o] -= n.fieldLengths[o];
        if (n.fieldLengths[o] > 0) {
            e.fieldDocCounts[o]--;
        }
    }
    e.docs.delete(t);
    e.pathToId.delete(n.path);
    e.unverified.delete(t);
};
const tt = (e, t, n)=>{
    for (let [o, s] of e.terms){
        let r = ue(s, t);
        if (r < 0) {
            continue;
        }
        fn(s, r);
        if (s.size === 0) {
            e.terms.delete(o);
        }
    }
    et(e, t, n);
};
var C = (e, t)=>{
    let n = e.pathToId.get(t);
    let o = n === undefined ? undefined : e.docs.get(n);
    if (n === undefined || o === undefined) {
        return false;
    }
    tt(e, n, o);
    return true;
};
const pn = (e, t)=>{
    let n = 0;
    while(n < e.size && !t.has(e.docIds[n])){
        n++;
    }
    if (n === e.size) {
        return;
    }
    let o = n;
    let s = e.offsets[b_length * n];
    for(; n < e.size; n++){
        let r = e.docIds[n];
        let i = e.offsets[b_length * n];
        let a = e.offsets[b_length * (n + 1)];
        if (t.has(r)) {
            continue;
        }
        let c = i - s;
        e.positions.copyWithin(s, i, a);
        e.docIds[o] = r;
        for(let l = 0; l < b_length; l++){
            e.offsets[b_length * o + l] = e.offsets[b_length * n + l] - c;
        }
        s += a - i;
        o++;
    }
    e.offsets[b_length * o] = s;
    e.size = o;
};
const mn = 16;
const nt = (e, t)=>{
    let n = new Map;
    for (let s of t){
        let r = e.pathToId.get(s);
        let i = r === undefined ? undefined : e.docs.get(r);
        if (r !== undefined && i !== undefined) {
            n.set(r, i);
        }
    }
    if (n.size < mn) {
        for (let [s, r] of n){
            tt(e, s, r);
        }
        return n.size;
    }
    let o = new Set(n.keys());
    for (let [s, r] of e.terms){
        pn(r, o);
        if (r.size === 0) {
            e.terms.delete(s);
        }
    }
    for (let [s, r] of n){
        et(e, s, r);
    }
    return n.size;
};
const ot = (index)=>({
        docCount: index.docs.size,
        avgFieldLength: Object.fromEntries(b.map((t)=>[
                t,
                index.fieldDocCounts[t] === 0 ? 0 : index.fieldLengthTotals[t] / index.fieldDocCounts[t]
            ]))
    });
const Re = {
    k1: 1.2,
    fieldWeights: {
        filename: 3,
        frontmatter: 3,
        headings: 2.5,
        body: 1
    },
    fieldB: {
        filename: 0.75,
        frontmatter: 0.75,
        headings: 0.75,
        body: 0.75
    },
    proximityWeight: 0,
    phraseBoost: 0.5
};
const rt = (e)=>{
    let t = Ke(e);
    if (t.length === 0) {
        return [];
    }
    let n = j(e);
    let o = [];
    let s = [];
    let r = 0;
    for (let i of n){
        if (r < t.length && i === t[r]) {
            s.push(i);
            r++;
            continue;
        }
        if (s.length > 0) {
            o.push(s);
            s = [];
        }
    }
    if (s.length > 0) {
        o.push(s);
    }
    for(; r < t.length; r++){
        o.push([
            t[r]
        ]);
    }
    return o;
};
const Ae = (e)=>{
    let phrases = ((e.match(/"/g) ?? []).length & 1) === 0 ? [
        ...e.matchAll(/"([^"]*)"/g)
    ].flatMap((o)=>rt(o[1] ?? "")).filter((o)=>o.length > 1 && o.every((s)=>s.length > 1)) : [];
    return {
        terms: D(Q(e)),
        phrases,
        boostPhrases: []
    };
};
const ve = (e, t)=>{
    let n = Math.log((e - t + 0.5) / (t + 0.5));
    if (n <= 0) {
        return 0.000001;
    }
    return n;
};
const hn = 0.7;
const gn = 16;
const it = (size)=>{
    if (size < gn) {
        return 0;
    }
    return hn * ve(size, 1);
};
const yn = (e, t, fieldLengths, avgFieldLength, s)=>b.reduce((acc, item)=>{
        let a = Xe(e, t, item);
        if (a === 0 || avgFieldLength[item] === 0) {
            return acc;
        }
        let c = s.fieldB[item];
        let l = 1 - c + c * fieldLengths[item] / avgFieldLength[item];
        return acc + s.fieldWeights[item] * a / l;
    }, 0);
const st = (index, t, n)=>{
    let o = n.map((s)=>at(index, s, t));
    if (o.some((s)=>s === undefined)) {
        return false;
    }
    return b.some((s)=>{
        let r = [];
        for (let c of o){
            let l = c === undefined ? undefined : te(c.entry, c.slot, s);
            if (l === undefined) {
                return false;
            }
            r.push(l);
        }
        let [i, ...a] = r;
        if (i === undefined) {
            return false;
        }
        return i.some((c)=>a.every((l, d)=>bn(l, c + d + 1)));
    });
};
var at = (e, t, n)=>{
    let entry = e.terms.get(t);
    let slot = entry === undefined ? -1 : ue(entry, n);
    if (entry === undefined || slot < 0) {
        return undefined;
    }
    return {
        entry,
        slot
    };
};
var bn = (e, t)=>{
    let n = 0;
    let o = e.length - 1;
    while(n <= o){
        let s = n + o >> 1;
        let r = e[s];
        if (r === t) {
            return true;
        }
        if (r < t) {
            n = s + 1;
        } else {
            o = s - 1;
        }
    }
    return false;
};
const dt = {
    span: Infinity,
    termCount: 0
};
const xn = (index, t, matchedTerms)=>{
    let o = matchedTerms.map((l)=>{
        let d = at(index, l, t);
        if (d === undefined) {
            return undefined;
        }
        return te(d.entry, d.slot, "body");
    }).filter((l)=>l !== undefined);
    if (o.length < 2) {
        return dt;
    }
    let s = o.flatMap((l, termIdx)=>Array.from(l, (pos)=>({
                pos,
                termIdx
            }))).sort((l, d)=>l.pos - d.pos);
    let r = new Map;
    let i = [];
    let a = 0;
    let span = Infinity;
    for (let l of s){
        i.push(l);
        let d = r.get(l.termIdx) ?? 0;
        r.set(l.termIdx, d + 1);
        if (d === 0) {
            a++;
        }
        while(a === o.length){
            let h = i.shift();
            if (h === undefined) {
                break;
            }
            span = Math.min(span, l.pos - h.pos + 1);
            let u = r.get(h.termIdx) ?? 0;
            r.set(h.termIdx, u - 1);
            if (u === 1) {
                a--;
            }
        }
    }
    return {
        span,
        termCount: o.length
    };
};
const ct = (exact_terms, conceptual_keywords)=>{
    let n = exact_terms.flatMap((a)=>rt(a));
    let o = D([
        ...exact_terms.flatMap((a)=>Q(a)),
        ...conceptual_keywords.flatMap((a)=>Q(a))
    ]);
    let s = n.filter((a)=>a.length > 1);
    let r = new Set;
    let boostPhrases = s.filter((a)=>{
        let c = a.join(" ");
        if (r.has(c)) {
            return false;
        }
        r.add(c);
        return true;
    });
    return {
        terms: o,
        phrases: [],
        boostPhrases
    };
};
const Te = (index, t, n, o = Re)=>{
    let { terms, phrases, boostPhrases } = typeof t === "string" ? Ae(t) : t;
    let a = ot(index);
    if (a.docCount === 0 || terms.length === 0) {
        return [];
    }
    let c = terms.map((p)=>index.terms.get(p));
    let l = new Map(terms.map((p, f)=>[
            p,
            ve(a.docCount, c[f]?.size ?? 0)
        ]));
    let d = new Map(boostPhrases.flat().filter((p)=>!l.has(p)).map((p)=>[
            p,
            ve(a.docCount, index.terms.get(p)?.size ?? 0)
        ]));
    let h = new Set(c.flatMap((p)=>{
        if (p === undefined) {
            return [];
        }
        return [
            ...K(p)
        ];
    }));
    for (let p of boostPhrases){
        let f = p.map((I)=>index.terms.get(I));
        if (f.some((I)=>I === undefined)) {
            continue;
        }
        let [m, ...g] = f;
        let S = g.map((I)=>new Set(K(I)));
        for (let I of K(m)){
            if (S.every((T)=>T.has(I))) {
                h.add(I);
            }
        }
    }
    return [
        ...h
    ].filter((p)=>phrases.every((f)=>st(index, p, f))).map((p)=>{
        let f = index.docs.get(p);
        let m = c.map((v)=>{
            if (v === undefined) {
                return -1;
            }
            return ue(v, p);
        });
        let matchedTerms = terms.filter((v, R)=>m[R] >= 0);
        let S = terms.reduce((acc, term, index_1)=>{
            if (m[index_1] < 0) {
                return acc;
            }
            let M = yn(c[index_1], m[index_1], f.fieldLengths, a.avgFieldLength, o);
            return acc + l.get(term) * (M / (o.k1 + M));
        }, 0);
        let I = boostPhrases.reduce((acc, boostPhrase)=>{
            if (st(index, p, boostPhrase)) {
                return acc + o.phraseBoost * boostPhrase.reduce((acc_1, item)=>acc_1 + (l.get(item) ?? d.get(item) ?? 0), 0);
            }
            return acc;
        }, 0);
        let { span, termCount } = o.proximityWeight > 0 ? xn(index, p, matchedTerms) : dt;
        let P = span === Infinity ? 0 : o.proximityWeight * S / Math.max(1, 1 + span - termCount);
        return {
            path: f.path,
            score: S + I + P,
            matchedTerms
        };
    }).filter((p)=>p.score > 0).sort((p, f)=>f.score - p.score || (p.path < f.path ? -1 : 1)).slice(0, n);
};
const U = Symbol("transient-read-failure");
const Pn = (e)=>{
    let t = e?.code;
    return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
};
const vn = (e)=>{
    let t = e?.code;
    return t === "EACCES" || t === "EPERM";
};
const A = (e)=>{
    if (Pn(e)) {
        return "structural";
    }
    if (vn(e)) {
        return "permission";
    }
    return "other";
};
const ut = async (e, t)=>{
    let n = await open(e, Cu());
    try {
        let o = await n.stat();
        if (!o.isFile()) {
            throw Object.assign(Error("not a regular file"), {
                code: "ENOTREG"
            });
        }
        if (t?.maxBytes !== undefined && o.size > t.maxBytes) {
            throw Object.assign(Error("exceeds the read cap"), {
                code: "EFBIG"
            });
        }
        if (t?.withinReal !== undefined) {
            let s = await realpath(e).catch((i)=>{
                if (A(i) === "structural") {
                    return;
                }
                throw i;
            });
            if (s === undefined || !s.startsWith(t.withinReal + sep)) {
                throw Object.assign(Error("resolves outside the store root"), {
                    code: "ENOTREG"
                });
            }
            let r = await stat(s).catch((i)=>{
                if (A(i) === "structural") {
                    return;
                }
                throw i;
            });
            if (r === undefined) {
                throw Object.assign(Error("resolves outside the store root"), {
                    code: "ENOTREG"
                });
            }
            if (r.dev !== o.dev || r.ino !== o.ino) {
                throw Object.assign(Error("inode changed during read; retry"), {
                    code: "EAGAIN"
                });
            }
        }
        return await n.readFile();
    } finally{
        await n.close();
    }
};
const ft = (e)=>{
    let t = e?.code;
    return t === "ENOTREG" || t === "ELOOP" || t === "EFBIG";
};
const fe = Symbol("not-a-regular-file");
const pt = async (e, t, n)=>lstat(join(e, t)).then((o)=>!o.isFile() || n !== undefined && o.size > n, (o)=>A(o) === "structural");
const mt = async (dir, path)=>{
    if (!await pt(dir, path)) {
        return false;
    }
    return realpath(dir).then(()=>true, ()=>false);
};
const ht = async (index, dir, path, o = L)=>{
    if (index.pathToId.get(path) === undefined) {
        return false;
    }
    let r = await realpath(dir).catch(()=>U);
    if (typeof r !== "string") {
        return false;
    }
    let i = await ut(join(dir, path), {
        withinReal: r,
        maxBytes: o.maxFileBytes
    }).catch((l)=>{
        if (ft(l)) {
            return fe;
        }
        if (A(l) === "structural") {
            return undefined;
        }
        return U;
    });
    if (i === U) {
        return false;
    }
    if (i === fe) {
        return C(index, path);
    }
    if (i === undefined) {
        if (!await mt(dir, path)) {
            return false;
        }
        return C(index, path);
    }
    if (i.byteLength > o.maxFileBytes) {
        return C(index, path);
    }
    let a = new TextDecoder().decode(i);
    let c = await lstat(join(dir, path)).catch(()=>{});
    Pe(index, we(path, a), {
        hash: gt(a),
        size: c?.size ?? i.byteLength,
        mtimeMs: c?.mtimeMs ?? 0
    });
    return true;
};
var L = {
    excludeBasenames: [
        "MEMORY.md"
    ],
    maxFiles: 2000,
    maxFileBytes: 1048576
};
const Rn = new TextEncoder;
var gt = (e)=>{
    let t = Rn.encode(e);
    let n = -2078137563;
    let o = -873292572;
    for(let r = 0; r < t.length; r++){
        n ^= t[r];
        let i = n & 65535;
        let a = n >>> 16;
        let c = o & 65535;
        let l = o >>> 16;
        let d = i * 179;
        let h = d & 65535;
        d = a * 179 + (d >>> 16);
        let u = d & 65535;
        d = c * 179 + (d >>> 16);
        let p = d & 65535;
        d = l * 179 + (d >>> 16);
        let f = d & 65535;
        let m = n << 8;
        let g = o << 8 | n >>> 24;
        let S = h + (m & 65535);
        let I = u + (m >>> 16) + (S >>> 16);
        n = I << 16 | S & 65535;
        o = (f << 16 | p) + g + m + (I >>> 16) | 0;
    }
    let s = (r)=>(r >>> 0).toString(16).padStart(8, "0");
    return s(o) + s(n);
};
const De = (e, t)=>{
    if (t.excludeLog?.(e)) {
        return true;
    }
    if (t.isRecallVisible !== undefined && !t.isRecallVisible(e)) {
        return true;
    }
    if (t.excludePrefixes?.some((o)=>e.startsWith(o))) {
        return true;
    }
    if (t.excludePaths !== undefined) {
        return t.excludePaths.has(e);
    }
    let n = e.slice(e.lastIndexOf("/") + 1);
    return t.excludeBasenames.includes(n);
};
const An = async (dir, t = L)=>{
    let n = [];
    let skippedSubtrees = new Set;
    let rootMissing = false;
    let r = [
        ""
    ];
    while(r.length > 0){
        let f = r.pop();
        let m = await readdir(join(dir, f), {
            withFileTypes: true
        }).catch((g)=>{
            if (f === "") {
                if (z(g)) {
                    rootMissing = true;
                    return [];
                }
                throw g;
            }
            switch(A(g)){
                case "permission":
                    skippedSubtrees.add(f);
                    return [];
                case "structural":
                    return [];
                default:
                    throw g;
            }
        });
        for (let g of m){
            let S = f === "" ? g.name : `${f}/${g.name}`;
            if (g.isSymbolicLink()) {
                continue;
            }
            if (g.isDirectory()) {
                if (t.excludePrefixes?.some((I)=>`${S}/`.startsWith(I)) ?? false) {
                    continue;
                }
                r.push(S);
            } else {
                n.push(S);
            }
        }
    }
    let i = n.filter((f)=>f.endsWith(".md")).filter((f)=>!De(f, t)).sort();
    let skipped = new Set;
    let c = await Promise.allSettled(i.map(async (f)=>{
        let m = await lstat(join(dir, f)).catch((g)=>{
            switch(A(g)){
                case "structural":
                    return;
                case "permission":
                    skipped.add(f);
                    return;
                default:
                    throw g;
            }
        });
        if (m !== undefined && m.isFile() && m.size <= t.maxFileBytes) {
            return {
                path: f,
                size: m.size,
                mtimeMs: m.mtimeMs
            };
        }
    }));
    let l = c.find((f)=>f.status === "rejected");
    if (l !== undefined && l.status === "rejected") {
        throw l.reason;
    }
    let d = c.map((f)=>{
        if (f.status === "fulfilled") {
            return f.value;
        }
    }).filter((f)=>f !== undefined);
    let files = d.length <= t.maxFiles ? d : d.toSorted((f, m)=>m.mtimeMs - f.mtimeMs).slice(0, t.maxFiles).toSorted((f, m)=>{
        if (f.path < m.path) {
            return -1;
        }
        return 1;
    });
    let u = new Set(files.map((f)=>f.path));
    let capDropped = new Set(d.filter((f)=>!u.has(f.path)).map((f)=>f.path));
    return {
        files,
        skipped,
        skippedSubtrees,
        rootMissing,
        capDropped
    };
};
const Tn = (e, files, n = new Set, o = new Set, s)=>{
    let r = new Set(files.map((d)=>d.path));
    let i = [
        ...o
    ].map((d)=>`${d}/`);
    let a = (d)=>i.length > 0 && i.some((h)=>d.startsWith(h));
    let toRemove = [
        ...e.pathToId.keys()
    ].filter((d)=>s?.(d) === true || !r.has(d) && !n.has(d) && !a(d));
    let toIndex = files.filter((d)=>{
        let h = e.pathToId.get(d.path);
        if (h === undefined) {
            return true;
        }
        let u = e.docs.get(h);
        return u.size !== d.size || u.mtimeMs !== d.mtimeMs;
    });
    return {
        toIndex,
        toRemove,
        unchangedCount: files.length - toIndex.length
    };
};
const yt = async (e, dir, n = L, o)=>{
    let s = {
        added: 0,
        updated: 0,
        removed: 0,
        unchanged: e.docs.size,
        rehashedUnchanged: 0,
        transientSkips: 0,
        scanCompleted: false
    };
    if (o?.aborted) {
        return s;
    }
    let r = await An(dir, n).catch(()=>{});
    if (r === undefined) {
        return s;
    }
    if (r.rootMissing && e.docs.size > 0) {
        return s;
    }
    let i = await realpath(dir).catch((y)=>{
        if (A(y) === "structural") {
            return undefined;
        }
        return U;
    });
    if (i === U) {
        return s;
    }
    let a = Tn(e, r.files, r.skipped, r.skippedSubtrees, (y)=>De(y, n));
    let c = [];
    let l = [];
    await Promise.all(a.toRemove.map(async (y)=>{
        if (De(y, n) || r.capDropped.has(y)) {
            c.push(y);
        } else if (await pt(dir, y, n.maxFileBytes)) {
            l.push(y);
        }
    }));
    let h = l.length === 0 || await realpath(dir).then(()=>true, ()=>false) ? [
        ...c,
        ...l
    ] : c;
    let u = a.toRemove.length - h.length;
    let p = nt(e, h);
    let added = 0;
    let updated = 0;
    let rehashedUnchanged = 0;
    let S = 0;
    let I = 0;
    let T = false;
    for (let y of a.toIndex){
        if (o?.aborted) {
            T = true;
            break;
        }
        let P = await ut(join(dir, y.path), {
            withinReal: i,
            maxBytes: n.maxFileBytes
        }).catch((J)=>{
            if (ft(J)) {
                return fe;
            }
            if (A(J) === "structural") {
                return undefined;
            }
            return U;
        });
        if (P === U) {
            I++;
            continue;
        }
        if (P === fe) {
            if (C(e, y.path)) {
                S++;
            }
            continue;
        }
        if (P === undefined) {
            if (!await mt(dir, y.path)) {
                I++;
                continue;
            }
            if (C(e, y.path)) {
                S++;
            }
            continue;
        }
        if (P.byteLength > n.maxFileBytes) {
            if (C(e, y.path)) {
                S++;
            }
            continue;
        }
        let v = new TextDecoder().decode(P);
        let hash = gt(v);
        let E = e.pathToId.get(y.path);
        let M = E === undefined ? undefined : e.docs.get(E);
        if (M?.hash === hash && !e.unverified.has(E)) {
            e.docs.set(E, {
                ...M,
                size: y.size,
                mtimeMs: y.mtimeMs
            });
            rehashedUnchanged++;
            continue;
        }
        Pe(e, we(y.path, v), {
            hash,
            size: y.size,
            mtimeMs: y.mtimeMs
        });
        if (M === undefined) {
            added++;
        } else {
            updated++;
        }
    }
    return {
        added,
        updated,
        removed: p + S,
        unchanged: a.unchangedCount,
        rehashedUnchanged,
        transientSkips: I + u + r.skipped.size + r.skippedSubtrees.size,
        scanCompleted: !T
    };
};
const B = async (e, t = {})=>{
    let { logFeatureSad } = await import("/$bunfs/root/chunk-kxz3kak4.js").catch(()=>({
            logFeatureSad: undefined
        }));
    logFeatureSad?.("memory_recall_select", e, {
        via_index: true,
        ...t
    });
};
const version = 10;
const kn = (index)=>{
    let t = [
        ...index.docs.keys()
    ].sort((r, i)=>r - i);
    let n = new Map(t.map((r, i)=>[
            r,
            i
        ]));
    let docs = t.map((r)=>{
        let i = index.docs.get(r);
        return [
            i.path,
            i.hash,
            i.size,
            i.mtimeMs,
            b.map((a)=>i.fieldLengths[a])
        ];
    });
    let s = [
        ...index.terms.entries()
    ].map(([r, i])=>{
        let a = [];
        let c = -1;
        K(i).forEach((l, d)=>{
            let h = n.get(l);
            if (h === undefined) {
                throw Error("posting references unknown docId");
            }
            a.push(c < 0 ? h : h - c);
            c = h;
            let u = b.map((p)=>te(i, d, p));
            for (let p of u){
                a.push(p?.length ?? 0);
            }
            for (let p of u){
                p?.forEach((f, m)=>{
                    a.push(m === 0 ? f : f - p[m - 1]);
                });
            }
        });
        return [
            r,
            a
        ];
    });
    return {
        version,
        docs,
        terms: s
    };
};
const ze = (e, t)=>{
    let n = e[t];
    if (typeof n !== "number" || !Number.isInteger(n) || n < 0 || n > V) {
        throw Error("malformed posting data");
    }
    return n;
};
const Nn = (e, t, n, o)=>{
    let s = b.map(()=>0);
    let r = b.map(()=>[]);
    let i = 0;
    let a = -1;
    while(i < n.length){
        let l = ze(n, i++);
        let d = a < 0 ? l : a + l;
        if (d >= o) {
            throw Error("posting references unknown docId");
        }
        if (a >= 0 && l === 0) {
            throw Error("repeated posting docId");
        }
        a = d;
        let h = 0;
        b.forEach((u, p)=>{
            s[p] = ze(n, i + p);
            h += s[p];
        });
        i += b.length;
        if (h === 0 || i + h > n.length) {
            throw Error("malformed posting positions");
        }
        b.forEach((u, p)=>{
            let f = r[p];
            f.length = 0;
            let m = -1;
            for(let g = 0; g < s[p]; g++){
                let S = ze(n, i++);
                m = m < 0 ? S : m + S;
                if (g > 0 && S === 0 || m > V) {
                    throw Error("malformed posting positions");
                }
                f.push(m);
            }
        });
        Ee(e, t, d, r);
    }
    let c = e.terms.get(t);
    if (c === undefined) {
        throw Error("empty term entry");
    }
    qe(c);
};
const Cn = (e)=>{
    if (e.version !== version) {
        throw Error("unsupported index format version");
    }
    if (!Array.isArray(e.docs) || !Array.isArray(e.terms)) {
        throw Error("malformed index shape");
    }
    let t = ee();
    for (let [n, o] of e.docs.entries()){
        if (!Array.isArray(o) || o.length !== 5) {
            throw Error("malformed doc entry");
        }
        let [s, r, i, a, c] = o;
        if (typeof r !== "string" || !Number.isFinite(i) || !Number.isFinite(a) || !Array.isArray(c) || c.length !== b.length || c.some((d)=>!Number.isInteger(d) || d < 0 || d > V)) {
            throw Error("malformed doc metadata");
        }
        if (typeof s !== "string" || s.length === 0 || s.startsWith("/") || sep === "\\" && (s.includes("\\") || /^[A-Za-z]:/.test(s)) || s.includes("\x00") || s.split("/").some((d)=>d === ".." || d === "" || d === ".")) {
            throw Error("non-contained doc path");
        }
        if (t.pathToId.has(s)) {
            throw Error("duplicate doc entry");
        }
        let l = Object.fromEntries(b.map((d, h)=>[
                d,
                c[h]
            ]));
        t.docs.set(n, {
            path: s,
            hash: r,
            size: i,
            mtimeMs: a,
            fieldLengths: l
        });
        t.pathToId.set(s, n);
        t.unverified.add(n);
        for (let d of b){
            t.fieldLengthTotals[d] += l[d];
            if (l[d] > 0) {
                t.fieldDocCounts[d]++;
            }
        }
    }
    if (b.some((n)=>!Number.isSafeInteger(t.fieldLengthTotals[n]))) {
        throw Error("malformed doc metadata");
    }
    t.nextDocId = e.docs.length;
    for (let n of e.terms){
        if (!Array.isArray(n) || n.length !== 2) {
            throw Error("malformed term entry");
        }
        let [o, s] = n;
        if (typeof o !== "string" || o.length === 0 || !Array.isArray(s) || t.terms.has(o)) {
            throw Error("malformed term entry");
        }
        Nn(t, o, s, e.docs.length);
    }
    return t;
};
const xt = async (index, indexPath, n = Oe)=>{
    let o = _(kn(index));
    let s = Buffer.byteLength(o);
    if (s > n) {
        B("index_persist_skipped_oversized");
        let r = await lstat(indexPath).catch(()=>{});
        if (r !== undefined && r.size > n) {
            await unlink(indexPath).catch(()=>{});
        }
        return 0;
    }
    await En(indexPath, o, 384);
    return s;
};
const pe = Symbol("transient-index-read-failure");
const oe = '{"version"';
var Oe = 67108864;
const code = Symbol("index-file-oversized");
const St = async (indexPath)=>{
    let t = await open(indexPath, Cu());
    try {
        let n = await t.stat();
        if (!n.isFile()) {
            throw Object.assign(Error("not a regular file"), {
                code: "ENOTREG"
            });
        }
        if (n.size > Oe) {
            let s = Buffer.alloc(64);
            let { bytesRead } = await t.read(s, 0, 64, 0);
            throw Object.assign(Error("index file oversized"), {
                code,
                head: s.subarray(0, bytesRead).toString("utf8")
            });
        }
        let o = await t.readFile({
            encoding: "utf8"
        });
        if (Buffer.byteLength(o) > Oe) {
            throw Object.assign(Error("index file oversized"), {
                code,
                head: o.slice(0, 64)
            });
        }
        return o;
    } finally{
        await t.close();
    }
};
const It = (e)=>{
    let t = e;
    if (t.code !== code) {
        return;
    }
    return (typeof t.head === "string" ? t.head.trim() : "").startsWith(oe);
};
const wt = async (indexPath)=>{
    let t;
    let n = await St(indexPath).catch((o)=>{
        t = It(o);
        if (z(o)) {
            return undefined;
        }
        return pe;
    });
    if (n === pe) {
        return {
            owned: t ?? false,
            absent: false
        };
    }
    if (n === undefined) {
        return {
            owned: true,
            absent: true
        };
    }
    try {
        let o = X(n);
        return {
            owned: typeof o === "object" && o !== null && typeof o.version === "number",
            absent: false
        };
    } catch  {
        let o = n.trim().slice(0, oe.length);
        return {
            owned: o === "" || oe.startsWith(o),
            absent: false
        };
    }
};
const Ft = async (indexPath)=>{
    let t;
    let n = await St(indexPath).catch((s)=>{
        t = It(s);
        if (z(s)) {
            return undefined;
        }
        return pe;
    });
    if (n === pe) {
        return {
            index: undefined,
            pathOwned: t ?? false
        };
    }
    if (n === undefined) {
        return {
            index: undefined,
            pathOwned: true
        };
    }
    let o;
    try {
        o = X(n);
    } catch  {
        let s = n.trim().slice(0, oe.length);
        return {
            index: undefined,
            pathOwned: s === "" || oe.startsWith(s)
        };
    }
    if (typeof o !== "object" || o === null || typeof o.version !== "number") {
        return {
            index: undefined,
            pathOwned: false
        };
    }
    try {
        return {
            index: Cn(o),
            pathOwned: true
        };
    } catch  {
        return {
            index: undefined,
            pathOwned: true
        };
    }
};
const Ln = ".bm25-index.json";
const Et = async (dir, options = L, n, o = true)=>{
    let indexPath = join(dir, Ln);
    let r = o ? await Ft(indexPath) : {
        index: undefined,
        pathOwned: false
    };
    let i = r.index ?? ee();
    let a = await yt(i, dir, options, n);
    let c = r.index !== undefined && !a.scanCompleted;
    return {
        dir,
        indexPath,
        index: c ? ee() : i,
        lastSync: c ? {
            added: 0,
            updated: 0,
            removed: 0,
            unchanged: 0,
            rehashedUnchanged: 0,
            transientSkips: 0,
            scanCompleted: false
        } : a,
        loadedFromDisk: r.index !== undefined,
        persistable: r.pathOwned && !c,
        options
    };
};
const Pt = async (store)=>{
    if (!store.persistable || !store.lastSync.scanCompleted) {
        return 0;
    }
    let t = await wt(store.indexPath);
    if (!t.owned || store.loadedFromDisk && t.absent) {
        return 0;
    }
    return xt(store.index, store.indexPath);
};
const vt = async (store, t, n = 5, o = Re)=>{
    let s = new Set;
    let r = (i)=>i.filter((a)=>!s.has(a.path));
    for(let i = 0; i < 8; i++){
        let a = r(Te(store.index, t, n + s.size, o)).slice(0, n);
        let c = a.filter((l)=>{
            let d = store.index.pathToId.get(l.path);
            return d !== undefined && store.index.unverified.has(d);
        });
        if (c.length === 0) {
            return a;
        }
        for (let l of c){
            let d = store.index.pathToId.get(l.path);
            if (!await ht(store.index, store.dir, l.path, store.options) && d !== undefined && store.index.unverified.has(d)) {
                s.add(l.path);
            }
        }
    }
    return r(Te(store.index, t, n + s.size, o)).filter((i)=>{
        let a = store.index.pathToId.get(i.path);
        return a === undefined || !store.index.unverified.has(a);
    }).slice(0, n);
};
const he = Symbol("transient-realpath-failure");
const Wn = (lastSync)=>lastSync.added > 0 || lastSync.updated > 0 || lastSync.removed > 0 || lastSync.rehashedUnchanged > 0;
const jn = (e)=>{
    let t = [
        ...e.boostPhrases,
        ...e.phrases
    ];
    let n = new Set;
    let o = [];
    for(let s = t.length - 1; s >= 0; s--){
        let r = t[s];
        let i = r.join(" ");
        if (!n.has(i)) {
            n.add(i);
            o.push(r);
        }
    }
    o.reverse();
    return {
        terms: e.terms,
        phrases: [],
        boostPhrases: o
    };
};
const Un = 4096;
const Hn = 3072;
const Gn = 1024;
const Rt = (e, t)=>{
    if (((e.match(/"/g) ?? []).length & 1) === 0) {
        return e;
    }
    let n = t ? e.lastIndexOf('"') : e.indexOf('"');
    return `${e.slice(0, n)} ${e.slice(n + 1)}`;
};
const At = (e, t)=>{
    if (t > 0 && t < e.length && (e.charCodeAt(t) & 64512) === 56320) {
        return t - 1;
    }
    return t;
};
const Qn = (e)=>{
    if (e.length <= Un) {
        return e;
    }
    let t = At(e, Hn);
    let n = At(e, e.length - Gn);
    let o = `${Rt(e.slice(0, t), true)}
${Rt(e.slice(n), false)}`;
    if (((e.match(/"/g) ?? []).length & 1) === 0) {
        return o;
    }
    return o.replaceAll('"', " ");
};
const Dt = 64;
const $n = (boostPhrases)=>boostPhrases.slice(-8).map((t)=>{
        if (t.length <= 16) {
            return t;
        }
        return t.slice(0, 16);
    });
const Vn = 8;
const Kn = 24;
const Tt = 4;
const Yn = (terms, t, n, o, s)=>{
    let r = new Set(terms);
    let i = new Set;
    let a = new Map;
    let c = (u)=>{
        let p = t(u);
        if (p === 0) {
            return false;
        }
        if (p === 1) {
            let f = n(u);
            if (f !== undefined) {
                let m = a.get(f) ?? 0;
                if (m >= Tt) {
                    return false;
                }
                a.set(f, m + 1);
            }
        }
        return true;
    };
    for (let u of s){
        if (r.has(u) && c(u)) {
            i.add(u);
        }
    }
    let i_size = i.size;
    for (let u of o){
        if (i.size >= i_size + Vn) {
            break;
        }
        if (r.has(u) && !i.has(u) && c(u)) {
            i.add(u);
        }
    }
    let i_size_1 = i.size;
    for(let u = o.length - 1; u >= 0 && i.size < i_size_1 + Kn; u--){
        let p = o[u];
        if (r.has(p) && !i.has(p) && c(p)) {
            i.add(p);
        }
    }
    let h = terms.filter((u)=>!i.has(u)).map((t_1)=>{
        let p = t(t_1);
        if (p === 0) {
            return {
                t: t_1,
                key: Number.MAX_SAFE_INTEGER
            };
        }
        if (p === 1) {
            let f = n(t_1);
            if (f !== undefined) {
                let m = a.get(f) ?? 0;
                a.set(f, m + 1);
                if (m >= Tt) {
                    return {
                        t: t_1,
                        key: Number.MAX_SAFE_INTEGER - 1
                    };
                }
            }
            return {
                t: t_1,
                key: 1
            };
        }
        return {
            t: t_1,
            key: p
        };
    }).sort((u, p)=>u.key - p.key);
    for (let { t } of h){
        if (i.size >= Dt) {
            break;
        }
        i.add(t);
    }
    return terms.filter((u)=>i.has(u));
};
const Xn = (e, index, n)=>{
    if (e.terms.length <= Dt && e.boostPhrases.every((s)=>s.length <= 16) && e.boostPhrases.length <= 8) {
        return e;
    }
    let o = $n(e.boostPhrases);
    return {
        terms: Yn(e.terms, (s)=>Je(index, s), (s)=>Ze(index, s), n(), new Set(o.flat())),
        phrases: e.phrases,
        boostPhrases: o
    };
};
const Jn = (e, excludeLog, isRecallVisible)=>({
        ...e === null ? L : {
            ...L,
            excludePaths: new Set([
                ...e.excluded
            ].map((o)=>o.split(sep).join("/"))),
            excludePrefixes: e.excludedPrefixes.map((o)=>o.split(sep).join("/"))
        },
        excludeLog,
        isRecallVisible
    });
const Ce = (e, t)=>`${t ? "persist" : "no-persist"}:${e}`;
class Mt {
    open = a8e(async (e, t, n, o, s)=>{
        let r = performance.now();
        let store = await Et(e, Jn(t, n, o), undefined, s);
        if (s && store.lastSync.scanCompleted && (!store.loadedFromDisk ? store.index.docs.size > 0 : Wn(store.lastSync))) {
            if (store.persistable) {
                await Pt(store).catch(()=>{
                    B("index_persist_failed");
                });
            } else {
                B("index_path_foreign");
            }
        }
        return {
            store,
            openMs: performance.now() - r
        };
    }, (e, t, n, o, s)=>Ce(e, s));
    isHeld(e, t) {
        return this.open.cache.has(Ce(e, t));
    }
    releaseIfCurrent(e, t, n) {
        let o = Ce(e, t);
        if (this.open.cache.get(o) === n) {
            this.open.cache.delete(o);
        }
    }
}
const zt = new lt(()=>new Mt);
const Ot = async (e, t, n, o, s, r)=>{
    let i = e.open(t, n, o, s, r);
    let a = await i;
    if (!a.store.lastSync.scanCompleted || a.store.lastSync.transientSkips > 0 || a.store.index.docs.size === 0) {
        e.releaseIfCurrent(t, r, i);
    }
    return a;
};
export const prewarmMemoryIndex = (e, t, n, o)=>{
    Ot(zt.of(e), t, null, n, o, true).then(({ store })=>{
        if (!store.lastSync.scanCompleted) {
            B("index_prewarm_failed", {
                prewarm: true,
                sweep_incomplete: true
            });
        } else if (store.lastSync.transientSkips > 0) {
            B("index_prewarm_failed", {
                prewarm: true,
                transient_skips: true
            });
        }
    }).catch(()=>{
        B("index_prewarm_failed", {
            prewarm: true
        });
    });
};
export const searchMemoryFilesWithIndex = async (e, t, n, o, s = 5, r = null, i, a = false, c)=>{
    let l = performance.now();
    let d = zt.of(e);
    let storeWasHeld = d.isHeld(n, a);
    let { store, openMs } = await Ot(d, n, r, i, c, a);
    let openWaitMs = performance.now() - l;
    let m = ()=>it(store.index.docs.size);
    let g = (sync, O = [], queryTermCount = 0)=>{
        let topScore = O[0]?.score ?? 0;
        let relevanceFloor = m();
        let belowFloorCount = F(O, (Z)=>Z.score < relevanceFloor);
        return {
            docCount: store.index.docs.size,
            termCount: store.index.terms.size,
            loadedFromDisk: store.loadedFromDisk,
            sync,
            tookMs: performance.now() - l,
            storeWasHeld,
            openWaitMs,
            storeOpenMs: openMs,
            topScore,
            relevanceFloor,
            hitCount: O.length,
            belowFloorCount,
            suppressedByFloor: O.length > 0 && belowFloorCount === O.length,
            queryTermCount
        };
    };
    if (o.aborted) {
        return {
            ranked: [],
            stats: g(store.lastSync)
        };
    }
    if (store.loadedFromDisk && !store.lastSync.scanCompleted) {
        return {
            ranked: [],
            stats: g(store.lastSync)
        };
    }
    let S = typeof t === "string" ? Qn(t) : "";
    let I = typeof t === "string" ? Xn(jn(Ae(S)), store.index, ()=>Q(S)) : ct(t.exact_terms, t.conceptual_keywords);
    let T = await vt(store, I, s + 5);
    let y = c === undefined ? i === undefined ? T : T.filter((w)=>!i(w.path)) : T.filter((w)=>(i === undefined || !i(w.path)) && c(w.path));
    let P = await realpath(n).catch(()=>{});
    let v = resolve(n);
    let R = [];
    let E = [];
    let M = await Promise.all(y.map(async (w)=>{
        let O = store.index.pathToId.get(w.path);
        let k = O === undefined ? undefined : store.index.docs.get(O);
        let W = resolve(n, w.path);
        let H = await realpath(W).catch((ye)=>{
            if (A(ye) === "structural") {
                return undefined;
            }
            return he;
        });
        if (H === undefined) {
            if (P !== undefined) {
                R.push(w.path);
            }
            return [];
        }
        if (H === he) {
            return [];
        }
        if (!H.startsWith((P ?? v) + sep)) {
            if (P !== undefined) {
                E.push(w.path);
            }
            return [];
        }
        let Z = await lstat(W).catch((ye)=>{
            if (A(ye) === "structural") {
                return undefined;
            }
            return he;
        });
        if (Z === he) {
            return [];
        }
        if (Z === undefined) {
            if (P !== undefined) {
                R.push(w.path);
            }
            return [];
        }
        if (!Z.isFile()) {
            if (P !== undefined) {
                E.push(w.path);
            }
            return [];
        }
        return [
            {
                path: W,
                mtimeMs: k?.mtimeMs ?? 0,
                score: w.score
            }
        ];
    }));
    if (R.length > 0 || E.length > 0) {
        let w = await Promise.all(R.map(async (k)=>{
            if (await realpath(resolve(n, k)).then(()=>false, (W)=>A(W) === "structural")) {
                return k;
            }
        }));
        let O = await realpath(n).catch(()=>{});
        if (O !== undefined && O === P) {
            for (let k of E){
                C(store.index, k);
            }
            for (let k of w){
                if (k !== undefined) {
                    C(store.index, k);
                }
            }
        }
    }
    let J = M.flat();
    let kt = m();
    return {
        ranked: J.filter((w)=>w.score >= kt).slice(0, s),
        stats: g(store.lastSync, J, I.terms.length)
    };
};
