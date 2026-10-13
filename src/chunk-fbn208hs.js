import { l, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Et, ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { XR } from "/$bunfs/root/chunk-j27d47mr.js";
import { ho } from "/$bunfs/root/chunk-wew3321y.js";
import { fn, yr, xws, rf, YS, t8, Up, yY, hS, vn, JB, Ki, lm, wl } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { gnn, $Y, Z3e, bnn, _0, Nn, czn, ope } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { Sse, P5e, ur, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Q_, Cs, it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { HW, uXt } from "/$bunfs/root/chunk-4521ay78.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { mC } from "/$bunfs/root/chunk-2321ytcf.js";
import { nV, pst } from "/$bunfs/root/chunk-pedbhwf4.js";
import { Wqe } from "/$bunfs/root/chunk-a5rabwn2.js";
import { Iae, XU, wI, u$, m$, z7o, WKt, NS, jh, hk, Ac, Cx } from "/$bunfs/root/chunk-kasbfbhj.js";
import { fS } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { pj } from "/$bunfs/root/chunk-twmcxkvh.js";
import { pBt, p8n, f8n, fBt, Fg, h8n } from "/$bunfs/root/chunk-8rf5jf6d.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { Thn } from "/$bunfs/root/chunk-arq3yxv1.js";
import { mze, mQn, PWt, IWt, OWt } from "/$bunfs/root/chunk-nye35vx4.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { Qd } from "/$bunfs/root/chunk-qn78nba9.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { join, dirname, relative, resolve, basename } from "path";
import { readFile, stat, readdir } from "fs/promises";
const We = /^[\x21-\x7e]+$/;
const ae = /^[A-Za-z0-9._-]{1,64}$/;
function CC(r) {
    if (yr === "" || Y(r, We)) {
        return r;
    }
    return Z(r);
}
function Hft(r) {
    if (Y(r, ae)) {
        return r;
    }
    return Bt(yr === "" ? Et(r, 64) : Z(r));
}
function Fln(r) {
    if (Y(r, ae)) {
        return r;
    }
    return Z(r);
}
function Y(r, n) {
    return n.test(r) && !$Y(r) && !xws(yr, le(r));
}
function Z(r) {
    return ec(Et(le(r), 64)) || "“”";
}
function le(r) {
    return Nn(r).replace(czn, "").trimEnd();
}
async function R1e(r, n, i, a) {
    let s = Object.hasOwn(i, r) ? i[r]?.installLocation : undefined;
    if (s === undefined) {
        return n;
    }
    let p;
    try {
        p = NS();
    } catch  {
        return n;
    }
    return fS(n, (d)=>ze(d, r, s, i, p, a), {
        concurrency: 8
    });
}
async function ze(r, n, i, a, s, p) {
    let r_source = r.source;
    if (!Z3e(r_source)) {
        return r;
    }
    try {
        let f = await HW(m$(r.name, n), i, r_source, a, s, p, jh(i) !== undefined ? "system" : "workspace");
        if (f.kind !== "ok") {
            return r;
        }
        let m = join(f.entryPath, ".claude-plugin");
        if (!await XU(m)) {
            return r;
        }
        let manifestPath = join(m, "plugin.json");
        let P = await u$(manifestPath);
        if (P === undefined) {
            return r;
        }
        let b = Iae(X(Io(P)), "plugin-json", {
            pluginName: r.name,
            manifestPath
        });
        if (!b.ok) {
            return r;
        }
        let x = b.manifest;
        let g = {
            ...r
        };
        if (O(g.displayName) && x.displayName !== undefined) {
            g.displayName = x.displayName;
        }
        if (O(g.description) && x.description !== undefined) {
            g.description = x.description;
        }
        if (g.author === undefined && x.author !== undefined) {
            g.author = x.author;
        }
        if (O(g.homepage) && x.homepage !== undefined) {
            g.homepage = x.homepage;
        }
        if (O(g.repository) && x.repository !== undefined) {
            g.repository = x.repository;
        }
        if (O(g.license) && x.license !== undefined) {
            g.license = x.license;
        }
        if (!g.keywords?.length && x.keywords !== undefined) {
            g.keywords = x.keywords;
        }
        return g;
    } catch (error) {
        t(`Display metadata for ${m$(r.name, n)} not read from its plugin.json: ${l(error)}`);
        return r;
    }
}
function O(r) {
    return ope(r) === undefined;
}
N();
function ot(Be) {
    return {
        label: Be,
        value: Be
    };
}
function SKn(r, n, i, a) {
    let s = {};
    for (let p of r){
        let d = i[p];
        let f = j(_s(n, p) ?? "");
        if (f === "") {
            if (d?.sensitive === true && _s(a ?? {}, p) !== undefined) {
                continue;
            }
            if (d?.type === "number") {
                continue;
            }
            if (d?.required !== true && _s(a ?? {}, p) === undefined) {
                continue;
            }
        }
        if (d?.type === "number") {
            let m = Number(f);
            s[p] = Number.isNaN(m) ? f : m;
        } else if (d?.type === "boolean") {
            let m = mze(f);
            if (m !== undefined) {
                s[p] = m;
            }
        } else {
            s[p] = f;
        }
    }
    return s;
}
function ZLt(r) {
    let m = w(22);
    let { title, subtitle, configSchema, initialValues, onSave, onCancel } = r;
    let f = Object.keys(configSchema);
    let h;
    if (m[0] !== configSchema || m[1] !== initialValues) {
        h = ()=>wKn(configSchema, initialValues);
        m[0] = configSchema;
        m[1] = initialValues;
        m[2] = h;
    } else {
        h = m[2];
    }
    let [P, b] = y(h);
    let x;
    if (m[3] !== configSchema || m[4] !== initialValues) {
        x = (g)=>{
            let k = configSchema[g];
            let S = Uln(k);
            if (S !== undefined) {
                return {
                    type: "select",
                    key: g,
                    label: k?.title || g,
                    options: S.map(ot),
                    hint: ()=>k?.description
                };
            }
            let A = k?.sensitive === true;
            let v = A && _s(initialValues ?? {}, g) !== undefined;
            return {
                type: "text",
                key: g,
                label: k?.title || g,
                required: k?.required === true && !v,
                mask: A ? "*" : undefined,
                placeholder: v ? "(unchanged)" : undefined,
                validate: k?.type === "number" ? (R)=>{
                    if (j(R) === "" || OWt.numberOfInput(j(R), k) !== undefined) {
                        return null;
                    }
                    return OWt.numberInputHint(k);
                } : undefined,
                hint: ()=>k?.description
            };
        };
        m[3] = configSchema;
        m[4] = initialValues;
        m[5] = x;
    } else {
        x = m[5];
    }
    let fields = f.map(x);
    if (f.length === 0) {
        return null;
    }
    let onChange;
    if (m[6] !== b) {
        onChange = (cr, fr)=>b((pr)=>({
                    ...pr,
                    [cr]: fr
                }));
        m[6] = b;
        m[7] = onChange;
    } else {
        onChange = m[7];
    }
    let onSubmit;
    if (m[8] !== configSchema || m[9] !== f || m[10] !== initialValues || m[11] !== onSave || m[12] !== P) {
        onSubmit = ()=>onSave(SKn(f, P, configSchema, initialValues));
        m[8] = configSchema;
        m[9] = f;
        m[10] = initialValues;
        m[11] = onSave;
        m[12] = P;
        m[13] = onSubmit;
    } else {
        onSubmit = m[13];
    }
    let Ke;
    if (m[14] !== fields || m[15] !== onCancel || m[16] !== subtitle || m[17] !== onChange || m[18] !== onSubmit || m[19] !== title || m[20] !== P) {
        Ke = e(pj, {
            title,
            subtitle,
            fields,
            values: P,
            onChange,
            onSubmit,
            onCancel,
            submitLabel: "Save configuration"
        });
        m[14] = fields;
        m[15] = onCancel;
        m[16] = subtitle;
        m[17] = onChange;
        m[18] = onSubmit;
        m[19] = title;
        m[20] = P;
        m[21] = Ke;
    } else {
        Ke = m[21];
    }
    return Ke;
}
function wKn(r, n) {
    let i = {};
    for (let a of Object.keys(r)){
        let s = r[a];
        let p = s?.sensitive === true ? undefined : _s(n ?? {}, a);
        let d = Uln(s);
        if (s?.type === "boolean") {
            i[a] = String(mQn(_s(n ?? {}, a) ?? s.default));
            continue;
        }
        i[a] = d === undefined ? p === undefined ? "" : String(p) : [
            p,
            s?.default
        ].find((f)=>typeof f === "string" && d.includes(f)) ?? d[0] ?? "";
    }
    return i;
}
function Uln(r) {
    if (r?.type === "boolean") {
        return nt;
    }
    if (r?.type === "string" && r.multiple !== true) {
        return r.options;
    }
}
var nt = [
    "true",
    "false"
];
function j(r) {
    return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
}
function eNt(r, n) {
    return r.map((i)=>{
        let a = n[i.marketplaceName]?.source;
        if (a && rf(a)) {
            return {
                ...i,
                fromPluginDirectory: true
            };
        }
        return i;
    });
}
const E = (r)=>r.fromPluginDirectory === true;
function st(entry, n) {
    let i = (p)=>entry[p] ?? n.find((d)=>d.entry[p] !== undefined)?.entry[p];
    let a = [
        "displayName",
        "description",
        "author",
        "homepage",
        "category",
        "tags",
        "keywords",
        "relevance"
    ];
    let s = {};
    for (let p of a){
        let d = i(p);
        if (d !== undefined) {
            Object.assign(s, {
                [p]: d
            });
        }
    }
    return s;
}
function o0o(r, n) {
    let i = (f)=>YS(f.entry.source, t8(n[f.marketplaceName]?.source));
    let a = (f)=>E(f) && Wqe(f.entry.name);
    let s = new Set;
    for (let f of r){
        if (a(f)) {
            let m = i(f);
            if (m !== undefined) {
                s.add(m);
            }
        }
    }
    if (s.size === 0) {
        return r;
    }
    let p = new Map;
    for (let f of r){
        if (E(f) || !wl(f.marketplaceName)) {
            continue;
        }
        if (WKt(f.marketplaceName, f.entry)) {
            continue;
        }
        let m = i(f);
        if (m !== undefined && s.has(m)) {
            p.set(m, [
                ...p.get(m) ?? [],
                f
            ]);
        }
    }
    let d = [];
    for (let f of r){
        let m = i(f);
        let h = m === undefined ? undefined : p.get(m);
        if (!E(f)) {
            if (!h?.includes(f)) {
                d.push(f);
            }
            continue;
        }
        if (h === undefined || !a(f)) {
            d.push(f);
            continue;
        }
        d.push({
            ...f,
            entry: {
                ...f.entry,
                ...st(f.entry, h)
            },
            isInstalled: f.isInstalled || h.some((P)=>P.isInstalled),
            alsoListedIn: D(h.map((P)=>P.marketplaceName)),
            installCountIds: h.map((P)=>P.pluginId)
        });
    }
    return d;
}
async function Bln(r, n) {
    let i = new Set;
    let plugins = Ac().plugins;
    for (let [s, p] of Object.entries(plugins)){
        if (vn(s).marketplace !== fn || !p.some(Cx)) {
            continue;
        }
        let d = await hk(s, n);
        let f = d && YS(d.entry.source, t8(r[fn]?.source));
        if (f) {
            i.add(f);
        }
    }
    return i;
}
function jln(r, n, i = new Set) {
    let a = (f)=>YS(f.entry.source, t8(n[f.marketplaceName]?.source));
    let s = new Set(i);
    let p = new Set;
    let d = new Set;
    for (let f of r){
        let m = f.isInstalled ? a(f) : undefined;
        if (m === undefined) {
            continue;
        }
        if (E(f)) {
            s.add(m);
            p.add(m);
        } else if (wl(f.marketplaceName)) {
            d.add(m);
        }
    }
    if (s.size === 0 && d.size === 0) {
        return r;
    }
    return r.filter((f)=>{
        if (f.isInstalled) {
            return true;
        }
        let m = a(f);
        if (m === undefined) {
            return true;
        }
        if (E(f)) {
            return !d.has(m) && !p.has(m);
        }
        return !wl(f.marketplaceName) || !s.has(m);
    });
}
function vKn(r, n) {
    if (!n) {
        return;
    }
    let i = n.get(r.pluginId);
    for (let a of r.installCountIds ?? []){
        let s = n.get(a);
        if (s !== undefined && (i === undefined || s > i)) {
            i = s;
        }
    }
    return i;
}
function UMr(r, n) {
    let i = new Map(r.map((a, s)=>[
            a,
            s
        ]));
    r.sort((a, s)=>{
        let p = vKn(a, n) ?? 0;
        let d = vKn(s, n) ?? 0;
        if (p !== d) {
            return d - p;
        }
        let f = E(a);
        let m = E(s);
        if (f !== m) {
            if (f) {
                return -1;
            }
            return 1;
        }
        if (f) {
            return (i.get(a) ?? 0) - (i.get(s) ?? 0);
        }
        return a.entry.name.localeCompare(s.entry.name);
    });
}
function Wln(r) {
    if (E(r)) {
        return yr;
    }
    return Fln(r.marketplaceName);
}
function zln(r) {
    let n = r.alsoListedIn ?? [];
    if (n.length === 0) {
        return;
    }
    let i = new Map(BMr(r).map((a)=>[
            a.marketplace,
            a.name
        ]));
    return `Also listed in ${n.map((a)=>{
        let s = i.get(a);
        if (s === undefined) {
            return a;
        }
        return `${a} as ${s}`;
    }).join(", ")}`;
}
function BMr(r) {
    {
        let n = [];
        for (let i of r.installCountIds ?? []){
            let { name, marketplace } = vn(i);
            if (marketplace !== undefined && name !== r.entry.name) {
                n.push({
                    marketplace,
                    name
                });
            }
        }
        return n;
    }
    return [];
}
function s0o(r) {
    let n = (i)=>{
        if (i === Qd) {
            return "official";
        }
        return i;
    };
    return [
        E(r) ? yr : r.marketplaceName,
        ...(r.alsoListedIn ?? []).map(n)
    ].join(" + ");
}
function ye(r) {
    if (/^[A-Za-z0-9._/@:~-]{1,120}$/.test(r)) {
        return r;
    }
    return ec(Et(r, 120));
}
function Gln(r) {
    let source = r.entry.source;
    if (typeof source !== "object" || source === null) {
        return;
    }
    let i;
    if (source.source === "github") {
        i = source.repo;
    } else if (source.source === "url" || source.source === "git-subdir") {
        i = source.url;
    }
    if (i === undefined) {
        return;
    }
    let a = i;
    try {
        let p = new URL(i);
        a = ho(p.hostname) ? p.pathname.replace(/^\/+/, "") : `${p.host}${p.pathname}`;
    } catch  {}
    a = ye(a.replace(/\.git$/, "").replace(/\/+$/, ""));
    if (a === "") {
        return;
    }
    let s = source.source === "git-subdir" ? ye(source.path) : "";
    if (s === "") {
        return a;
    }
    return `${a} (${s})`;
}
function i0o(r) {
    let n = new Map;
    let i;
    for (let s of r){
        if (E(s)) {
            i = s.marketplaceName;
        }
        for (let p of [
            s.marketplaceName,
            ...s.alsoListedIn ?? []
        ]){
            n.set(p, (n.get(p) ?? 0) + 1);
        }
    }
    let a = [
        ...n
    ].map(([s, count])=>({
            marketplace: s,
            label: s === i ? yr : Fln(s),
            count
        })).sort((s, p)=>{
        if (s.marketplace === i) {
            return -1;
        }
        if (p.marketplace === i) {
            return 1;
        }
        return p.count - s.count || s.label.localeCompare(p.label);
    });
    return [
        {
            marketplace: null,
            label: "All",
            count: r.length
        },
        ...a
    ];
}
const EKn = 4;
function a0o(r, n) {
    let i = r.slice(0, EKn);
    let a = r.find((s)=>s.marketplace === n);
    if (a && !i.includes(a)) {
        i[i.length - 1] = a;
    }
    return i;
}
function l0o(r, n, i) {
    return [
        r.marketplaceName,
        ...r.alsoListedIn ?? []
    ].some((a)=>{
        if (!n.has(a)) {
            return false;
        }
        if (a === Qd) {
            return true;
        }
        let s = i[a]?.source;
        return s !== undefined && uXt(a, s);
    });
}
function c0o(r, n) {
    return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? false);
}
function re(r, n, i) {
    if (Vln(r)) {
        return false;
    }
    if (r.source === n) {
        return true;
    }
    return "plugin" in r && r.plugin === i && hS(r.source) === hS(n);
}
function Vln(r) {
    return "orphan" in r && r.orphan === true;
}
function kKn(r, n) {
    return re(r, n.source, n.name);
}
function TKn(r, n) {
    return re(r, n.source, n.name);
}
function at(r, n, i) {
    if (yY(r.source)) {
        return false;
    }
    if (r.source === n) {
        return true;
    }
    let a = Ki(r.source);
    return "plugin" in r && r.plugin === i && (a === undefined || a === Ki(n));
}
function Bwe(r, n, i) {
    if (Up(Ki(n))) {
        return re(r, n, i);
    }
    return at(r, n, i) && !Vln(r);
}
function jMr(r, n) {
    let i = n.filter((m)=>Bwe(r, m.source, m.name));
    let a = i.length === 1 ? i[0] : i.find((m)=>lm(m.source, r.source));
    if (a) {
        return {
            name: a.name,
            marketplace: Ki(a.source)
        };
    }
    let [s] = i;
    if (s !== undefined) {
        return {
            name: s.name,
            marketplace: undefined
        };
    }
    let { name, marketplace } = JB(r.source);
    if (marketplace !== undefined) {
        return {
            name,
            marketplace
        };
    }
    let f = hS(r.source);
    return {
        name: f !== undefined && "plugin" in r && r.plugin ? r.plugin : name,
        marketplace: f
    };
}
const he = Se(ty(), 1);
async function tNt(r, n = {}) {
    let warnings = [];
    let a = await ft(r);
    if (!a.ok) {
        return {
            ok: false,
            error: a.error,
            warnings
        };
    }
    let { pluginRoot, manifestPath, manifest } = a;
    let f = typeof manifest.name === "string" && manifest.name.length > 0 ? await pt(pluginRoot, manifest.name) : undefined;
    let m = await fBt(manifestPath, f !== undefined && gnn(f.marketplaceName) ? {
        kind: "anthropic"
    } : {
        kind: "alone"
    });
    let validation = [
        m
    ];
    if (m.success) {
        validation.push(...await h8n(pluginRoot));
    }
    for (let v of validation){
        for (let R of v.warnings){
            warnings.push(`${relative(se(), v.filePath)}: ${R.message}`);
        }
    }
    let P = validation.find((v)=>!v.success);
    if (P) {
        let v = P.errors.map((R)=>`  ${R.path}: ${R.message}`).join(`
`);
        return {
            ok: false,
            error: `Plugin validation failed for ${P.filePath}:
${v}`,
            warnings
        };
    }
    let manifest_name = manifest.name;
    if (typeof manifest_name !== "string" || manifest_name.length === 0) {
        return {
            ok: false,
            error: `plugin.json at ${manifestPath} has no "name" field`,
            warnings
        };
    }
    let x = typeof manifest.version === "string" && manifest.version.length > 0 ? manifest.version : undefined;
    let version;
    let versionFrom;
    if (x !== undefined) {
        version = x;
        versionFrom = "plugin.json";
    } else if (f?.entry.version) {
        version = f.entry.version;
        versionFrom = "marketplace entry";
    } else {
        return {
            ok: false,
            error: `${`No version to tag. Set "version" in ${relative(se(), manifestPath)}` + (f ? ` or in the marketplace entry at ${relative(se(), f.path)} plugins[${f.entryIndex}].` : ".")} Tags are only used for dependency version constraints, which require an explicit semver — the git-SHA fallback does not need a tag.`,
            warnings
        };
    }
    if (f?.entry.version && x !== undefined && f.entry.version !== x) {
        return {
            ok: false,
            error: `Version mismatch: plugin.json says "${x}" but ${relative(se(), f.path)} plugins[${f.entryIndex}].version says "${f.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${x}" (or remove it) before tagging.`,
            warnings
        };
    }
    if (he.valid(version) === null) {
        return {
            ok: false,
            error: `Version "${version}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
            warnings
        };
    }
    let tag = z7o(manifest_name, version);
    if (!XR(tag)) {
        return {
            ok: false,
            error: `Computed tag name "${tag}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
            warnings
        };
    }
    let gitRoot = ur(pluginRoot);
    if (gitRoot === null) {
        return {
            ok: false,
            error: `${pluginRoot} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
            warnings
        };
    }
    if (!n.force) {
        let v = await dt(gitRoot, f ? [
            pluginRoot,
            f.path
        ] : [
            pluginRoot
        ]);
        if (v.length > 0) {
            let R = v.slice(0, 5).join(`
  `);
            let T = v.length > 5 ? `
  \u2026and ${v.length - 5} more` : "";
            return {
                ok: false,
                error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${R}${T}`,
                warnings
            };
        }
    }
    if (!n.force) {
        if (await mt(gitRoot, tag)) {
            return {
                ok: false,
                error: `Tag "${tag}" already exists locally. Bump the version in ${versionFrom}, or re-run with --force to move the tag.`,
                warnings
            };
        }
    }
    return {
        ok: true,
        warnings,
        plan: {
            pluginName: manifest_name,
            version,
            versionFrom,
            tag,
            pluginRoot,
            gitRoot,
            marketplace: f ? {
                path: f.path,
                entryIndex: f.entryIndex,
                entryVersion: f.entry.version
            } : undefined,
            validation
        }
    };
}
async function nNt(r, n) {
    let i = Cs();
    let a = await pst(r.gitRoot, gt, {
        envPins: {},
        base: i,
        repository: nV(r.gitRoot)
    });
    if (a === null) {
        t(`[plugin tag] could not read the user's git signing configuration; ${r.tag} is created unsigned`, {
            level: "warn"
        });
    }
    let s = [
        "-C",
        r.gitRoot,
        ...[
            ...yt,
            ...a ?? []
        ].flatMap(([m, h])=>[
                "-c",
                `${m}=${h}`
            ]),
        "tag"
    ];
    if (n.force) {
        s.push("-f");
    }
    s.push("-a", "-m", Dft(r, n.message), "--", r.tag, "HEAD");
    let p = await it(Ot(), s, {
        env: i,
        useCwd: true
    });
    if (p.code !== 0) {
        return {
            ok: false,
            error: `git tag failed (exit ${p.code}): ${p.stderr.trim() || p.stdout.trim()}`
        };
    }
    if (!n.push) {
        return {
            ok: true,
            pushed: false
        };
    }
    if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(n.remote)) {
        return {
            ok: false,
            error: `Tag created locally but not pushed: "${n.remote}" is not a valid remote name.`
        };
    }
    let d = [
        "-C",
        r.gitRoot,
        "push"
    ];
    if (n.force) {
        d.push("--force");
    }
    d.push(n.remote, `refs/tags/${r.tag}`);
    let f = await it("git", d, {
        allowRepoGitHooks: true,
        allowGitTerminalPrompt: n.allowGitTerminalPrompt,
        useCwd: true
    });
    if (f.code !== 0) {
        return {
            ok: false,
            error: `Tag created locally but push failed (exit ${f.code}): ${f.stderr.trim() || f.stdout.trim()}`
        };
    }
    return {
        ok: true,
        pushed: true
    };
}
function Dft(r, n) {
    if (n === undefined) {
        return `${r.pluginName} ${r.version}`;
    }
    return n.replaceAll("%s", r.version);
}
async function ft(r) {
    let n = resolve(r);
    let i;
    try {
        i = await stat(n);
    } catch (error) {
        return {
            ok: false,
            error: z(error) ? `Path not found: ${n}` : `Cannot stat ${n}: ${l(error)}`
        };
    }
    let a = i.isFile() ? [
        [
            dirname(dirname(n)),
            n
        ]
    ] : [
        [
            n,
            join(n, ".claude-plugin", "plugin.json")
        ],
        [
            dirname(n),
            join(n, "plugin.json")
        ]
    ];
    for (let [pluginRoot, p] of a){
        let d;
        try {
            d = await readFile(p, {
                encoding: "utf-8"
            });
        } catch (error) {
            if (z(error)) {
                continue;
            }
            return {
                ok: false,
                error: `Cannot read ${p}: ${l(error)}`
            };
        }
        let f;
        try {
            f = X(Io(d));
        } catch (error) {
            return {
                ok: false,
                error: `Invalid JSON in ${p}: ${l(error)}`
            };
        }
        return {
            ok: true,
            pluginRoot,
            manifestPath: p,
            manifest: typeof f === "object" && f !== null ? f : {}
        };
    }
    return {
        ok: false,
        error: `No plugin manifest found. Expected ${join(n, ".claude-plugin", "plugin.json")}.`
    };
}
async function pt(pluginRoot, name) {
    let i = ur(pluginRoot) ?? undefined;
    let a = pluginRoot;
    while(true){
        let path = join(a, ".claude-plugin", "marketplace.json");
        let p = await f8n(path);
        if (p) {
            for (let [entryIndex, m] of p.plugins.entries()){
                if (p8n(m, a, {
                    root: pluginRoot,
                    name
                })) {
                    return {
                        path,
                        marketplaceName: p.name,
                        entryIndex,
                        entry: m
                    };
                }
            }
        }
        if (a === i) {
            return;
        }
        let d = dirname(a);
        if (d === a) {
            return;
        }
        a = d;
    }
}
async function dt(gitRoot, n) {
    let i = n.map((s)=>relative(gitRoot, s) || ".");
    let a = await it(Ot(), [
        "-C",
        gitRoot,
        "status",
        "--porcelain",
        Q_,
        "--",
        ...i
    ], {
        env: Cs(),
        useCwd: true
    });
    if (a.code !== 0) {
        return [];
    }
    return a.stdout.split(`
`).map((s)=>s.slice(3).trim()).filter((s)=>s.length > 0);
}
async function mt(gitRoot, tag) {
    let i = await it(Ot(), [
        "-C",
        gitRoot,
        "tag",
        "-l",
        "--",
        tag
    ], {
        env: Cs(),
        useCwd: true
    });
    return i.code === 0 && i.stdout.trim() === tag;
}
var gt = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$";
var yt = [
    [
        "tag.gpgSign",
        "false"
    ],
    [
        "tag.forceSignAnnotated",
        "false"
    ],
    [
        "gpg.format",
        "openpgp"
    ],
    [
        "gpg.program",
        "gpg"
    ],
    [
        "gpg.x509.program",
        "gpgsm"
    ],
    [
        "gpg.ssh.program",
        "ssh-keygen"
    ],
    [
        "gpg.ssh.defaultKeyCommand",
        ""
    ]
];
function rNt(r) {
    if (r.length === 0) {
        return [];
    }
    return [
        `${te.info} Advice (does not change the verdict):`,
        "",
        ...r.flatMap((i)=>[
                `  ${te.pointer} ${i.file}: ${i.message}`,
                `      ${i.installLine}`
            ]),
        ""
    ];
}
const C = "<owner>/<repo>";
const xe = [
    "Validate the folder that holds its marketplace.json",
    `to have ${C} filled in,`,
    "and the name its marketplace lists it under."
].join(" ");
function Pe({ name, listing }) {
    let i = listing !== undefined && listing.entry === undefined;
    return [
        `This README has no line that installs "${name}"`,
        "from a marketplace.",
        ...i ? [
            join(listing.root, ".claude-plugin", "marketplace.json"),
            "has no entry for it. Add one."
        ] : [],
        `${i ? "Then add" : "Add"} the install line,`,
        "which works in one step on Claude Code 2.1.275 or later."
    ].join(" ");
}
const ke = 128;
function F(r, root, i) {
    let a = r.get(root) ?? i(root);
    r.set(root, a);
    return a;
}
const ve = [
    `In it, replace ${C}`,
    "with the repository that holds the marketplace."
].join(" ");
const H = 1024;
const be = (r)=>{
    if (Sse(r)) {
        return "";
    }
    return P5e(r, "remote", "origin", "pushurl") || P5e(r, "remote", "origin", "url") || "";
};
function Ie({ host, owner, name }) {
    let a = ho(host);
    let s = host.includes(":");
    if (a) {
        return `${owner}/${name}`;
    }
    if (s) {
        return undefined;
    }
    return `https://${host}/${owner}/${name}.git`;
}
async function we(r) {
    let n = join(r, ".git");
    let a = await XU(n) ? await u$(join(n, "config")).catch(()=>{}) : undefined;
    let s = be(a ?? "");
    let d = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? mC(s) : null;
    if (d === null) {
        return undefined;
    }
    return Ie(d);
}
function G(r) {
    let n = r.split("").map((i)=>!"`'\"()<>[]*.,;:!?".includes(i));
    return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1);
}
const ne = (installs, name)=>installs.byName.has(name) || installs.bySource.has(G(name));
const Re = (r)=>r.some((n, i)=>{
        if (n.startsWith("--marketplace=")) {
            return /^--marketplace=[^<>]+$/.test(n);
        }
        return n === "--marketplace" && /^[^-<>][^<>]*$/.test(r[i + 1] ?? "");
    });
