import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ms, yf } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { Iv, h1, aC, TFe, dl, Uct, Bct } from "/$bunfs/root/chunk-k3tkc302.js";
import { d9t } from "/$bunfs/root/chunk-18a8x2hz.js";
function tst(e) {
    return e === undefined || Object.hasOwn(e, "main");
}
const ae = /[^\t\n\x20-\x7e]/;
const O = /^\p{L}$/u;
const A = /^\p{M}$/u;
const fe = /^\p{White_Space}$/u;
const ue = /^[\p{Emoji}\p{Extended_Pictographic}]$/u;
const G = /^\p{Extended_Pictographic}$/u;
const ce = /^\p{Sm}$/u;
function X(e, n) {
    let r = n.split(" ").map((i)=>`\\p{${e}=${i}}`).join("");
    return new RegExp(`^[${r}]$`, "u");
}
function z(e) {
    return {
        base: X("Script", e),
        mark: X("Script_Extensions", e)
    };
}
function B(e) {
    return {
        base: e,
        mark: e
    };
}
const ee = /^[\p{Script=Arabic}\p{Script=Hebrew}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}\p{Script=Adlam}\p{Script=Hanifi_Rohingya}\p{Script=Yezidi}]$/u;
const le = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Hanifi_Rohingya}]$/u;
const D = /^\p{Nd}$/u;
const Z = z("Arabic Syriac Nko Mongolian Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan");
const pe = z("Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan Arabic Syriac Tifinagh");
const xe = z("Arabic Syriac Mongolian Nko");
const ne = /^[\p{Script=Khmer}\p{Script=Thai}\p{Script=Lao}\p{Script=Myanmar}]$/u;
const de = B(ne);
const V = /^[0-9]$/;
const Y = B(/^\p{Script=Mongolian}$/u);
const be = B(/^\p{Script=Khmer}$/u);
const H = B(/^\p{Script=Egyptian_Hieroglyphs}$/u);
const J = B(/^\p{Script=Duployan}$/u);
const U = /^\p{Script=Brahmi}$/u;
const me = /^[\p{Script=Myanmar}\p{Script=Phags_Pa}\p{Script=Manichaean}]$/u;
function k(e) {
    if (e < 160) {
        return e < 32 && e !== 9 && e !== 10 || e >= 127;
    }
    if (e < 8192) {
        return e === 173 || e === 847 || e === 1564 || e === 4447 || e === 4448 || e === 6068 || e === 6069 || e >= 6155 && e <= 6159;
    }
    if (e < 65536) {
        return e >= 8203 && e <= 8207 || e >= 8232 && e <= 8238 || e >= 8288 && e <= 8303 || e === 12644 || e >= 65024 && e <= 65039 || e === 65279 || e === 65440 || e >= 65520 && e <= 65531;
    }
    return e === 69759 || e >= 78896 && e <= 78911 || e === 94180 || e >= 113824 && e <= 113827 || e >= 119155 && e <= 119162 || e >= 917504 && e <= 921599;
}
const ge = [
    "gbeng",
    "gbsct",
    "gbwls"
];
const re = 5;
function j(e, n) {
    let r = "";
    let i = n + re + 1;
    for(let t = n + 1; t <= i && t < e.length; t++){
        let f = e[t].codePointAt(0) ?? 0;
        if (f === 917631) {
            if (ge.includes(r)) {
                return t;
            }
            return -1;
        }
        if (f < 917601 || f > 917626) {
            return -1;
        }
        r += String.fromCharCode(f - 917504);
    }
    return -1;
}
function p_e(e) {
    let removedByClass = {
        tags: 0,
        bidi: 0,
        zeroWidth: 0,
        selectors: 0,
        other: 0
    };
    if (!ae.test(e)) {
        return {
            text: e,
            removedTotal: 0,
            removedByClass,
            keptConditional: 0
        };
    }
    let r = yf(e);
    let i = [];
    let t = 0;
    let removedTotal = r === e ? 0 : Ee(e);
    removedByClass.other += removedTotal;
    let s = {
        ring: Array(I).fill(0),
        next: 0,
        size: 0,
        lastWasHidden: false,
        keptConditional: 0
    };
    let g = 0;
    let m;
    let S;
    for(let d = 0; d < r.length;){
        let u = r.codePointAt(d);
        let b = d + (u > 65535 ? 2 : 1);
        if (!k(u)) {
            if (u === 10) {
                g = b;
                m = undefined;
                S = undefined;
            } else if (u === 127988) {
                let E = Array.from(r.slice(d, d + 2 * (re + 2)));
                let x = j(E, 0);
                if (x !== -1) {
                    R(s, u, false);
                    d = b;
                    for(let N = 1; N <= x; N++){
                        R(s, E[N].codePointAt(0), true);
                        d += E[N].length;
                    }
                    continue;
                }
            }
            R(s, u, false);
            d = b;
            continue;
        }
        if (v(u)) {
            let E = u === 13 && r.charCodeAt(b) === 10;
            if (d > t) {
                i.push(r.slice(t, d));
            }
            t = b;
            if (!E) {
                i.push(`
`);
                removedTotal++;
                removedByClass.other++;
                R(s, 10, false);
                g = b;
                m = undefined;
                S = undefined;
            }
            d = b;
            continue;
        }
        let p = b < r.length ? r.codePointAt(b) : undefined;
        let c = T(s, 0);
        let { lastWasHidden } = s;
        let l = false;
        switch(u){
            case 8204:
            case 8205:
                {
                    l = y(s, u === 8204 ? Z : pe);
                    if (!l && u === 8205) {
                        let x = c;
                        if (x !== undefined && (x === 65039 || P(x))) {
                            x = T(s, 1);
                            if (x !== undefined && (x === 65039 || P(x))) {
                                x = T(s, 2);
                            }
                        }
                        l = c !== undefined && c !== 8205 && o(G, x) && F(p, G);
                    }
                    if (!l && c !== undefined && !lastWasHidden) {
                        l = u === 8204 ? L(p, Z) && !o(fe, c) && !o(A, c) : L(p, xe) && !o(O, c) && !o(D, c) && !o(A, c);
                    }
                    break;
                }
            case 8203:
                {
                    let E = te(s, de, true);
                    let x = F(p, ne) && !o(A, p);
                    l = E && (x || F(p, V)) || x && M(s, V);
                    break;
                }
            case 65038:
            case 65039:
                l = c !== undefined && !lastWasHidden && (c >= 169 && o(ue, c) || Ce(c) && p === 8419);
                break;
            case 65024:
            case 65025:
            case 65026:
                l = c !== undefined && !lastWasHidden && (o(H.base, c) || u === 65024 && (c >= 8704 && c <= 11007 && o(ce, c) || o(me, c)));
                break;
            case 8206:
            case 8207:
            case 1564:
                if (u === 1564) {
                    if (S === undefined) {
                        S = q(le, r, g);
                    }
                    l = S;
                } else {
                    if (m === undefined) {
                        m = q(ee, r, g);
                    }
                    l = m;
                }
                l = l && !lastWasHidden && (p === undefined || v(p) || !k(p) && !o(A, p)) && !Se(s, p);
                break;
            case 847:
                l = M(s, A) || !lastWasHidden && F(p, A);
                break;
            case 6068:
            case 6069:
                l = y(s, be);
                break;
            case 6155:
            case 6156:
            case 6157:
            case 6158:
            case 6159:
                l = y(s, Y) || !lastWasHidden && L(p, Y);
                break;
            case 69759:
                l = M(s, U) && F(p, U);
                break;
            default:
                if (u >= 78896 && u <= 78911) {
                    l = y(s, H) || !lastWasHidden && L(p, H);
                } else if (u >= 113824 && u <= 113827) {
                    l = y(s, J) || !lastWasHidden && L(p, J);
                }
        }
        if (l) {
            R(s, u, true);
        } else {
            if (d > t) {
                i.push(r.slice(t, d));
            }
            t = b;
            removedTotal++;
            removedByClass[Ae(u)]++;
        }
        d = b;
    }
    let { keptConditional } = s;
    if (t === 0) {
        return {
            text: r,
            removedTotal,
            removedByClass,
            keptConditional
        };
    }
    i.push(r.slice(t));
    return {
        text: i.join(""),
        removedTotal,
        removedByClass,
        keptConditional
    };
}
function o(e, n) {
    return n !== undefined && e.test(String.fromCodePoint(n));
}
function w(e, n) {
    return o(O, n) && o(e, n);
}
function q(e, n, r) {
    for(let i = r; i < n.length;){
        let t = n.codePointAt(i);
        if (v(t)) {
            return false;
        }
        if ((t >= 1424 && t <= 2303 || t >= 64285 && t <= 65023 || t >= 65136 && t <= 65279 || t >= 67584 && t <= 69631 || t >= 124928 && t <= 126975) && w(e, t)) {
            return true;
        }
        i += t > 65535 ? 2 : 1;
    }
    return false;
}
function Q(e) {
    return e === 1600 || o(ee, e);
}
function Se(e, n) {
    let r = o(O, n);
    if (!r && !o(D, n)) {
        return false;
    }
    for(let i = 0; i < e.size; i++){
        let t = T(e, i);
        if (k(t)) {
            return true;
        }
        if (o(A, t)) {
            continue;
        }
        if (r) {
            return o(O, t) && Q(t) === Q(n);
        }
        return o(D, t);
    }
    return e.size >= I;
}
function v(e) {
    return e === 10 || e === 11 || e === 12 || e === 13 || e === 133 || e === 8232 || e === 8233;
}
var I = 16;
function R(e, n, r) {
    e.ring[e.next] = n;
    e.next = (e.next + 1) % I;
    if (e.size < I) {
        e.size++;
    }
    e.lastWasHidden = r;
    if (r) {
        e.keptConditional++;
    }
}
function T(e, n) {
    if (n >= e.size) {
        return;
    }
    return e.ring[(e.next - 1 - n + 2 * I) % I];
}
function M(e, n) {
    return e.size > 0 && !e.lastWasHidden && o(n, T(e, 0));
}
function y(e, n) {
    return te(e, n, false);
}
function te(e, n, r) {
    if (e.lastWasHidden) {
        return false;
    }
    for(let i = 0; i < e.size; i++){
        let t = T(e, i);
        if (o(A, t)) {
            if (!o(n.mark, t)) {
                return false;
            }
            continue;
        }
        if (r) {
            return o(n.base, t);
        }
        return w(n.base, t);
    }
    return false;
}
function F(e, n) {
    return e !== undefined && !k(e) && o(n, e);
}
function L(e, n) {
    return e !== undefined && !k(e) && w(n.base, e);
}
function P(e) {
    return e >= 127995 && e <= 127999;
}
function Ce(e) {
    return e >= 48 && e <= 57 || e === 35 || e === 42;
}
function Ee(e) {
    let n = 0;
    for(let r = 0; r < e.length; r++){
        let i = e.charCodeAt(r);
        if (i >= 55296 && i <= 56319) {
            let t = e.charCodeAt(r + 1);
            if (t >= 56320 && t <= 57343) {
                r++;
            } else {
                n++;
            }
        } else if (i >= 56320 && i <= 57343) {
            n++;
        }
    }
    return n;
}
function Ae(e) {
    if (e >= 917504 && e <= 917631) {
        return "tags";
    }
    if (e === 1564 || e === 8206 || e === 8207 || e >= 8234 && e <= 8238 || e >= 8294 && e <= 8297) {
        return "bidi";
    }
    if (e >= 8203 && e <= 8205 || e === 8288 || e === 65279) {
        return "zeroWidth";
    }
    if (e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999 || e >= 6155 && e <= 6157 || e === 6159) {
        return "selectors";
    }
    return "other";
}
function vLe(e, n = "review", r = "Enter") {
    let i = e === 1 ? "Removed 1 invisible character" : `Removed ${e} invisible characters`;
    switch(n){
        case "review":
            return `${i} \xB7 review and press ${r} to send`;
        case "empty":
            return `${i} \xB7 nothing left to send`;
        case "sent":
            return `${i} from the launch prompt before sending it`;
        case "pasted":
            return `${i} from the pasted text`;
    }
}
const _e = 100;
function aCt(e) {
    return Iv(ie(e));
}
function ie(e) {
    let n = e.normalize("NFC");
    return Array.from(n, (i)=>{
        if (aC(i.codePointAt(0) ?? 0)) {
            return " ";
        }
        return i;
    }).join("").replace(h1, " ").replace(he, " ").replace(/[\u0300-\u036F\u0483-\u0489\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20F0\uA66F-\uA67D\uFE20-\uFE2F]/g, " ");
}
function $Ke(e, n) {
    let r = Array.from(ie(e), (t)=>{
        let f = t.codePointAt(0) ?? 0;
        if (f <= 31 || f >= 127 && f <= 159) {
            return " ";
        }
        return t;
    }).join("").replace(/\s+/g, " ").trim();
    if (r === "") {
        return null;
    }
    let i = Ms(r, n);
    return dl((i === r ? r : `${i.trimEnd()}\u2026`).replace(Uct, Bct));
}
var he = /[\u20DD-\u20E4\u23FA\u25C9\u25CB\u25CE\u25CF\u25EF\u26AA\u26AB\u26AC\u29BE\u29BF\u2B24\u2B55\u2B58\u{1F534}\u{1F535}\u{1F785}-\u{1F78B}\u{1F7E0}-\u{1F7E4}]/gu;
function Vmr(e) {
    return Iv(se(e.normalize("NFC"), false));
}
function Ius(e) {
    return se(e, true);
}
function se(e, n) {
    let r = Array.from(e);
    let i = [];
    for(let t = 0; t < r.length; t++){
        let f = r[t];
        let s = f.codePointAt(0) ?? 0;
        let g = i.at(-1);
        let m = g?.codePointAt(0);
        let S = g === undefined ? n : !/\s/u.test(g);
        if (s === 127988) {
            let h = j(r, t);
            if (h !== -1) {
                i.push(...r.slice(t, h + 1));
                t = h;
                continue;
            }
        }
        if (oe(s)) {
            if (S && (m === undefined || !Te(m))) {
                i.push(f);
            }
            continue;
        }
        if (W(s)) {
            if (S && (m === undefined || !W(m))) {
                i.push(f);
            }
            continue;
        }
        i.push(aC(s) || TFe.test(f) ? " " : f);
    }
    return i.join("");
}
function oe(e) {
    return e >= 6155 && e <= 6157 || e === 6159 || e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}
