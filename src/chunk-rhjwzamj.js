import { Qjn } from "/$bunfs/root/chunk-pp3y3t61.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { MDt, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { bDt } from "/$bunfs/root/chunk-x47nahfr.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { d7t } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Q0n, uS } from "/$bunfs/root/chunk-9fvky64k.js";
import { L0e, nAt, eOn } from "/$bunfs/root/chunk-0ev62b0n.js";
import { z5t, NAt } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { bCe } from "/$bunfs/root/chunk-5aqxznmv.js";
import { oRe, sRe, zde, sIt, pR } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { QW } from "/$bunfs/root/chunk-xv9n7kza.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { Kc, Yz } from "/$bunfs/root/chunk-svqqgdca.js";
import { createHash } from "crypto";
function RM(e) {
    return e.getMessages?.() ?? e.messages;
}
function H$(e) {
    return e.dispatchedOverBridge === true || e.submissionVerifiedSlackHumanTurn === true;
}
function pot(e) {
    return e.submittedOnLocalStdin === true && !H$(e);
}
function Gye(e) {
    return (e.getIsResponseStreaming?.() ?? e.isMidTurn) === true;
}
function yls(e) {
    return e?.type === "local-jsx" && e.runsBesideTurns?.() === true;
}
function Mo(e) {
    return e.userFacingName?.() ?? e.name;
}
function kd(e) {
    if (!roo(e)) {
        return false;
    }
    return e.isEnabled?.() ?? true;
}
function roo(e) {
    let n;
    try {
        n = e.policyGate;
    } catch  {
        return false;
    }
    if (n == null) {
        return true;
    }
    return Qjn(n.policy);
}
function fot(e, n) {
    let r = e.trimStart();
    if (!r.startsWith("/")) {
        return false;
    }
    let s = r.slice(1).match(/^[a-zA-Z0-9:_-]+/)?.[0];
    let i = r.slice(1).split(/\s/, 1)[0];
    if (s !== undefined && n(s)) {
        return true;
    }
    return i !== undefined && i !== s && i.length > 0 && n(i);
}
function ROn(e, n, r) {
    return e.getContext?.(n, r) ?? e.context ?? "inline";
}
function eKe(e, n, r) {
    let s = e?.immediate;
    if (typeof s === "function") {
        return s(n, r);
    }
    return s === true;
}
const O = 8192;
let c;
let g = new Int32Array(512);
let C = new Int32Array(512);
function M(e) {
    if (c === undefined || c.graphemes.length > nAt) {
        c = eOn(L0e);
    }
    let n = c.segment(e, g, C, false);
    if (n < 0) {
        g = new Int32Array(2 * -n);
        C = new Int32Array(2 * -n);
        n = c.segment(e, g, C, false);
    }
    let r = "";
    for(let s = 0; s < n; s++){
        r += c.graphemes[g[2 * s]];
    }
    if (g.length > O) {
        g = new Int32Array(512);
        C = new Int32Array(512);
    }
    return r;
}
const o5t = `uses ${oRe.map((e)=>`"${e}"`).join(" or ")}, the names reserved for the skills synced from your claude.ai account`;
const D = /^[ -~]*$/;
const B = /[\u001B\u0080-\u009F\n\u000B\f\r\u2028\u2029]/;
function s5t(e) {
    return b(e) ?? (D.test(e) ? undefined : F(e));
}
const A = Yz(new Kc({
    max: 8192,
    maxSize: 4194304,
    sizeCalculation: (e, n)=>n.length
}));
function F(e) {
    if (e.length > Q0n) {
        return E(e);
    }
    let n = A.get(e);
    if (n !== undefined) {
        return n || undefined;
    }
    let r = E(e);
    A.set(MDt(e), r ?? "");
    return r;
}
function E(e) {
    let n = e.trimEnd();
    if (!B.test(n)) {
        return b(M(n));
    }
    let r = uS(n);
    return oRe.find((s)=>{
        let i = 0;
        for (let l of s){
            i = r.indexOf(l, i) + 1;
            if (i === 0) {
                return false;
            }
        }
        return true;
    });
}
function b(e) {
    let n = uS(e);
    for (let r of oRe){
        if (n === r || n.startsWith(`${r}:`)) {
            return r;
        }
        let s = bCe(`${r}:`);
        let i = s.length;
        if (bCe(e.slice(0, i)).toLowerCase().startsWith(s) || bCe(n.slice(0, i)).startsWith(s)) {
            return r;
        }
    }
}
function bW(e) {
    return s5t(e) !== undefined;
}
function tKe(...e) {
    for (let n of e){
        let r = s5t(n);
        if (r !== undefined) {
            return `uses "${r}", a name reserved for the skills synced from your claude.ai account`;
        }
    }
    return o5t;
}
function H(pluginInfo) {
    return pluginInfo.repository === d7t && pluginInfo.accountSkillsWrapper === true;
}
function _ce(e) {
    return e.loadedFrom === "syncedSkills" || e.type === "prompt" && e.source === "plugin" && e.pluginInfo !== undefined && H(e.pluginInfo);
}
function nKe(e) {
    return !_ce(e) && (bW(e.name) || bW(Mo(e)));
}
const j = "tengu_plaid_harbor";
function hAe() {
    return k(j, true) !== false;
}
function _ls(e, n) {
    let r = new Set(n.filter(_ce).map((s)=>uS(s.name)));
    return e.filter((s)=>_ce(s) || !(r.has(uS(s.name)) || [
            s.name,
            Mo(s)
        ].some((i)=>b(i) === undefined && bW(i))));
}
function gAt(e) {
    return !(e.type === "prompt" && e.source === "plugin") && nKe(e) && hAe();
}
class P {
    loaderSide = null;
    register(e) {
        this.loaderSide = e;
    }
}
const I = new P;
function bls(e) {
    I.register(e);
}
function xOn() {
    let I_loaderSide = I.loaderSide;
    if (!I_loaderSide) {
        throw Error("MCP skill builders not registered — loadSkillsDir.ts has not been evaluated yet");
    }
    return I_loaderSide;
}
const dir = `${z5t}/${NAt}`;
function K(skills) {
    return {
        dir,
        skills: new Set(skills)
    };
}
function MD(e) {
    return e.type === "prompt" && e.fromHostCatalog === true;
}
function BI(e) {
    return e.loadedFrom === "syncedSkills" && !MD(e);
}
function z2(e) {
    return MD(e) && QW(pR(e.name));
}
const ooo = 64;
const G = p(()=>u({
        skills: T(o().refine(sIt)).min(1).max(ooo)
    }));
