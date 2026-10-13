import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { QY } from "/$bunfs/root/chunk-x47nahfr.js";
import { xn } from "/$bunfs/root/chunk-k3tkc302.js";
import { cL, bf } from "/$bunfs/root/chunk-gs3dthpm.js";
import { xge } from "/$bunfs/root/chunk-adgp14at.js";
import { yte } from "/$bunfs/root/chunk-3xbaje9w.js";
const C = "Nothing was published or removed: this publish touches files whose published content is not what you last saw";
const V = "Changed since you last saw them:";
const E = "Already published, and not read as published or listed by you in this session:";
function r6o(e) {
    if (!e.startsWith("Nothing was published or removed: this publish touches files whose published content is not what you last saw")) {
        return;
    }
    let i = e.indexOf(`
Changed since you last saw them:`);
    let n = e.indexOf(`
Already published, and not read as published or listed by you in this session:`);
    let r = (u, c)=>{
        if (u === -1) {
            return "";
        }
        return e.slice(u, c === -1 || c < u ? undefined : c);
    };
    let s = r(i, n);
    let o = r(n, -1);
    let l = (u)=>[
            ...u.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm)
        ].map((c)=>c[1]);
    let d = (u)=>Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(u)?.[1] ?? 0);
    let h = l(s);
    let m = l(o);
    let P = h.length + d(s);
    let p = m.length + d(o);
    let length = [
        ...s.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)
    ].length;
    if (P > 0 && p > 0) {
        return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
    }
    if (P === 1) {
        if (length === 1) {
            return `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.`;
        }
        return `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
    }
    if (P > 1) {
        return `Not published: ${P} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
    }
    if (p === 1) {
        return `Not published: ${m[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
    }
    return `Not published: ${p} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
const y = 20;
const Oqr = 32000;
function _bt() {
    return a.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? true;
}
function Mqr() {
    return _bt() && !QY();
}
function XG() {
    return ee().frozenPathPin ?? _bt();
}
function k() {
    return ee().frozenPathPinAck ?? Mqr();
}
function b(e) {
    let { pathPins } = ee();
    let n = pathPins.get(e);
    if (n === undefined) {
        n = new Map;
        pathPins.set(e, n);
    }
    return n;
}
function fge() {
    return ++ee().pathPinSeq;
}
function w(e, i, n, seq) {
    let s = e.get(i);
    if (s !== undefined && s.seq > seq) {
        return;
    }
    e.set(i, {
        ...n,
        seq
    });
}
function Hqr(e, i, n, r, s = fge()) {
    if (!XG()) {
        return;
    }
    w(b(e), i, {
        sha256: n,
        ver: r,
        via: "read"
    }, s);
}
function Dqr(e, i, n, r, s = fge()) {
    if (!XG()) {
        return;
    }
    w(b(e), i, {
        sha256: n,
        ver: r,
        via: "list"
    }, s);
}
function Lqr(e, i, n = fge()) {
    if (!XG()) {
        return;
    }
    let r = ee().pathPins.get(e);
    let s = r?.get(i);
    if (s !== undefined && s.seq < n) {
        r.delete(i);
    }
}
function o6o(e, i, n, r = fge()) {
    if (!XG()) {
        return;
    }
    let s = b(e);
    for (let o of n){
        let l = s.get(o.path);
        if (l === undefined || l.via === "list" && l.sha256 !== null) {
            w(s, o.path, {
                sha256: o.sha256,
                ver: i,
                via: "list"
            }, r);
        }
    }
    N(s, i, r, n, false);
}
function N(e, i, n, r, s) {
    let o = new Map(r.map((l)=>[
            l.path,
            l
        ]));
    for (let [l, d] of e){
        let h = o.get(l);
        if (d.seq > n || h === undefined && !s) {
            continue;
        }
        let m = h?.sha256 ?? null;
        if (h?.live === true || m === d.sha256) {
            if (d.behind !== undefined) {
                e.set(l, {
                    sha256: d.sha256,
                    ver: d.ver,
                    via: d.via,
                    seq: d.seq
                });
            }
        } else {
            e.set(l, {
                ...d,
                behind: {
                    sha256: m,
                    sizeBytes: h?.sizeBytes,
                    ver: i
                }
            });
        }
    }
}
function s6o(e, i, n) {
    if (!XG()) {
        return;
    }
    let r = b(e);
    let s = fge();
    for (let o of n.written){
        if (o.sha256 === undefined) {
            r.delete(o.path);
        } else {
            w(r, o.path, {
                sha256: o.sha256,
                ver: i,
                via: "publish"
            }, s);
        }
    }
    for (let o of n.removed){
        w(r, o, {
            sha256: null,
            ver: i,
            via: "publish"
        }, s);
    }
}
function i6o(e) {
    if (!XG()) {
        return false;
    }
    let i = ee().pathPins.get(e);
    if (i === undefined) {
        return false;
    }
    for (let n of i.values()){
        if (n.via !== "list") {
            return true;
        }
    }
    return false;
}
function a6o(e) {
    if (e === undefined) {
        return {};
    }
    let files_written = e.written.flatMap((n)=>{
        if (n.sha256 === undefined) {
            return [];
        }
        return [
            {
                path: n.path,
                sha256: n.sha256
            }
        ];
    });
    return {
        ...files_written.length > 0 && {
            files_written
        },
        ...e.removed.length > 0 && {
            files_removed: [
                ...e.removed
            ]
        }
    };
}
function Nqr(e, i, n, r) {
    if (!XG()) {
        return;
    }
    let s = b(e);
    for (let o of n){
        w(s, o, {
            sha256: null,
            ver: i,
            via: "list"
        }, r);
    }
}
function l6o(e, i, n, r) {
    if (!XG() || n.length === 0) {
        return;
    }
    N(b(e), i, r, n, false);
}
function S(slug, i, n) {
    let r = n.filter((o)=>o.liveSha256 === null).map((o)=>o.path);
    if (r.length === 0) {
        return;
    }
    let s = fge();
    return ()=>Nqr(slug, i, r, s);
}
function A(e) {
    let i = e.filter((n)=>n.kind === "changed");
    return [
        ...i.filter((n)=>n.liveSha256 === null),
        ...i.filter((n)=>n.liveSha256 !== null)
    ];
}
function R(e) {
    let i = [];
    let n = [
        ...e.writes.map((r)=>({
                ...r,
                operation: "write"
            })),
        ...e.removes.map((path_1)=>({
                path: path_1,
                operation: "remove",
                sha256: undefined
            }))
    ];
    for (let { path, operation, sha256 } of n){
        if (e.liveDocs?.has(path)) {
            continue;
        }
        let l = e.pins?.get(path);
        let liveSha256 = e.live.get(path) ?? null;
        if (l === undefined) {
            if (liveSha256 === null || e.acknowledged.has(path)) {
                continue;
            }
            if (operation === "write" && sha256 === liveSha256) {
                continue;
            }
            i.push({
                kind: "unread",
                path,
                operation
            });
            continue;
        }
        if (l.sha256 === liveSha256) {
            continue;
        }
        if (operation === "write" && sha256 !== undefined && sha256 === liveSha256) {
            continue;
        }
        if (operation === "remove" && liveSha256 === null) {
            continue;
        }
        i.push({
            kind: "changed",
            path,
            operation,
            readSha256: l.sha256,
            readVer: l.ver,
            readVia: l.via,
            liveSha256
        });
    }
    return i;
}
function T(e, i) {
    return _(e.core ? xge(i) : i);
}
function H(e) {
    if (e.core) {
        return 'action "read" with its `path`';
    }
    return 'action "read_file"';
}
function M(path, i) {
    let n = i.files.get(path);
    if (n === undefined) {
        return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
    }
    let r = n.sizeBytes === undefined ? "" : `, ${n.sizeBytes} ${I(n.sizeBytes, "byte")}`;
    return `  now: sha256 ${n.sha256}${r}; read it with ${T(i, {
        action: "read_file",
        url: i.url,
        path
    })}`;
}
function L(e, i, n) {
    let r = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`;
    let s = e.liveSha256 === null ? `it has since been removed (version ${i})` : e.readSha256 === null ? `someone has since published a file there (version ${i})` : `someone has since replaced it (version ${i})`;
    return `- ${_(e.path)}: ${r}; ${s}
${M(e.path, n)}`;
}
function D(e, i, n) {
    if (e.length <= i) {
        return e.join(`
`);
    }
    let r = `- ${i > 0 ? `and ${e.length - i} more` : `${e.length} ${I(e.length, "path")}, not named here`}: ${T(n, {
        action: "list_files",
        url: n.url
    })} lists every file with its size`;
    if (i > 0) {
        return `${e.slice(0, i).join(`
`)}
${r}`;
    }
    return r;
}
function x(e, i, n) {
    let r = A(e);
    let s = e.filter((d)=>d.kind === "unread");
    let o = [
        r.length > 0 ? `${C}, and sending your copy would replace a newer edit.` : `${C}, and sending your copy could discard content you have not read.`
    ];
    let l = Math.min(r.length, y);
    if (r.length > 0) {
        let d = r.some((h)=>h.liveSha256 === null);
        o.push(`${V}
${D(r.map((h)=>L(h, i, n)), l, n)}
Read each one${d ? " that still exists" : ""} again (${H(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
    }
    if (s.length > 0) {
        o.push(`${E}
${D(s.map((d)=>`- ${_(d.path)}
${M(d.path, n)}`), y - l, n)}
Read each one first (${H(n)}) and build on it.${n.ackOffered === false ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
    }
    return o.join(`

`);
}
async function c6o(e) {
    if (e.writes.length === 0 && e.removes.length === 0) {
        return {
            kind: "pass",
            liveVer: undefined
        };
    }
    let i = fge();
    let n = await yte(e.target, e.signal, e.credentials);
    if (n.kind === "error") {
        t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`);
        if (n.reason === "single_page") {
            return {
                kind: "pass",
                liveVer: undefined
            };
        }
        let d = ee().pathPins.get(e.target.slug);
        let h = new Set;
        let m = new Map;
        let P = new Map;
        let p = "";
        for (let u of [
            ...e.writes.map((c)=>c.path),
            ...e.removes
        ]){
            let c = d?.get(u)?.behind;
            if (c === undefined) {
                continue;
            }
            h.add(u);
            if (c.sha256 !== null) {
                m.set(u, c.sha256);
                P.set(u, {
                    sha256: c.sha256,
                    ...c.sizeBytes !== undefined && {
                        sizeBytes: c.sizeBytes
                    }
                });
            }
            if (p === "" || (cL(c.ver, p) ?? 1) > 0) {
                p = c.ver;
            }
        }
        let v = R({
            pins: d,
            live: m,
            writes: e.writes.filter((u)=>h.has(u.path)),
            removes: e.removes.filter((u)=>h.has(u)),
            acknowledged: new Set(e.acknowledged)
        });
        f("artifact_path_pin", v.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`);
        if (v.length === 0) {
            return {
                kind: "pass",
                liveVer: undefined
            };
        }
        return {
            kind: "refuse",
            reasonCode: "path_pin_changed",
            message: x(v, p, {
                url: e.url ?? xn(e.target),
                files: P,
                core: bf(),
                forced: e.force === true,
                ackOffered: k(),
                remembered: true
            }),
            onCommitted: S(e.target.slug, p, A(v).slice(0, y))
        };
    }
    let r = ee().pathPins.get(e.target.slug);
    if (r !== undefined) {
        N(r, n.ver, i, n.files, !n.narrowed);
    }
    let s = new Map(n.files.map((d)=>[
            d.path,
            d.sha256
        ]));
    let liveDocs = new Set(n.files.filter((d)=>d.live).map((d)=>d.path));
    let l = R({
        pins: r,
        live: s,
        liveDocs,
        writes: e.writes,
        removes: e.removes,
        acknowledged: new Set(e.acknowledged)
    });
    g("artifact_path_pin", {
        checked: e.writes.length + e.removes.length,
        refused: l.length
    });
    if (l.length === 0) {
        let preconditions = n.publishPreconditions === true ? z(s, liveDocs, e.writes, e.removes) : undefined;
        return {
            kind: "pass",
            liveVer: n.ver,
            ...n.title !== undefined && {
                liveTitle: n.title
            },
            ...n.favicon !== undefined && {
                liveFavicon: n.favicon
            },
            ...preconditions !== undefined && {
                preconditions
            }
        };
    }
    return {
        kind: "refuse",
        reasonCode: l.some((d)=>d.kind === "changed") ? "path_pin_changed" : "path_pin_unread",
        message: x(l, n.ver, {
            url: e.url ?? xn(e.target),
            files: new Map(n.files.map((d)=>[
                    d.path,
                    {
                        sha256: d.sha256,
                        sizeBytes: d.sizeBytes
                    }
                ])),
            core: bf(),
            forced: e.force === true,
            ackOffered: k()
        }),
        onCommitted: S(e.target.slug, n.ver, A(l).slice(0, y))
    };
}
function z(e, liveDocs, writes, removes) {
    let s = new Map;
    for (let { path } of writes){
        if (liveDocs.has(path)) {
            return;
        }
        s.set(path, e.get(path) ?? null);
    }
    for (let o of removes){
        let l = e.get(o);
        if (l === undefined || liveDocs.has(o)) {
            return;
        }
        s.set(o, l);
    }
    return s;
}
function d6o(e) {
    let i = ee().pathPins.get(e.target.slug);
    let n = e.paths.map((s)=>{
        let o = i?.get(s.path);
        let operation = e.removes.includes(s.path) ? "remove" : "write";
        if (o !== undefined && o.sha256 === s.expected) {
            return {
                kind: "changed",
                path: s.path,
                operation,
                readSha256: s.expected,
                readVer: o.ver,
                readVia: o.via,
                liveSha256: s.actual
            };
        }
        return {
            kind: "unread",
            path: s.path,
            operation
        };
    });
    let r = new Map;
    for (let s of e.paths){
        if (s.actual !== null) {
            r.set(s.path, {
                sha256: s.actual
            });
        }
    }
    return {
        message: x(n, e.liveVer, {
            url: e.url ?? xn(e.target),
            files: r,
            core: bf(),
            ackOffered: k()
        }),
        onCommitted: S(e.target.slug, e.liveVer, A(n).slice(0, y))
    };
}
export { r6o, Oqr, _bt, Mqr, XG, fge, Hqr, Dqr, Lqr, o6o, s6o, i6o, a6o, Nqr, l6o, c6o, d6o };