function W(e) {
    return e === 8204 || e === 8205;
}
function Te(e) {
    return W(e) || oe(e);
}
function Ous(e) {
    let n = Array.from(e.normalize("NFC"), (r)=>{
        if (aC(r.codePointAt(0) ?? 0)) {
            return " ";
        }
        return r;
    }).join("");
    return Iv(n.replace(h1, " "));
}
function jf(e) {
    let n = aCt(e);
    if (n === null) {
        return null;
    }
    let r = Ms(n, _e);
    return dl((r === n ? n : `${r}\u2026`).replace(Uct, Bct));
}
const HM = 20971520;
const Ie = "application/vnd.ant.frame-refusal+json";
function Bd() {
    return {
        Accept: `application/json, ${Ie}`,
        "X-Frame-CP": "go",
        "X-Frame-Surface": "code",
        "X-Frame-Platform": ou() ? "desktop" : "cli",
        "X-Frame-Client-Version": ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION,
        "X-Frame-Session-Id": Iio() ?? K()
    };
}
const Re = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function Iio() {
    let e = a.CLAUDE_CODE_REMOTE_SESSION_ID ?? d9t();
    if (e && Re.test(e)) {
        return e;
    }
}
const ye = /^req_[A-Za-z0-9_-]{4,128}$/;
function f_e(request_id) {
    if (request_id !== undefined && ye.test(request_id)) {
        return {
            request_id
        };
    }
    return {};
}
const ELe = /unknown field|not a recognized|not allowlisted/i;
function SB(e) {
    if (typeof e === "string") {
        return e;
    }
    if (e && typeof e === "object") {
        if ("error" in e && typeof e.error === "string") {
            let n = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
            return e.error + n;
        }
        return _(e) ?? "";
    }
    return "";
}
function qmr(e, n) {
    return e.includes(`'${n}'`) || new RegExp(`"${n}"(?!\\??:)`).test(e);
}
function PHn(e, n) {
    let r = SB(e);
    return ELe.test(r) && qmr(r, n);
}
const eV = /^[A-Za-z0-9_-]{1,64}$/;
export { tst, p_e, vLe, aCt, $Ke, Vmr, Ius, Ous, jf, HM, Bd, Iio, f_e, ELe, SB, qmr, PHn, eV };
