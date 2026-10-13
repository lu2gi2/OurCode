import { kA, uSt } from "/$bunfs/root/chunk-9bbrket9.js";
const depth = 4096;
const totalOpens = 200000;
const w = 50000000;
const G = 200000;
const j = 64;
const H = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "source",
    "track",
    "wbr"
]);
const jer = new Map([
    [
        "script",
        kA.SCRIPT_DATA
    ],
    [
        "style",
        kA.RAWTEXT
    ],
    [
        "xmp",
        kA.RAWTEXT
    ],
    [
        "iframe",
        kA.RAWTEXT
    ],
    [
        "noembed",
        kA.RAWTEXT
    ],
    [
        "noframes",
        kA.RAWTEXT
    ],
    [
        "noscript",
        kA.RAWTEXT
    ],
    [
        "title",
        kA.RCDATA
    ],
    [
        "textarea",
        kA.RCDATA
    ],
    [
        "plaintext",
        kA.PLAINTEXT
    ]
]);
const q = new Set([
    "foreignobject",
    "desc",
    "title"
]);
const K = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
]);
const V = new Set([
    "applet",
    "caption",
    "html",
    "table",
    "td",
    "th",
    "marquee",
    "object",
    "template",
    "svg",
    "math",
    "foreignobject",
    "desc",
    "title",
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml"
]);
const P = new Set([
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "base",
    "basefont",
    "bgsound",
    "blockquote",
    "body",
    "br",
    "button",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dir",
    "div",
    "dl",
    "dt",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "iframe",
    "img",
    "input",
    "keygen",
    "li",
    "link",
    "listing",
    "main",
    "marquee",
    "menu",
    "meta",
    "nav",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "p",
    "param",
    "plaintext",
    "pre",
    "script",
    "search",
    "section",
    "select",
    "source",
    "style",
    "summary",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
    "wbr",
    "xmp",
    "foreignobject",
    "desc",
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml"
]);
const U = new Set([
    "b",
    "big",
    "blockquote",
    "body",
    "br",
    "center",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "font",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "hr",
    "i",
    "img",
    "li",
    "listing",
    "menu",
    "meta",
    "nobr",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "strike",
    "sub",
    "sup",
    "table",
    "tt",
    "u",
    "ul",
    "var"
]);
const B = new Set([
    "a",
    "b",
    "big",
    "code",
    "em",
    "font",
    "i",
    "nobr",
    "s",
    "small",
    "strike",
    "strong",
    "tt",
    "u"
]);
const Y = 1024;
const Z = new Map([
    [
        "li",
        new Set([
            "ul",
            "ol"
        ])
    ],
    [
        "p",
        new Set([
            "button"
        ])
    ]
]);
const J = new Set([
    "body",
    "html"
]);
const Q = new Set([
    "caption",
    "col",
    "colgroup",
    "frame",
    "frameset",
    "head",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "title"
]);
function JYr(s) {
    return ee(s, {
        depth,
        totalOpens
    }).exceeded;
}
function QYr(s, a) {
    let t = 0;
    let u = false;
    let tokenizer = new M(s, a, (T)=>{
        t += T;
        if (t > w) {
            u = true;
            tokenizer.pause();
            return false;
        }
        return true;
    });
    return {
        tokenizer,
        overBudget: ()=>u
    };
}
function ee(s, a) {
    let t = [];
    let u = [];
    let c = [];
    let T = [];
    let r = [];
    let p = 0;
    let x = 0;
    let maxDepth = 0;
    let totalOpens_1 = 0;
    let b = 0;
    let _ = 0;
    let h = 0;
    let I = new Set;
    let O = 0;
    let g = 0;
    let maxFmtEstimate = 0;
    let formSplices = 0;
    let failClosed = false;
    let v = new Map;
    let exceeded = false;
    function l() {
        exceeded = true;
        N.pause();
    }
    let S = ()=>{};
    function X() {
        while(t.length > 0 && r.at(-1) === "f"){
            let o = t.pop();
            c.pop();
            if (u.pop() === true && _ > 0) {
                _--;
                if (r.at(-1) === "i") {
                    r.pop();
                }
            }
            if (o === "svg" || o === "math") {
                b--;
                T.pop();
                if (r.at(-1) === "f") {
                    r.pop();
                }
            } else if (o === "select" && p > 0) {
                p--;
            } else if (o === "frameset" && x > 0) {
                x--;
            }
        }
    }
    function L(attrs) {
        if (attrs === undefined) {
            return false;
        }
        return attrs.some((e)=>{
            let i = e !== null && typeof e === "object" ? e.name : undefined;
            if (typeof i !== "string") {
                return false;
            }
            let m = i.toLowerCase();
            return m === "color" || m === "face" || m === "size";
        });
    }
    let N = new M({}, {
        onStartTag (o) {
            if (exceeded) {
                return;
            }
            h += t.length + 1 + g;
            O++;
            if (a !== null && (h > w || O > G)) {
                l();
                return;
            }
            let o_tagName = o.tagName;
            if (r.at(-1) === "f" && U.has(o_tagName) && (o_tagName !== "font" || L(o.attrs))) {
                X();
            }
            let i = r.length === 0 || r.at(-1) === "i";
            if (i && (o_tagName === "html" || o_tagName === "body")) {
                let n = !(t.length <= 2 && t.every((f)=>f === "html" || f === "head"));
                for (let f of o.attrs ?? []){
                    I.add((o_tagName === "html" ? "h:" : "b:") + f.name);
                }
                if (n) {
                    h += 8 * I.size;
                    if (a !== null && h > w) {
                        l();
                    }
                    return;
                }
            }
            if (b > 0 && (o_tagName === "mglyph" || o_tagName === "malignmark") || !i && p > 0 && (o_tagName === "script" || o_tagName === "textarea") || r.at(-1) === "f" && (o_tagName === "svg" || o_tagName === "math") && T.at(-1) !== o_tagName) {
                failClosed = true;
                l();
                return;
            }
            let m = i ? jer.get(o_tagName) : undefined;
            if (m !== undefined && (x > 0 || p > 0 && o_tagName !== "script")) {
                failClosed = true;
                l();
                return;
            }
            if (m !== undefined) {
                N.state = m;
                N.lastStartTagName = o_tagName;
            }
            if (H.has(o_tagName) && i) {
                return;
            }
            totalOpens_1++;
            if ((o_tagName === "svg" || o_tagName === "math") && o.selfClosing) {
                return;
            }
            if (!(o.selfClosing && !i)) {
                if (B.has(o_tagName)) {
                    v.set(o_tagName, (v.get(o_tagName) ?? 0) + 1);
                    g++;
                    if (g > maxFmtEstimate) {
                        maxFmtEstimate = g;
                    }
                    if (a !== null && g > Y) {
                        l();
                        return;
                    }
                }
                t.push(o_tagName);
                if (t.length > maxDepth) {
                    maxDepth = t.length;
                }
                let n = false;
                let f = r.at(-1) === "f";
                if (o_tagName === "svg" || o_tagName === "math") {
                    b++;
                    T.push(o_tagName);
                    r.push("f");
                } else if (o_tagName === "select") {
                    p++;
                } else if (o_tagName === "frameset") {
                    x++;
                } else if (f) {
                    let d = T.at(-1);
                    if (d === "svg") {
                        n = q.has(o_tagName);
                    } else if (d === "math") {
                        n = K.has(o_tagName) || o_tagName === "annotation-xml" && o.attrs?.some((E)=>E.name.toLowerCase() === "encoding" && [
                                "text/html",
                                "application/xhtml+xml"
                            ].includes(E.value.toLowerCase())) === true;
                    }
                    if (n) {
                        _++;
                        r.push("i");
                    }
                }
                u.push(n);
                c.push(o_tagName === "svg" || o_tagName === "math" || f && !n);
            }
            if (a !== null && (t.length > a.depth || totalOpens_1 > a.totalOpens)) {
                l();
            }
        },
        onEndTag (o) {
            if (exceeded) {
                return;
            }
            h += t.length + 1 + g;
            O++;
            if (a !== null && (h > w || O > G)) {
                l();
                return;
            }
            let o_tagName = o.tagName;
            if (r.at(-1) === "i" && o_tagName !== "p" && o_tagName !== "br" && !(t.at(-1) === o_tagName && u.at(-1) === true)) {
                for(let n = t.length - 1; n >= 0; n--){
                    if ((c[n] || u[n] === true) && t[n] === o_tagName) {
                        failClosed = true;
                        l();
                        return;
                    }
                }
            }
            if (J.has(o_tagName)) {
                if (o_tagName === "html" && b > 0) {
                    for(let n = t.length - 1; n >= 0; n--){
                        if (c[n] && t[n] === "html") {
                            failClosed = true;
                            l();
                            return;
                        }
                    }
                }
                return;
            }
            if (p > 0 && r.at(-1) === "f" && (o_tagName === "p" || o_tagName === "br")) {
                failClosed = true;
                l();
                return;
            }
            if (p > 0 && !(t.at(-1) === o_tagName && (c.at(-1) === true || u.at(-1) === true)) && o_tagName !== "select" && o_tagName !== "option" && o_tagName !== "optgroup" && o_tagName !== "template" && o_tagName !== "script") {
                return;
            }
            if (r.at(-1) === "f" && (o_tagName === "p" || o_tagName === "br")) {
                X();
            }
            let i = P.has(o_tagName);
            let m = Z.get(o_tagName);
            let z = Q.has(o_tagName) ? Math.max(0, t.length - 1) : Math.max(0, t.length - j);
            for(let n = t.length - 1; n >= z; n--){
                let f = t[n];
                if (f === o_tagName) {
                    if (B.has(o_tagName)) {
                        let d = v.get(o_tagName) ?? 0;
                        if (d > 0) {
                            v.set(o_tagName, d - 1);
                            if (g > 0) {
                                g--;
                            }
                        }
                    }
                    if (o_tagName === "form") {
                        t.splice(n, 1);
                        u.splice(n, 1);
                        c.splice(n, 1);
                        formSplices++;
                        return;
                    }
                    for(let d = t.length - 1; d >= n; d--){
                        let E = t[d];
                        if (u[d] === true && _ > 0) {
                            _--;
                            if (r.at(-1) === "i") {
                                r.pop();
                            }
                        }
                        if (E === "svg" || E === "math") {
                            if (b > 0) {
                                b--;
                            }
                            T.pop();
                            if (r.at(-1) === "f") {
                                r.pop();
                            }
                        } else if (E === "select" && p > 0) {
                            p--;
                        } else if (E === "frameset" && x > 0) {
                            x--;
                        }
                    }
                    t.length = n;
                    u.length = n;
                    c.length = n;
                    return;
                }
                if (V.has(f) || m?.has(f) === true) {
                    return;
                }
                if (!i && P.has(f)) {
                    return;
                }
            }
        },
        onComment (o) {
            if (exceeded || b === 0 || !o.data.startsWith("[CDATA[") || o.data.endsWith("]]")) {
                return;
            }
            let e = N.preprocessor.offset + 1;
            let i = s.indexOf("]]>", e);
            let m = i === -1 ? s.slice(e) : s.slice(e, i);
            if (/<[a-zA-Z!/?]/.test(m)) {
                failClosed = true;
                l();
            }
        },
        onDoctype: S,
        onCharacter: S,
        onNullCharacter: S,
        onWhitespaceCharacter: S,
        onEof: S,
        onParseError: S
    }, (o)=>{
        h += o;
        if (a !== null && h > w) {
            l();
            return false;
        }
        return true;
    });
    N.write(s, true);
    return {
        exceeded,
        maxDepth,
        totalOpens: totalOpens_1,
        maxFmtEstimate,
        formSplices,
        failClosed
    };
}
class M extends uSt {
    #e;
    constructor(s, a, t){
        super(s, a);
        this.#e = t;
    }
    _leaveAttrName() {
        let currentToken = this.currentToken;
        let a = currentToken !== null && "attrs" in currentToken ? currentToken.attrs.length * (1 + (this.currentAttr.name.length >> 6)) : 0;
        if (this.#e(a)) {
            super._leaveAttrName();
        }
    }
}
export { jer, JYr, QYr };
