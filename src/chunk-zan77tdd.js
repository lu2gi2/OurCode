import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { xn } from "/$bunfs/root/chunk-k3tkc302.js";
import { ys } from "/$bunfs/root/chunk-0ycjphb5.js";
import { vt, VL, wc, KD, Om, qL } from "/$bunfs/root/chunk-0vgmtssp.js";
import { pb, t3o } from "/$bunfs/root/chunk-sqysdndt.js";
import { iM } from "/$bunfs/root/chunk-gs3dthpm.js";
import { cg, Eb, Tit, Xg, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { Whs, VS, SV, fxt, W5, IT, kw, xCe, qD, pde, VA } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { DU, V6, r$, B_t, OX, oae } from "/$bunfs/root/chunk-cyq0svt5.js";
import { DC, n7n, cte, L_t, o7n } from "/$bunfs/root/chunk-tkmyd255.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
function REe() {
    return ee().frozenMultiFile ?? iM();
}
function iD(t) {
    return IT() && Xg(t);
}
function Cze() {
    return {
        behavior: "deny",
        message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.",
        decisionReason: {
            type: "safetyCheck",
            reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session",
            classifierApprovable: false
        }
    };
}
function nzt(t, e = "file_path") {
    return {
        behavior: "deny",
        message: `cannot read ${e} (${t}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`,
        decisionReason: {
            type: "safetyCheck",
            reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session",
            classifierApprovable: false
        }
    };
}
function xEe(t, e, n) {
    if (RX(t, e.slug) || B_t(vt(e.slug), n)) {
        return true;
    }
    if (!(n7n && de(t).mode === "plan")) {
        let o = vt(e.slug);
        if (qD(o)) {
            return fxt("foreign_read", e.slug) || W5(Tit(t), "artifactAssetReadHumanConsentSlugs", e.slug);
        }
        return n || KD(o) && L_t(e) === false || (xCe(n, e) ? fxt("foreign_read", e.slug) : SV("foreign_read", e.slug));
    }
    return W5(Tit(t), de(t).mode === "plan" || xCe(n, e) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug);
}
function lte(t, e, n, s = "copy") {
    let o = vt(e.slug);
    if (s === "copy" && VA(o)) {
        return o7n(t, e.slug);
    }
    let i = wc(o);
    return i && (!DU(o) || r$(o)) && !(n === "files" && V6(o)) || xEe(t, e, i);
}
function RX(t, e) {
    return g(de(t).mode, e);
}
function g(mode, e) {
    return mode !== "plan" && f(e);
}
function f(t) {
    let e = vt(t);
    return KD(e) && !qD(e) && e?.lastProbeIssuedAt !== undefined && !VL(e.lastProbeIssuedAt) && t3o(t);
}
function Rze(t, e) {
    return QQn(de(t).mode, e);
}
function QQn(t, e) {
    return t !== "plan" && Cbn(e);
}
function Cbn(t) {
    return p(t) && f(t);
}
function p(t) {
    let e = vt(t);
    return e !== undefined && e.probeFailed !== true && e.mode === "org";
}
function m(t, slug) {
    let n = vt(slug);
    return de(t).mode !== "plan" && n?.probeFailed === true && n.probeGone === true && n.lastProbeIssuedAt !== undefined && !VL(n.lastProbeIssuedAt) && pb(slug) === "first_party_type";
}
function xX(t, e, n = false) {
    let s = DC("read", t, e);
    if (n ? Rze(e, t.slug) : RX(e, t.slug) || m(e, t.slug)) {
        return {
            ask: false,
            foreignRead: true,
            attested: true
        };
    }
    return VS(s);
}
function Rbn(t, e) {
    let n = vt(t.slug);
    let s = VA(n) ? VS({
        ...DC("read", t, e),
        owned: false,
        outsideOrg: true
    }) : xX(t, e);
    if (s.ask && s.about === "outside_org") {
        return {
            ...s,
            answeredBy: Whs,
            informedOnly: true
        };
    }
    return s;
}
function u2r(t, e) {
    if (Eb(t) || iD(t)) {
        return ()=>"none";
    }
    let n = kw(e) || pde(e.slug);
    if (!cg(t)) {
        return (a)=>{
            if (n && !a) {
                return "none";
            }
            return "save";
        };
    }
    let s = de(t);
    let o = s.mode === "auto";
    let i = s.shouldAvoidPermissionPrompts === true;
    return (a)=>{
        if (o && !(n && !a)) {
            return "save";
        }
        if (i) {
            return "none";
        }
        return "ask";
    };
}
function Ojs(t, e, n) {
    if (!(Om(e.slug) && !ys(t.agentContext))) {
        OX("webfetch", t, e.slug, false);
        return null;
    }
    let o = n();
    let i = xn(e);
    return ({ forcedBy, personOnly })=>{
        let matchedAskRule = forcedBy ?? o;
        OX("webfetch", t, e.slug, true, matchedAskRule !== null);
        let l = `${personOnly?.lead ?? `Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
        if (matchedAskRule === null) {
            let c = cte(t, "Nothing was fetched", l);
            if (c !== null) {
                return c;
            }
        }
        let d = matchedAskRule === null ? l : `${l} \u2014 your ${matchedAskRule.ruleValue.toolName} ask rule covers ${matchedAskRule.ruleValue.toolName !== pr && matchedAskRule.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
        return {
            behavior: "ask",
            message: d,
            decisionReason: {
                type: "safetyCheck",
                reason: d,
                classifierApprovable: matchedAskRule === null && personOnly === undefined
            },
            ...matchedAskRule !== null && {
                matchedAskRule
            },
            suppressAlwaysAllowRule: true,
            localDisplayOnly: true
        };
    };
}
function Mjs(t, e) {
    if (oae("webfetch", t, e.slug, false) && !ys(t.agentContext)) {
        qL(e.slug);
    }
}
export { REe, iD, Cze, nzt, xEe, lte, RX, Rze, QQn, Cbn, xX, Rbn, u2r, Ojs, Mjs };