function Sls() {
    let e = bDt();
    if (e === undefined) {
        return null;
    }
    let n = G().safeParse(mt(e, false));
    if (!n.success) {
        t('Ignoring CLAUDE_CODE_HOST_SKILL_CATALOG: expected {"skills": 1 to 64 folder names of ASCII letters, digits, ".", "_" or "-", other than "." and ".."}', {
            level: "warn"
        });
        m("skill_host_catalog", "invalid_value");
        return null;
    }
    return K(n.data.skills);
}
function Kne(e, n) {
    if (n.length === 0 || !e.some((s)=>s.loadedFrom === "syncedSkills")) {
        return [
            ...e
        ];
    }
    let r = new Set;
    yAt(r, n);
    return OOn(e, r);
}
function hAt(e, n, r = false) {
    if (!r && bW(n)) {
        return;
    }
    e.add(uS(n));
}
function yAe(e, n) {
    let r = _ce(n);
    hAt(e, n.name, r);
    hAt(e, Mo(n), r);
    for (let s of n.aliases ?? []){
        hAt(e, s, r);
    }
}
function soo(e, n) {
    e.add(uS(n.name));
    for (let r of n.aliases ?? []){
        e.add(uS(r));
    }
}
function yAt(e, n) {
    for (let r of n){
        if (r.loadedFrom !== "syncedSkills") {
            yAe(e, r);
        }
    }
}
function J(e, n) {
    return uS(pR(e.name)) === "" || n.has(uS(e.name)) || n.has(uS(sRe(Mo(e))));
}
const POn = Q0n;
function mot(e, n) {
    let r = [];
    for (let s of e){
        if (s.isMcp === true && [
            s.name,
            Mo(s),
            ...s.aliases ?? []
        ].some((i)=>i.length > POn)) {
            t(`MCP command not listed: its name, display name or an alias has over ${POn} characters`);
            continue;
        }
        if (gAt(s)) {
            n(s);
            continue;
        }
        r.push(_ce(s) ? s : L(s, bW));
    }
    return r;
}
function L(e, n) {
    let e_aliases = e.aliases;
    if (!e_aliases) {
        return e;
    }
    let s = e_aliases.filter((i)=>!n(i));
    if (s.length === e_aliases.length) {
        return e;
    }
    return {
        ...e,
        aliases: s.length ? s : undefined
    };
}
function zpr(e, n) {
    return e.includes(":") || e.startsWith("mcp__") || n.has(e);
}
function ioo(e) {
    return IOn(e, ()=>true);
}
function aoo(e, n) {
    if (e.loadedFrom !== "syncedSkills") {
        return e;
    }
    if (J(e, n)) {
        return null;
    }
    return IOn(e, (r)=>zpr(uS(r), n));
}
function IOn(e, n) {
    let r = L(e, n);
    if (r.loadedFrom !== "syncedSkills") {
        return r;
    }
    let s = Mo(r);
    if (sRe(s) === s || rKe(r) !== undefined) {
        return r;
    }
    let i = sRe(s);
    return {
        ...r,
        userFacingName: ()=>i
    };
}
function rKe(e) {
    if (e.type === "prompt" && e.loadedFrom === "syncedSkills" && e.unqualifiedName != null && (e.aliases?.includes(e.unqualifiedName) ?? false)) {
        return e.unqualifiedName;
    }
}
function i5t(e) {
    let n = rKe(e);
    if (n !== undefined && zde(n)) {
        return n;
    }
}
function OOn(e, n, r) {
    let s = [];
    for (let i of e){
        let l = aoo(i, n);
        if (l === null) {
            r?.(i);
            continue;
        }
        if (l.loadedFrom === "syncedSkills") {
            soo(n, l);
        }
        s.push(l);
    }
    return s;
}
function wls(e, n) {
    let r = new Set;
    for (let s of n){
        if (BI(s)) {
            r.add(uS(s.name));
        }
    }
    return e.filter((s)=>!MD(s) || !r.has(uS(s.name)));
}
function MOn(e) {
    return e.filter((n)=>n.type === "prompt" && (n.loadedFrom === "mcp" || n.isMcp === true));
}
function a5t(e) {
    return e.configErrorReason === "url_empty" || !e.configError && "url" in e && e.url.trim() === "";
}
function SW(e) {
    let { scope, pluginSource, pluginPath, agentSource, declaredIn, configError, configErrorReason, expandedFromEnv, redialToRelearnRegistration, ...rest } = e;
    let a = rest;
    delete a.tools;
    delete a.discoveryCache;
    delete a.cachedInitResponse;
    delete a.cachedDiscoverResponse;
    delete a.discoverSupport;
    delete a.eligible;
    delete a.ineligibleReason;
    delete a.enterpriseManaged;
    if (a.type === "stdio" || a.type === undefined && "command" in a) {
        a.type = "stdio";
        a.args = a.args ?? [];
    }
    let x = typeof a.url === "string" && URL.canParse(a.url) ? /^([^?#]*\?)([^#]*)(.*)$/s.exec(a.url) : null;
    if (x) {
        let [, h = "", d = "", f = ""] = x;
        a.url = h + d.split("&").sort((S, y)=>{
            let v = Qe(S, "=");
            let R = Qe(y, "=");
            if (v < R) {
                return -1;
            }
            if (v > R) {
                return 1;
            }
            return 0;
        }).join("&") + f;
    }
    if (a5t(e)) {
        a.unconfigured = true;
    }
    if (agentSource !== undefined) {
        a.agentSource = agentSource;
    }
    let N = _(a, (h, d)=>{
        if (d && typeof d === "object" && !Array.isArray(d)) {
            let f = d;
            let S = Object.create(null);
            for (let y of Object.keys(f).sort()){
                S[y] = f[y];
            }
            return S;
        }
        return d;
    });
    return createHash("sha256").update(N).digest("hex").slice(0, 16);
}
function Kn(e, n) {
    return `${e}-${SW(n)}`;
}
export { RM, H$, pot, Gye, yls, Mo, kd, roo, fot, ROn, eKe, o5t, s5t, bW, tKe, _ce, nKe, hAe, _ls, gAt, bls, xOn, MD, BI, z2, ooo, Sls, Kne, hAt, yAe, soo, yAt, POn, mot, zpr, ioo, aoo, IOn, rKe, i5t, OOn, wls, MOn, a5t, SW, Kn };
