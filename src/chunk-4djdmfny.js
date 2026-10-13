import { Wer, Cvn } from "/$bunfs/root/chunk-9bbrket9.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-1ej05ybf.js";
import { sxt, N5, $5 } from "/$bunfs/root/chunk-y9ay3abt.js";
import { NMe, V4r, J4r, evn, Q4r, Vbt, Z4r, VGt } from "/$bunfs/root/chunk-acvzmakd.js";
import { JYr } from "/$bunfs/root/chunk-jyzbw1dw.js";
import { AZe } from "/$bunfs/root/chunk-ahsbr5nq.js";
import { AGe, o3, DS } from "/$bunfs/root/chunk-482qq3zf.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
const S = new RegExp(`^${NMe}$`);
const W = "http://www.w3.org/2000/svg";
const _ = "http://www.w3.org/1998/Math/MathML";
const x = 512;
export function extractInlineScriptHashes(e) {
    let t = new Set;
    let h = (s)=>{
        if ((s.tagName ?? "").toLowerCase() === "script") {
            if ((DS(s, "type") ?? "").trim().toLowerCase() !== "application/json" && DS(s, "src") === undefined) {
                t.add(at(b(s)));
            }
        }
        for (let i of s.childNodes ?? []){
            h(i);
        }
        for (let i of s.content?.childNodes ?? []){
            h(i);
        }
    };
    h(o3(Cvn(e)));
    return t;
}
function b(e) {
    let t = "";
    for (let h of e.childNodes ?? []){
        if (h.nodeName === "#text") {
            t += h.value ?? "";
        }
    }
    return t;
}
const N = 117;
function o(e, snippets) {
    let h = snippets.get(e);
    if (h !== undefined) {
        return h;
    }
    let s = `<${e.tagName ?? e.nodeName}`;
    let i = false;
    for (let f of e.attrs ?? []){
        if (s.length > N) {
            i = true;
            break;
        }
        s += ` ${ne(f.name, 40).replace(/[<>"'=]/g, "")}="\u2026"`;
    }
    s += i ? " …>" : ">";
    let r = $5(s);
    let p = (r.length > 120 ? `${ne(r, N)}\u2026` : r).replace(/\s+/g, " ");
    snippets.set(e, p);
    return p;
}
const T = new Set([
    "href",
    "xlink:href",
    "src",
    "action",
    "formaction",
    "poster",
    "cite"
]);
const A = /(^|[\t\n\f\r ])opener([\t\n\f\r ]|$)/i;
const M = new Set([
    "iframe",
    "embed",
    "object",
    "base",
    "form",
    "link",
    "noscript",
    "frameset",
    "frame",
    "plaintext",
    "select"
]);
const V = new Set([
    "select",
    "template",
    "frameset",
    "colgroup",
    "caption",
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    "body",
    "head",
    "html"
]);
const H = new Set([
    "xmp",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
const O = new Set([
    "animate",
    "set",
    "animatetransform",
    "animatecolor"
]);
const G = new Set([
    "a",
    "image"
]);
const P = 200;
class L extends Array {
    static [Symbol.species] = Array;
    overflow = 0;
    push(...e) {
        for (let t of e){
            if (this.length < P) {
                super.push(t);
            } else {
                this.overflow++;
            }
        }
        return this.length;
    }
}
function z(node, t, h, s) {
    let i = (node.tagName ?? "").toLowerCase();
    let r = node.namespaceURI === W;
    let t_violations = t.violations;
    for (let n of node.attrs ?? []){
        let l = n.name.toLowerCase();
        if (l.startsWith("on") && l.length > 2) {
            t_violations.push({
                rule: "event-handler-attribute",
                where: o(node, t.snippets),
                hint: `Remove the ${$5(ne(n.name, 60))} attribute \u2014 inline event handlers are not allowed; interactivity comes only from the blessed scripts.`
            });
            continue;
        }
        if (l === "ping") {
            t_violations.push({
                rule: "ping-attribute",
                where: o(node, t.snippets),
                hint: "Remove the ping attribute — it is a scriptless beacon."
            });
            continue;
        }
        if (l === "referrerpolicy") {
            t_violations.push({
                rule: "referrerpolicy-attribute",
                where: o(node, t.snippets),
                hint: "Remove the referrerpolicy attribute — the page keeps its default referrer policy."
            });
            continue;
        }
        if (l === "rel" && A.test(n.value)) {
            t_violations.push({
                rule: "rel-opener-attribute",
                where: o(node, t.snippets),
                hint: 'Remove the opener token from rel — it hands the opened page a window.opener handle back to this one. rel="noopener noreferrer" is fine.'
            });
            continue;
        }
        if (l === "target") {
            if (!/^_(?:blank|self)$/i.test(n.value)) {
                t_violations.push({
                    rule: "target-attribute",
                    where: o(node, t.snippets),
                    hint: 'Only target="_blank" or target="_self" are allowed — other targets navigate outside this page.'
                });
            }
            continue;
        }
        if (l === "data-anchor" && !V4r.test(n.value)) {
            t_violations.push({
                rule: "bad-anchor-value",
                where: o(node, t.snippets),
                hint: "data-anchor must be 1-120 chars of letters, digits, space, or . _ : / @ # ( ) + - (no markup or quote characters)."
            });
            continue;
        }
        if (l === "srcset") {
            for (let v of n.value.split(",")){
                let w = v.trim().split(/\s+/)[0];
                if (w !== undefined && w !== "" && !AZe(w)) {
                    t_violations.push({
                        rule: "unsafe-url",
                        where: o(node, t.snippets),
                        hint: `srcset entry "${$5(ne(w, 60))}" \u2014 only http(s), mailto, relative, or fragment URLs are allowed.`
                    });
                }
            }
            continue;
        }
        if (r && (l === "href" || l === "xlink:href")) {
            if (G.has(i)) {
                if (!AZe(n.value)) {
                    t_violations.push({
                        rule: "unsafe-url",
                        where: o(node, t.snippets),
                        hint: "Only http(s), mailto, relative, or fragment URLs are allowed."
                    });
                }
            } else if (!N5(n.value).startsWith("#")) {
                t_violations.push({
                    rule: "svg-nonlocal-reference",
                    where: o(node, t.snippets),
                    hint: `<${$5(ne(i, 60))}> may only reference fragments within the page (href="#\u2026").`
                });
            }
            continue;
        }
        if (T.has(l) && !AZe(n.value)) {
            t_violations.push({
                rule: "unsafe-url",
                where: o(node, t.snippets),
                hint: "Only http(s), mailto, relative, or fragment URLs are allowed."
            });
        }
    }
    let p = DS(node, "data-ws-state");
    if (p !== undefined) {
        t.banners.push({
            value: p,
            node
        });
    }
    let f = DS(node, J4r);
    if (f !== undefined) {
        t.deliverableKinds.push(f);
    }
    let g = !r && i === "script" && (DS(node, "type") ?? "").trim().toLowerCase() === "application/json" && DS(node, "src") === undefined && DS(node, "id") === "ws-decisions";
    if (DS(node, "id") === "ws-decisions" && !g) {
        t.wsIdMisuse.push(node);
        t_violations.push({
            rule: "island-id-misuse",
            where: o(node, t.snippets),
            hint: "Only the ws-decisions JSON script element may carry this id — the page script locates the island by it."
        });
    }
    let d = s;
    let c = DS(node, "data-decision-id");
    if (c !== undefined) {
        d = c;
        if (!S.test(c)) {
            t_violations.push({
                rule: "bad-decision-id",
                where: o(node, t.snippets),
                hint: "data-decision-id must match the slug grammar."
            });
        } else {
            let n = t.items.get(c);
            if (n !== undefined) {
                n.count++;
            } else {
                t.items.set(c, {
                    state: DS(node, "data-decision-state") ?? "",
                    resolvedChoice: DS(node, "data-resolved-choice"),
                    resolvedCustom: DS(node, "data-resolved-custom"),
                    leanChoice: DS(node, "data-lean-choice"),
                    choices: [],
                    count: 1
                });
            }
        }
    }
    let u = DS(node, "data-choice");
    if (u !== undefined) {
        if (d === null) {
            t.orphanChoices.push(node);
        } else if (!S.test(u)) {
            t_violations.push({
                rule: "bad-choice-token",
                where: o(node, t.snippets),
                hint: "data-choice must match the slug grammar."
            });
        } else {
            t.items.get(d)?.choices.push(u);
        }
    }
    if (i === "script") {
        if (r) {
            t_violations.push({
                rule: "svg-script",
                where: o(node, t.snippets),
                hint: "Remove it — scripts are not allowed inside SVG diagrams."
            });
            return d;
        }
        if (DS(node, "src") !== undefined) {
            if (!(DS(node, "src") === sxt && (node.attrs ?? []).length === 1 && (node.childNodes ?? []).length === 0)) {
                t_violations.push({
                    rule: "script-src",
                    where: o(node, t.snippets),
                    hint: "External scripts are not allowed — the page must be self-contained."
                });
            }
            return d;
        }
        if ((DS(node, "type") ?? "").trim().toLowerCase() === "application/json") {
            if (g) {
                t.islands.push({
                    text: b(node),
                    node
                });
            } else {
                t_violations.push({
                    rule: "unknown-data-island",
                    where: o(node, t.snippets),
                    hint: "Only the ws-decisions island may use a JSON script element — the session extracts the island mechanically, and a second JSON block could confuse that extraction."
                });
            }
            return d;
        }
        let l = at(b(node));
        if (!h.has(l)) {
            t_violations.push({
                rule: "script-not-blessed",
                where: o(node, t.snippets),
                hint: "Inline scripts must be byte-identical copies of the blessed template scripts. Re-copy the script from the template; never edit or add scripts."
            });
        }
        return d;
    }
    if (i === "math" && node.namespaceURI === _) {
        t_violations.push({
            rule: "mathml-not-allowed",
            where: o(node, t.snippets),
            hint: "<math> is not allowed on a workshop page — MathML subtrees are serialization-hazard surfaces (mutation-XSS carriers); render formulas as text or SVG."
        });
        return d;
    }
    if (r && i === "style") {
        t_violations.push({
            rule: "svg-style",
            where: o(node, t.snippets),
            hint: "Remove it — <style> inside SVG is a serialization-hazard surface (mutation-XSS carrier); use the page-level <style> block or SVG presentation attributes."
        });
        return d;
    }
    if (r && H.has(i)) {
        t_violations.push({
            rule: "svg-rawtext-hazard",
            where: o(node, t.snippets),
            hint: `Remove it \u2014 <${i}> inside SVG is a serialization-hazard surface (mutation-XSS carrier); SVG diagrams need none of the rawtext-named elements.`
        });
        return d;
    }
    if (r && (i === "iframe" || i === "embed" || i === "object")) {
        t_violations.push({
            rule: "refused-element",
            where: o(node, t.snippets),
            hint: `<${i}> is not allowed on a workshop page, inside or outside SVG.`
        });
        return d;
    }
    if (r && V.has(i)) {
        t_violations.push({
            rule: "refused-element",
            where: o(node, t.snippets),
            hint: `Remove it \u2014 <${i}> is not an SVG element, and browsers and this verifier parse what follows it differently, so later markup could go uninspected.`
        });
        return d;
    }
    if (!r && M.has(i)) {
        t_violations.push({
            rule: "refused-element",
            where: o(node, t.snippets),
            hint: i === "form" ? "Forms are not allowed (scriptless submission is an exfiltration channel). Inputs and buttons WITHOUT a form are fine for mock-ups." : i === "link" ? "Link elements are not allowed — inline styles in the <style> block instead." : i === "noscript" ? "noscript is not allowed — its contents bypass inspection (raw text to scripting-enabled parsers) yet render for JS-off viewers." : i === "select" ? "<select> is not allowed — browsers and this verifier parse its contents differently, so markup inside it would go uninspected. Mock up the control with a list or buttons instead." : i === "frameset" || i === "frame" ? `<${i}> is not allowed \u2014 frameset documents replace the page with embedded documents.` : `<${i}> is not allowed on a workshop page.`
        });
        return d;
    }
    if (!r && i === "meta" && DS(node, "http-equiv") !== undefined) {
        t_violations.push({
            rule: "meta-http-equiv",
            where: o(node, t.snippets),
            hint: "http-equiv metas (CSP/refresh) are not allowed; a charset meta is fine."
        });
        return d;
    }
    if (!r && i === "meta" && [
        "referrer",
        "origin-trial"
    ].includes((DS(node, "name") ?? "").trim().toLowerCase())) {
        t_violations.push({
            rule: "meta-behavior",
            where: o(node, t.snippets),
            hint: "referrer and origin-trial metas are not allowed; charset/viewport/description metas are fine."
        });
        return d;
    }
    if (r && i === "foreignobject") {
        t_violations.push({
            rule: "svg-foreignobject",
            where: o(node, t.snippets),
            hint: "foreignObject embeds arbitrary HTML inside SVG — draw with native SVG shapes and <text> instead."
        });
        return d;
    }
    if (r && O.has(i)) {
        let n = (DS(node, "attributename") ?? "").trim().toLowerCase();
        if (n.startsWith("on") || T.has(n) || n === "style" || n === "class" || n === "srcset" || n === "data-anchor" || n === "target" || n === "rel" || n === "ping" || n === "referrerpolicy") {
            t_violations.push({
                rule: "svg-smil-target",
                where: o(node, t.snippets),
                hint: "SMIL may only animate geometry and paint properties — never URL (href/src/srcset…), navigation (target/rel/ping/referrerpolicy), script (on*), style/class, or workshop-surface attributes."
            });
            return d;
        }
    }
    return d;
}
function y(e, t, h, s, i = false, r = 0) {
    if (r > x) {
        if (!t.nestingTruncated) {
            t.nestingTruncated = true;
            t.violations.push({
                rule: "markup-nests-too-deeply",
                where: o(e, t.snippets),
                hint: `Markup nests deeper than ${x} elements \u2014 browsers flatten past this depth, so restructure the page with flatter markup.`
            });
        }
        return;
    }
    let a = s;
    if (e.tagName !== undefined) {
        a = z(e, t, h, s);
        if (i && (DS(e, "id") === "ws-decisions" || DS(e, "data-decision-id") !== undefined || DS(e, "data-choice") !== undefined)) {
            t.violations.push({
                rule: "template-content-surface",
                where: o(e, t.snippets),
                hint: "Workshop surface (the island or decision markup) must not sit inside <template> content — the page script can never see it there."
            });
        }
    }
    for (let p of e.childNodes ?? []){
        y(p, t, h, a, i, r + 1);
    }
    for (let p of e.content?.childNodes ?? []){
        y(p, t, h, a, true, r + 1);
    }
}
export function verifyWorkshopHtml(e, t, h = "strict") {
    try {
        if (JYr(e)) {
            return {
                ok: false,
                violations: [
                    {
                        rule: "markup-nests-too-deeply",
                        where: "(document)",
                        hint: "The page has too many nested or unclosed elements to verify affordably — close open tags and restructure with flatter markup."
                    }
                ]
            };
        }
        return j(e, t, h);
    } catch (error) {
        return {
            ok: false,
            violations: [
                {
                    rule: "verifier-error",
                    where: "(document)",
                    hint: `The verifier could not examine this page (${$5(error instanceof Error ? error.name : "error")}) \u2014 refusing rather than publishing unexamined markup; simplify the page structure.`
                }
            ]
        };
    }
}
function j(e, t, h) {
    let s = C(e, t, h);
    if (!s.ok || !s.workshopSurface) {
        return s;
    }
    let i = R(e);
    let r = C(i, t, "strict");
    if (!r.ok) {
        return {
            ok: false,
            violations: [
                {
                    rule: "reparse-divergence",
                    where: "(document)",
                    hint: "The page verifies as written, but the parse→serialize round trip every decision confirm republishes does not — restructure the markup flagged below so the serialized form stays within contract."
                },
                ...r.violations.slice(0, 6)
            ]
        };
    }
    let a = R(i);
    if (a !== i) {
        let p = 0;
        let f = Math.min(i.length, a.length);
        while(p < f && i[p] === a[p]){
            p++;
        }
        let g = Math.max(0, p - 40);
        let d = i.charCodeAt(g);
        if (d >= 56320 && d <= 57343) {
            g++;
        }
        let c = i.slice(g, p + 80);
        let u = c.charCodeAt(c.length - 1);
        if (u >= 55296 && u <= 56319) {
            c = c.slice(0, -1);
        }
        return {
            ok: false,
            violations: [
                {
                    rule: "reparse-not-fixed-point",
                    where: `(document, first divergence near "\u2026${$5(ne(c, 117).replace(/\s+/g, " "))}\u2026")`,
                    hint: "The page serializes to different bytes on a second parse→serialize round, so each decision confirm would keep rewriting it — this indicates parser/serializer-divergent markup; simplify the construct at the quoted position."
                }
            ]
        };
    }
    return s;
}
function R(e) {
    let t = o3(Cvn(e));
    k(t);
    return Wer(t);
}
const D = new Set([
    "pre",
    "textarea",
    "listing"
]);
function k(e) {
    if (D.has((e.tagName ?? "").toLowerCase()) && e.namespaceURI === AGe) {
        let t = e.childNodes?.[0];
        if (t !== undefined && t.nodeName === "#text" && (t.value ?? "").startsWith(`
`)) {
            t.value = `
${t.value}`;
        }
    }
    for (let t of e.childNodes ?? []){
        k(t);
    }
    for (let t of e.content?.childNodes ?? []){
        k(t);
    }
}
function C(e, t, h) {
    let s = {
        violations: new L,
        snippets: new WeakMap,
        nestingTruncated: false,
        islands: [],
        banners: [],
        deliverableKinds: [],
        wsIdMisuse: [],
        items: new Map,
        orphanChoices: []
    };
    let i = o3(Cvn(e, {
        sourceCodeLocationInfo: true
    }));
    y(i, s, t, null);
    let s_violations = s.violations;
    let decisionCount = 0;
    let workshopState = "in-progress";
    let length = Vbt(e, "ws-decisions").length;
    let s_nestingTruncated = s.nestingTruncated;
    if (h === "probe" && !s_nestingTruncated && s.islands.length === 0 && s.wsIdMisuse.length === 0 && length === 0) {
        return {
            ok: true,
            workshopSurface: false
        };
    }
    for (let c of s.islands){
        let u = c.node.sourceCodeLocation?.startTag;
        if (u === undefined || u === null) {
            s_violations.push({
                rule: "island-noncanonical-spelling",
                where: o(c.node, s.snippets),
                hint: "The island element has no source location — refusing rather than skipping the canonical-spelling check."
            });
            continue;
        }
        let n = e.slice(u.startOffset, u.endOffset);
        let l = Vbt(n, "ws-decisions");
        if (l.length !== 1 || l[0][1] !== n.length) {
            s_violations.push({
                rule: "island-noncanonical-spelling",
                where: o(c.node, s.snippets),
                hint: `The ws-decisions island's open tag must END with the exact bytes ${Q4r} (double-quoted id attribute, last in the tag, as the template ships it; a page read back from the server may carry the server's own data-id after the id, nothing else) \u2014 the session's mechanical extraction scans for that sequence.`
            });
        }
        let m = c.node.sourceCodeLocation?.endTag;
        if (m === undefined || m === null) {
            s_violations.push({
                rule: "island-noncanonical-spelling",
                where: o(c.node, s.snippets),
                hint: "The island element has no close-tag source location — refusing rather than skipping the canonical-spelling check."
            });
            continue;
        }
        if (e.slice(m.startOffset, m.endOffset) !== "</script>") {
            s_violations.push({
                rule: "island-noncanonical-spelling",
                where: o(c.node, s.snippets),
                hint: "The ws-decisions island's close tag must be exactly the lowercase </script> as the template ships it — case-variant or attribute-bearing closes split the island locators."
            });
        }
    }
    let d = length;
    if (d !== s.islands.length) {
        s_violations.push({
            rule: "island-sentinel-ambiguity",
            where: "(document)",
            hint: `The island open-tag ending ${Q4r} (counting the form a server read-back carries, with the server's data-id after the id) appears ${d} time(s) but ${s.islands.length} real island element(s) exist \u2014 the session's mechanical island extraction scans for exactly that sequence. Keep the island's id attribute LAST in its script tag (as the template ships it), and escape or rephrase any other text containing the sequence.`
        });
    }
    for (let c of s.orphanChoices){
        s_violations.push({
            rule: "orphan-choice",
            where: o(c, s.snippets),
            hint: "data-choice elements must sit inside a data-decision-id item — a free-floating option row is a forged affordance."
        });
    }
    if (s.islands.length > 1) {
        s_violations.push({
            rule: "duplicate-island",
            where: o(s.islands[1].node, s.snippets),
            hint: "Exactly one ws-decisions island per page."
        });
    } else if (s.islands.length === 0) {
        if (s.items.size > 0) {
            s_violations.push({
                rule: "missing-island",
                where: "(document)",
                hint: "Decision items exist but there is no ws-decisions island — the session reads decisions ONLY from the island."
            });
        }
    } else {
        let c = Z4r(s.islands[0].text);
        if (c === null) {
            s_violations.push({
                rule: "island-grammar",
                where: o(s.islands[0].node, s.snippets),
                hint: 'The ws-decisions island failed the entry grammar: one {"items":[…]} object, each entry exactly {id, opts, state, choice, custom} with slug ids and opts, state open|resolved, and the resolution invariant (open: neither choice nor custom; resolved: exactly one). Re-emit the island from your decision blocks.'
            });
        } else {
            let u = new Set(c.map((n)=>n.id));
            for (let n of c){
                let l = s.items.get(n.id);
                if (l === undefined) {
                    s_violations.push({
                        rule: "island-markup-mismatch",
                        where: `island entry "${n.id}"`,
                        hint: "Every island entry needs exactly one matching data-decision-id element."
                    });
                    continue;
                }
                if (l.count !== 1) {
                    s_violations.push({
                        rule: "duplicate-decision-item",
                        where: `data-decision-id "${n.id}"`,
                        hint: "Each decision id may appear on exactly one element."
                    });
                    continue;
                }
                if (l.state !== n.state) {
                    s_violations.push({
                        rule: "island-markup-mismatch",
                        where: `decision "${n.id}"`,
                        hint: `Island says state "${$5(n.state)}" but the markup says "${$5(ne(l.state, 60))}" \u2014 flip them together.`
                    });
                }
                if (n.state === "open" && (l.resolvedChoice !== undefined || l.resolvedCustom !== undefined)) {
                    s_violations.push({
                        rule: "island-markup-mismatch",
                        where: `decision "${n.id}"`,
                        hint: "An open item must carry neither data-resolved-choice nor data-resolved-custom — remove the stray resolution attribute."
                    });
                }
                if (n.state === "resolved") {
                    if ((l.resolvedChoice ?? null) !== n.choice) {
                        s_violations.push({
                            rule: "island-markup-mismatch",
                            where: `decision "${n.id}"`,
                            hint: "data-resolved-choice must equal the island entry choice (and be absent for typed answers)."
                        });
                    }
                    if ((l.resolvedCustom ?? null) !== n.custom) {
                        s_violations.push({
                            rule: "island-markup-mismatch",
                            where: `decision "${n.id}"`,
                            hint: "data-resolved-custom must equal the island entry custom, byte for byte (and be absent for option picks)."
                        });
                    }
                }
                let m = [
                    ...l.choices
                ].sort();
                let v = [
                    ...n.opts
                ].sort();
                if (m.length !== v.length || m.some((w, I)=>w !== v[I])) {
                    s_violations.push({
                        rule: "island-markup-mismatch",
                        where: `decision "${n.id}"`,
                        hint: "The data-choice rows must match the island opts exactly, one row per opt."
                    });
                }
                if (l.leanChoice !== undefined && !n.opts.includes(l.leanChoice)) {
                    s_violations.push({
                        rule: "island-markup-mismatch",
                        where: `decision "${n.id}"`,
                        hint: "data-lean-choice must be one of the island entry opts."
                    });
                }
            }
            for (let n of s.items.keys()){
                if (!u.has(n)) {
                    s_violations.push({
                        rule: "forged-decision-item",
                        where: `data-decision-id "${n}"`,
                        hint: "Every decision item must have a ws-decisions island entry — a call-item without one is a forged decision surface."
                    });
                }
            }
            E(s, c, s_violations);
            decisionCount = c.length;
            workshopState = VGt(c);
        }
    }
    if (s.islands.length === 0) {
        E(s, [], s_violations);
    }
    if (s_violations.overflow > 0) {
        s_violations[s_violations.length] = {
            rule: "violation-cap-reached",
            where: "(document)",
            hint: `${s_violations.overflow} more violations were found but not recorded \u2014 fix the violation classes listed above and re-publish.`
        };
    }
    if (s_violations.length === 0) {
        return {
            ok: true,
            workshopSurface: true,
            decisionCount,
            workshopState,
            deliverables: evn(s.deliverableKinds)
        };
    }
    return {
        ok: false,
        violations: s_violations
    };
}
const U = new Set([
    "in-progress",
    "ready",
    "started"
]);
function E(e, t, h) {
    if (e.banners.length === 0) {
        return;
    }
    let s = VGt(t);
    for (let i of e.banners){
        if (!U.has(i.value)) {
            h.push({
                rule: "banner-state-invalid",
                where: o(i.node, e.snippets),
                hint: "data-ws-state must be one of in-progress|ready|started."
            });
        } else if (i.value !== s) {
            h.push({
                rule: "banner-state-mismatch",
                where: o(i.node, e.snippets),
                hint: `data-ws-state says "${$5(i.value)}" but the island derives "${s}" \u2014 flip them together (text stays yours; the attribute is the wire contract).`
            });
        }
    }
}
