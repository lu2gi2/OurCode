import { je } from "/$bunfs/root/chunk-r3z1chqx.js";
import { nr } from "/$bunfs/root/chunk-wew3321y.js";
import { mtn, ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { mnn, lUe, eh as marketplace, y0, $Se, epe, EO } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { f7t } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function XB(e) {
    return /^\w[\w.@-]*$/.test(e);
}
function Fa(e, n, t) {
    if (!XB(n)) {
        return null;
    }
    return `claude ${e} ${n}${t ? ` ${t}` : ""}`;
}
function Pg(e, n, { extra, tail = "", fallback }) {
    let o = Fa(e, n, extra);
    if (o === null) {
        return fallback;
    }
    return `run \`${o}\`${tail ? ` ${tail}` : ""}`;
}
const fn = "anthropic-plugin-directory";
const eUn = 30000;
function JM(e) {
    return e.toLowerCase() === fn;
}
function NE(e) {
    return uwr(e, fn);
}
function uwr(e, n) {
    let t = e.normalize("NFKC");
    return E(e) === n || E(t) === n || E(t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase().replace(/[. ]+$/, "")) === n;
}
function E(e) {
    return e.replace(/[^a-zA-Z0-9\-_]/g, "-").toLowerCase();
}
function tUn(e) {
    if (e.startsWith("@")) {
        let t = e.endsWith("@npm") ? e.slice(0, -4) : e;
        if (!t.includes("..") && !t.includes("//") && /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/.test(t)) {
            return false;
        }
    }
    let n = e.split("@");
    return n.length > 1 && (NE(n[1] ?? "") || NE(n.at(-1) ?? ""));
}
const yr = "Anthropic Directory";
function xws(e, n) {
    let t = S(e);
    return t !== "" && t === S(n);
}
function S(e) {
    return e.normalize("NFKC").toUpperCase().toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}
function Ude(e) {
    return `"${e}" is a reserved marketplace name.`;
}
function Pws(e, n) {
    if (XB(e)) {
        return `"${e}" is another spelling of "${n}", a reserved marketplace name.`;
    }
    return `This marketplace's name is another spelling of "${n}", a reserved marketplace name. It is not exactly the reserved name it appears to be.`;
}
function Ggo(e) {
    if (e.endsWith(".")) {
        return null;
    }
    return Fa("plugin marketplace remove", e);
}
function pwr(e, n, t = fn, r = false) {
    let i = Ggo(e);
    if (r) {
        if (i === null) {
            return `known_marketplaces.json has an entry under another spelling of "${t}", a reserved marketplace name, so it is ignored. Remove that entry from known_marketplaces.json; its name is not exactly the reserved name it appears to be.`;
        }
        return `known_marketplaces.json has an entry named "${e}", another spelling of the reserved marketplace name "${t}", so it is ignored. Remove it with: ${i}`;
    }
    if (!n || t !== fn) {
        if (i === null) {
            return `known_marketplaces.json has an entry under another spelling of "${t}", a reserved marketplace name, so it is ignored. Remove that entry from known_marketplaces.json.`;
        }
        return `known_marketplaces.json has an entry named "${e}", a reserved marketplace name, so it is ignored. Remove it with: ${i}`;
    }
    if (e === fn) {
        return `known_marketplaces.json has an entry named "${fn}" that is not the built-in ${yr}, so it is ignored. Remove it with: claude plugin marketplace remove ${fn}`;
    }
    if (i === null) {
        return `known_marketplaces.json has an entry under another spelling of "${fn}", the name reserved for the built-in ${yr}, so it is ignored. Remove that entry from known_marketplaces.json.`;
    }
    return `known_marketplaces.json has an entry named "${e}", a spelling of the name reserved for the built-in ${yr}, so it is ignored. Remove it with: ${i}`;
}
function nUn(e) {
    return `The known_marketplaces.json entry named "${je(e)}" is already gone.`;
}
function ylt(e, n) {
    if (n) {
        return `Removed the known_marketplaces.json entry named "${je(e)}". It was not the built-in ${yr}, which is unchanged.`;
    }
    return `Removed the known_marketplaces.json entry named "${je(e)}". That name is reserved.`;
}
function fwr(e, { disabledNote = true } = {}) {
    let t = e.slice(0, 5).map((i)=>je(i)).join(", ");
    let r = e.length - 5;
    if (r > 0) {
        return `${t} and ${r} more${disabledNote ? " (claude plugin list shows them as disabled)" : ""}`;
    }
    return t;
}
function Ooe(e, n, { insideFailure = false } = {}) {
    {
        if (e.length === 0) {
            return null;
        }
        let r = fwr(e);
        let i = insideFailure ? "" : " Other projects' settings are not checked: a plugin that another project's own settings turn on stays on there.";
        if (n === "catalog_unreadable") {
            return `Turned off ${r}: they could not be checked against the commit the ${yr} lists. To use one again once the ${yr} is available: claude plugin update <id>, then claude plugin enable <id>.${i}`;
        }
        return `Turned off ${r}: not at the commit the ${yr} lists. To use one again: claude plugin update <id>, then claude plugin enable <id>.${i}`;
    }
    return null;
}
function c7t(e) {
    return `${yr} is blocked by your organization. ${e} There is nothing to remove or turn off.`;
}
function Iws(e) {
    return `${yr} is blocked by your organization. ${e} It was not updated.`;
}
function e8(e) {
    if (e === fn) {
        return yr;
    }
    return e;
}
function rf(e) {
    return e?.source === "pluginDirectory";
}
function rUn(e) {
    let n = e;
    for (let [t, r] of Object.entries(e)){
        if (r?.source?.source === "pluginDirectory") {
            if (n === e) {
                n = {
                    ...e
                };
            }
            delete n[t];
        }
    }
    return n;
}
const N = String.raw`[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.?`;
const x = "[A-Za-z0-9._-]+";
const k = "[A-Za-z0-9._~-]";
const C = `${k}+(?::${k}*)?@`;
const O = ":[1-9][0-9]{0,4}";
const v = `(?:/(?:${k}|%[0-9A-Fa-f]{2})*)*`;
const U = new RegExp(`^${x}/${x}$`);
const j = new RegExp(`^git@(${N}):(${x}(?:/${x})*)/?$`);
const M = `(?:${C})?(${N})(?:${O})?(${v})$`;
const K = new RegExp(`^https://${M}`);
const F = new RegExp(`^https?://${M}`);
const _ = `ssh.${nr}`;
const z = "wide:";
function W(e, n) {
    let t = U.test(e);
    let r = j.exec(e);
    let i = (n ? F : K).exec(e);
    let host = t ? nr : r?.[1] ?? i?.[1];
    if (host === undefined) {
        return;
    }
    let c = host.toLowerCase().replace(/\.$/, "");
    if (host.endsWith(".") && c !== nr && c !== `www.${nr}`) {
        return;
    }
    let path = t ? `/${e}` : r ? `/${r[2]}` : i?.[2] || "/";
    if (path.split("/").some((l)=>/^(?:\.|%2e){1,2}$/i.test(l) || t && /^\.git$/i.test(l))) {
        return;
    }
    return {
        url: i ? e : `https://${host}${path}`,
        host,
        path,
        scp: r !== null
    };
}
function qYe(e, n, t) {
    let r = t?.blocklistDirection === true;
    let i;
    let o;
    let c;
    let s = W(e, r);
    if (s === undefined) {
        return;
    }
    try {
        let a = new URL(s.url);
        if (a.hostname !== s.host.toLowerCase() || a.pathname !== s.path) {
            return;
        }
        let d = a.hostname.replace(/\.$/, "");
        if (d === _ && !s.scp && !r) {
            return;
        }
        let y = d === `www.${nr}` || d === _ ? nr : d;
        c = r || y === nr && a.port === "";
        let P = r && (a.port === "80" || a.port === "443") ? "" : a.port;
        i = `${y}${P === "" ? "" : `:${P}`}`;
        o = a.pathname;
    } catch  {
        return;
    }
    let u = o.replace(/%([0-9a-f]{2})/gi, (a, d)=>{
        let y = String.fromCharCode(parseInt(d, 16));
        if (/^[A-Za-z0-9._~-]$/.test(y)) {
            return y;
        }
        return a;
    });
    if (u.includes("%")) {
        return;
    }
    let l = (c ? u.toLowerCase() : u).replace(/\/{2,}/g, "/").replace(/\/+$/, "").replace(/\/?\.git$/, "");
    if (r) {
        let a = l.length;
        while(l.endsWith(".git", a)){
            a -= l[a - 5] === "/" ? 5 : 4;
        }
        l = l.slice(0, a);
    }
    if (n?.includes("\\")) {
        return;
    }
    let f = [];
    for (let a of (n ?? "").split("/")){
        if (a === "" || a === ".") {
            continue;
        }
        if (a !== "..") {
            f.push(a);
            continue;
        }
        if (f.length === 0) {
            return;
        }
        f.pop();
    }
    if (!r) {
        return `${i}${l}#${f.join("/")}`;
    }
    let b = [];
    for (let a of f){
        let d = Y(a);
        if (d === undefined) {
            return;
        }
        b.push(d);
    }
    return `${z}${i}${l}#${b.join("/")}`;
}
function Y(e) {
    let e_length = e.length;
    while(e_length > 0 && (e[e_length - 1] === "." || e[e_length - 1] === " ")){
        e_length--;
    }
    let t = e.slice(0, e_length);
    if (t === "" || t.length > 255) {
        return;
    }
    let r = ul(t.normalize("NFC"));
    if (/~\d/.test(r) || r.includes(":") || mtn.test(r)) {
        return;
    }
    return r.toUpperCase().toLowerCase().normalize("NFC");
}
function Bde(e) {
    let n = e.indexOf("#");
    if (n === -1) {
        return e;
    }
    return qYe(`https://${e.slice(0, n)}`, e.slice(n + 1)) ?? e;
}
function YS(e, url, t) {
    let r = t?.blocklistDirection !== true;
    if (typeof e === "string") {
        let s = typeof url === "string" ? {
            url,
            ref: undefined
        } : url;
        if (!s?.url || r && s.ref !== undefined) {
            return;
        }
        return qYe(s.url, e, t);
    }
    if (typeof e !== "object" || e === null) {
        return;
    }
    let i = e;
    let o = typeof i.sha === "string" && /^[a-f0-9]{40}$/.test(i.sha);
    if (r && i.ref !== undefined && !o) {
        return;
    }
    let c = typeof i.path === "string" ? i.path : undefined;
    switch(i.source){
        case "github":
            if (typeof i.repo === "string") {
                return qYe(i.repo, c, t);
            }
            return undefined;
        case "url":
        case "git-subdir":
            if (typeof i.url === "string") {
                return qYe(i.url, c, t);
            }
            return undefined;
        default:
            return;
    }
}
function t8(e) {
    switch(e?.source){
        case "github":
            return {
                url: e.repo,
                ref: e.ref
            };
        case "git":
            return {
                url: e.url,
                ref: e.ref
            };
        default:
            return;
    }
}
function n8(e, n) {
    {
        if (!e.endsWith(`@${fn}`)) {
            return;
        }
        if (typeof n !== "object" || n === null) {
            return;
        }
        let t = n.sha;
        if (typeof t === "string" && t !== "") {
            return t;
        }
        return undefined;
    }
}
function tIt(e, n) {
    let t = `-${n.substring(0, 12)}`;
    if (e.endsWith(t)) {
        return e;
    }
    return `${e}${t}`;
}
class jde extends Error {
    constructor(e){
        super(e);
        this.name = "PluginDirectoryUnavailableError";
    }
}
const A = new Map;
const I = ()=>{
    let e = A.get("external") ?? new Map([
        [
            "responsive-mode",
            "cc-plugin-responsive-mode"
        ],
        [
            "tips",
            "cc-plugin-tips"
        ],
        [
            "mermaid",
            "cc-plugin-mermaid"
        ],
        [
            "claude-test",
            "cc-plugin-claude-test"
        ],
        [
            "agents-md",
            "cc-plugin-agents-md"
        ],
        [
            "diff",
            "cc-plugin-diff"
        ],
        [
            "telemetry",
            "cc-plugin-telemetry"
        ],
        [
            "plugin-authoring",
            "cc-plugin-plugin-authoring"
        ],
        [
            "sec-default",
            "cc-plugin-sec-default"
        ],
        ...[]
    ]);
    A.set("external", e);
    return e;
};
const m = ()=>I();
const oUn = (e)=>m().get(e) ?? e;
const g = (e)=>[
        ...m()
    ].flatMap(([n, t])=>{
        if (t === e) {
            return [
                n
            ];
        }
        return [];
    });
const w = (e)=>g(e)[0] ?? e;
const Ows = (e)=>g(e).at(-1);
function T(e) {
    return G(e) || e === "synced";
}
function G(e) {
    return e === "inline";
}
const yd = "inline";
const d7t = `${f7t}@${yd}`;
const gu = "skills-dir";
const ha = "synced";
const Pi = "builtin";
function Up(e) {
    return e === yd || e === gu || e === ha;
}
function QM(e) {
    let n = e.lastIndexOf("@");
    if (n <= 0) {
        return e;
    }
    return XS(`${e.slice(0, n)}@${aUn(e.slice(n + 1))}`);
}
function XS(e) {
    let n = R(e);
    if (n === undefined) {
        return e;
    }
    let t = m();
    let r = h(n)[0];
    let i = t.get(n) ?? t.get(_r(n)) ?? (r === undefined ? undefined : t.get(r));
    if (i === undefined) {
        return e;
    }
    return `${i}@${Pi}`;
}
function sUn(e) {
    let n = R(e);
    if (n === undefined) {
        return undefined;
    }
    return XS(`${_r(n)}@${Pi}`);
}
function R(e) {
    let n = e.lastIndexOf("@");
    if (n > 0 && aUn(e.slice(n + 1)) === Pi) {
        return e.slice(0, n);
    }
}
function ZM(e, n) {
    if (n.endsWith(`@${Pi}`)) {
        return h(e)[0] ?? w(e);
    }
    return e;
}
function Wde({ name, source }) {
    if (source.endsWith(`@${Pi}`)) {
        return [
            name,
            ...h(name)
        ];
    }
    return [
        name
    ];
}
function iUn({ name, marketplace }) {
    if (aUn(marketplace) !== Pi) {
        return [
            name
        ];
    }
    let t = XS(`${name}@${Pi}`).slice(0, -`@${Pi}`.length);
    return D([
        name,
        t,
        ...h(t)
    ]);
}
function uR(e) {
    let n = R(e);
    if (n === undefined) {
        return [];
    }
    return h(n).map((t)=>`${t}@${Pi}`).toReversed();
}
function h(e) {
    let n = g(e);
    if (n.length > 0) {
        return n;
    }
    return g(_r(e));
}
function aUn(e) {
    let n = e.toLowerCase();
    if (y0(n)) {
        return n;
    }
    return e;
}
function yY(e) {
    return hS(e) !== undefined;
}
function hS(e) {
    let n = Ki(e);
    if (Up(n)) {
        return n;
    }
    if (e.includes("@")) {
        return;
    }
    if (e.startsWith(`${yd}[`)) {
        return yd;
    }
    if (e.startsWith(`${ha}[`)) {
        return ha;
    }
}
function Vgo(e, n) {
    return _lt(e, H(n));
}
function H(e) {
    return e.map((n)=>{
        if (n === undefined) {
            return undefined;
        }
        return u7t(n);
    });
}
function u7t(record, { managed = false } = {}) {
    let byFold = new Map;
    for (let [r, i] of Object.entries(record)){
        if (i === undefined) {
            continue;
        }
        let o = _r(r);
        let c = L(r, i);
        let s = byFold.get(o);
        if (s === undefined || s.enabled) {
            byFold.set(o, {
                key: r,
                enabled: c && (s?.enabled ?? true)
            });
        }
    }
    return {
        record,
        byFold,
        managed
    };
}
function L(e, n) {
    if (n === undefined) {
        return false;
    }
    let t = Ki(QM(e));
    if (t === yd || t === gu) {
        return n !== false;
    }
    return n === true;
}
function nIt(e) {
    let n = Ki(QM(e));
    return n === yd || n === ha;
}
function _lt(e, n) {
    if (!nIt(e)) {
        let o = XS(e);
        let c = D([
            o,
            ...uR(o),
            e
        ]);
        for (let [s, u] of n.entries()){
            let l = c.find((f)=>u?.record[f] !== undefined);
            if (l !== undefined) {
                return {
                    index: s,
                    enabled: L(l, u?.record[l]),
                    key: l
                };
            }
        }
        return;
    }
    let t = _r(e);
    let r = QM(e);
    let i = Ki(r) === ha ? _r(`${r.slice(0, r.lastIndexOf("@"))}@${yd}`) : undefined;
    for (let [o, c] of n.entries()){
        if (c === undefined) {
            continue;
        }
        let s = c.byFold.get(t);
        if (s !== undefined) {
            return {
                index: o,
                enabled: s.enabled,
                key: s.key
            };
        }
        if (i !== undefined) {
            let u = c.byFold.get(i);
            if (u !== undefined && !u.enabled) {
                return {
                    index: o,
                    enabled: false,
                    key: u.key
                };
            }
        }
    }
}
function Mws(e, n) {
    return Vgo(e, n)?.enabled;
}
function XW(e, n) {
    return n === "required" && Ki(QM(e)) === ha;
}
function rIt(e, n, t, r) {
    let i = _lt(e, n);
    if (i !== undefined && !i.enabled && n[i.index]?.managed) {
        return false;
    }
    return XW(e, r) || (i?.enabled ?? t !== false);
}
function lUn(e) {
    return Up(e) || e === Pi;
}
function JW(e) {
    return e.scope === "project" && e.source.endsWith(`@${gu}`);
}
const oIt = {
    policySettings: "managed",
    userSettings: "user",
    projectSettings: "project",
    localSettings: "local",
    flagSettings: "flag"
};
function vn(e) {
    if (epe(e)) {
        return {
            name: e.slice(0, e.lastIndexOf("@")),
            marketplace
        };
    }
    if (e.startsWith("@") && $Se(e)) {
        return {
            name: e
        };
    }
    if (e.includes("@")) {
        let n = e.split("@");
        return {
            name: n[0] || "",
            marketplace: n[1]
        };
    }
    return {
        name: e
    };
}
function JB(e) {
    let n = e.lastIndexOf("@");
    if (n < 0) {
        return {
            name: e
        };
    }
    return {
        name: e.slice(0, n),
        marketplace: e.slice(n + 1)
    };
}
function a7(e) {
    let n = QM(e);
    let t = A$e(n);
    if (t !== null) {
        return {
            name: t.packageName,
            marketplace
        };
    }
    let r = JB(n);
    if (Up(r.marketplace)) {
        return r;
    }
    return vn(n);
}
function A$e(e) {
    let n = QM(e);
    let t = `@${marketplace}`;
    if (!n.endsWith(t) || n.length <= t.length) {
        return null;
    }
    let r = n.slice(0, -t.length);
    let i = r.startsWith("@") ? r.indexOf("@", 1) : r.indexOf("@");
    let packageName = i < 0 ? r : r.slice(0, i);
    let versionSpec = i < 0 ? undefined : r.slice(i + 1);
    if (!$Se(packageName) || versionSpec === "") {
        return null;
    }
    return {
        packageName,
        ...versionSpec !== undefined && {
            versionSpec
        },
        pluginId: `${packageName}${t}`
    };
}
function p7t(e, n) {
    if (n) {
        return `${e}@${n}`;
    }
    return e;
}
function Ki(e) {
    let n = e.lastIndexOf("@");
    if (n < 0) {
        return;
    }
    let t = e.slice(n + 1);
    if (t === "") {
        return undefined;
    }
    return t;
}
function zc(e) {
    let { name, marketplace } = JB(e);
    if ((blt(marketplace) || marketplace === Pi || marketplace === fn) && !EO().safeParse(e).success) {
        return {
            name
        };
    }
    return {
        name,
        marketplace
    };
}
function lm(e, n) {
    return e === n || e.toLowerCase() === n.toLowerCase();
}
function _r(e) {
    return e.normalize("NFC").toLowerCase();
}
function Cw(e, n) {
    return e.find((t)=>t === n) ?? e.find((t)=>lm(t, n));
}
function qgo(e, n) {
    return e.filter((t)=>lm(vn(t).name, n));
}
function wl(e) {
    return e !== undefined && lUe.has(e.toLowerCase());
}
function blt(e) {
    return wl(e) || e !== undefined && mnn.has(e.toLowerCase());
}
const B = new Set([
    f7t,
    "core",
    "cowork-plugin-management",
    "data",
    "design",
    "engineering",
    "enterprise-search",
    "figma",
    "finance",
    "human-resources",
    "internal-apps",
    "legal",
    "marketing",
    "operations",
    "product-management",
    "productivity",
    "sales",
    "small-business",
    "ai-governance-legal",
    "cocounsel-legal",
    "commercial-legal",
    "corporate-legal",
    "employment-legal",
    "ip-legal",
    "law-student",
    "legal-builder-hub",
    "legal-clinic",
    "litigation-legal",
    "privacy-legal",
    "product-legal",
    "regulatory-legal",
    "healthcare",
    "fhir-developer",
    "npi-registry",
    "icd10-codes",
    "pubmed",
    "prior-auth-review",
    "cms-coverage",
    "clinical-trial-protocol",
    "documents",
    "asana",
    "bigquery",
    "claude-tag-data-viz",
    "claude-tag-oncall",
    "claude-tag-troubleshoot",
    "confluence",
    "datadog",
    "google-drive",
    "grafana",
    "hubspot",
    "jira",
    "linear",
    "notion",
    "pagerduty",
    "redshift",
    "salesforce",
    "sentry",
    "snowflake"
]);
function KYe(e, n) {
    return T(n) && B.has(e);
}
const Z = {
    user: "userSettings",
    project: "projectSettings",
    local: "localSettings"
};
function NT(e) {
    if (e === "managed") {
        throw Error("Cannot install plugins to managed scope");
    }
    return Z[e];
}
function rRe(e) {
    return oIt[e];
}
export { XB, Fa, Pg, fn, eUn, JM, NE, uwr, tUn, yr, xws, Ude, Pws, Ggo, pwr, nUn, ylt, fwr, Ooe, c7t, Iws, e8, rf, rUn, qYe, Bde, YS, t8, n8, tIt, jde, oUn, Ows, yd, d7t, gu, ha, Pi, Up, QM, XS, sUn, ZM, Wde, iUn, uR, aUn, yY, hS, Vgo, u7t, nIt, _lt, Mws, XW, rIt, lUn, JW, oIt, vn, JB, a7, A$e, p7t, Ki, zc, lm, _r, Cw, qgo, wl, blt, KYe, NT, rRe };