const Ae = (r)=>r.split(/\s+/).map(G).filter((n)=>n !== "");
const Ne = Object.freeze([
    "--marketplace",
    "--scope",
    "-s",
    "--config",
    "--accept-command",
    "--registry"
]);
const Me = (r)=>r.find((n, i)=>!n.startsWith("-") && !Ne.includes(r[i - 1] ?? "")) ?? "";
function Ce(r) {
    let n = r.find((s)=>s.lastIndexOf("@") > 0) ?? "";
    let i = n.indexOf("@");
    if (i > 0 && n.length > i + 1 && !/[<>]/.test(n)) {
        return n.slice(0, i);
    }
    return "";
}
function Oe(r) {
    let n = r.split(`
`).flatMap((i)=>i.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1)).map(Ae);
    return {
        bySource: new Set(n.filter(Re).map(Me)),
        byName: new Set(n.map(Ce))
    };
}
async function oe(r) {
    let n = (await readdir(r, {
        withFileTypes: true
    }).catch(()=>[])).filter((p)=>p.isFile()).map((p)=>p.name).filter((p)=>/^readme(\.[a-z0-9.-]+)?$/i.test(p));
    let i = n.find((p)=>p.toLowerCase() === "readme.md") ?? n.toSorted()[0];
    let a = i === undefined ? undefined : await u$(join(r, i)).catch(()=>{});
    if (i !== undefined && a !== undefined) {
        return {
            file: join(r, i),
            installs: Oe(a)
        };
    }
}
async function Le({ root, name, listing }, a) {
    let s = await F(a.readmes, root, oe);
    let p = listing?.entry !== undefined && !pBt(listing.root, root);
    let d = p && listing.marketplace.plugins.length === 1;
    let f = s !== undefined && !ne(s.installs, name);
    let h = p && (d || f) ? await F(a.readmes, listing.root, oe) : undefined;
    if ([
        s,
        h
    ].some((b)=>b !== undefined && ne(b.installs, name))) {
        return undefined;
    }
    return s ?? (d ? h : undefined);
}
async function $e(item, n) {
    let { name, listing } = item;
    let p = name.length <= ke && _0(name) ? await Le(item, n) : undefined;
    if (p === undefined) {
        return [];
    }
    let d = listing === undefined;
    let f = d ? undefined : await F(n.sources, listing.root, we);
    let h = d ? [
        xe
    ] : f !== undefined ? [] : [
        ve
    ];
    return [
        {
            file: Fg(p.file, H),
            message: Fg([
                Pe(item),
                ...h
            ].join(" "), H),
            installLine: Fg(Thn({
                plugin: name,
                marketplaceSource: f ?? C
            }), H)
        }
    ];
}
const De = (r, n)=>r.reduce(async (acc, item)=>[
            ...await acc,
            ...await $e(item, n)
        ], Promise.resolve([]));
async function K(r, n) {
    let i = join(r, ".claude-plugin");
    if (await XU(i)) {
        return await u$(join(i, n)) ?? "";
    }
    return "";
}
async function B(r) {
    try {
        let n = u({
            name: o()
        }).safeParse(X(Io(await K(r, "plugin.json"))));
        if (n.success) {
            return n.data.name;
        }
        return undefined;
    } catch  {
        return;
    }
}
const Te = 64;
async function _e(r) {
    try {
        let n = bnn().safeParse(X(Io(await K(r, "marketplace.json"))));
        if (n.success) {
            return n.data;
        }
        return undefined;
    } catch  {
        return;
    }
}
async function Ve(r) {
    let n = await _e(r);
    let i = await Promise.all((n?.plugins ?? []).filter((d)=>typeof d.source === "string").slice(0, Te).map(async (d)=>{
        let { source } = d;
        if (n !== undefined && typeof source === "string" && !source.split(/[\\/]/).includes("..") && await wI(r, resolve(r, source)) === "ok") {
            return [
                {
                    root: resolve(r, source),
                    name: d.name,
                    listing: {
                        root: r,
                        marketplace: n,
                        entry: d
                    }
                }
            ];
        }
        return [];
    }));
    let a = await B(r) ?? "";
    let s = n?.plugins.find((d)=>p8n(d, r, {
            root: r,
            name: a
        }));
    if (n !== undefined && !i.flat().some((d)=>d.root === resolve(r))) {
        return [
            ...i.flat(),
            {
                root: r,
                name: s?.name ?? a,
                listing: {
                    root: r,
                    marketplace: n,
                    entry: s
                }
            }
        ];
    }
    return i.flat();
}
async function He(r, n, i) {
    let a = dirname(n?.filePath ?? "");
    let s = dirname(a);
    let p = basename(a) === ".claude-plugin" && [
        n,
        ...i
    ].every((h)=>h?.errors.length === 0);
    let d = p && n?.fileType === "plugin";
    let m = p && n?.fileType === "marketplace" && pBt(resolve(r), s) ? await Ve(s) : [];
    if (d) {
        return [
            {
                root: s,
                name: await B(s) ?? "",
                listing: undefined
            }
        ];
    }
    return m;
}
function Ge(r) {
    if (jt(r)) {
        t(`No install advice: ${l(r)}`);
    } else {
        c(r);
    }
    return [];
}
const oNt = (r, n, i)=>He(r, n, i).then((a)=>De(a, {
            readmes: new Map,
            sources: new Map
        })).catch(Ge);
export { CC, Hft, Fln, R1e, SKn, ZLt, wKn, Uln, eNt, o0o, Bln, jln, vKn, UMr, Wln, zln, BMr, s0o, Gln, i0o, EKn, a0o, l0o, c0o, Vln, kKn, TKn, Bwe, jMr, tNt, nNt, Dft, rNt, oNt };
