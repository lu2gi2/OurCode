import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { pn } from "/$bunfs/root/chunk-4r6b8efh.js";
import { gn, Ig, Vt, xn, zk, dl } from "/$bunfs/root/chunk-k3tkc302.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { vt, wc, Om } from "/$bunfs/root/chunk-0vgmtssp.js";
import { Bc, xm, Wx } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { hJt } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { ky } from "/$bunfs/root/chunk-37qzy58m.js";
import { bf } from "/$bunfs/root/chunk-gs3dthpm.js";
import { EA, RK } from "/$bunfs/root/chunk-sqysdndt.js";
import { CGt } from "/$bunfs/root/chunk-vn24m8wp.js";
import { hZn, ck as file, hge, dZe, pae, RZn, nKr, uZe } from "/$bunfs/root/chunk-axp6y0zg.js";
import { lte, RX } from "/$bunfs/root/chunk-zan77tdd.js";
import { yte } from "/$bunfs/root/chunk-3xbaje9w.js";
import { dQe, zWo, fWe } from "/$bunfs/root/chunk-x733zqd4.js";
import { op as warmShareEntry } from "/$bunfs/root/chunk-veat50k0.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
function O(n, e) {
    return _(zk(n, e));
}
const timeoutMs = 3000;
function z8n(n, e) {
    let i = n.mcpInfo?.effectiveMaxPermission;
    if (i !== undefined && i !== "allow") {
        return "permission_ceiling";
    }
    if (n.requiresUserInteraction?.()) {
        return "requires_interaction";
    }
    if ([
        ...Bc(e),
        ...xm(e)
    ].some((r)=>Wx(e, n, r))) {
        return "rule";
    }
}
const j = /^The user just created a new, empty (?:[^\n<]{1,80}? )?artifact at (https?:\/\/\S+) and has it open beside this conversation/;
const R = /artifact at (https?:\/\/\S+) and has it open beside this conversation/g;
const U = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;
function G8n(n, e) {
    let i = [];
    for (let r of n){
        if (r.type === "assistant") {
            break;
        }
        if (r.type !== "user") {
            continue;
        }
        if (r.origin !== undefined && r.origin.kind !== "human" || r.verifiedSlackHumanTurn === true || r.projectsUserTurn === true || r.isMeta === true) {
            continue;
        }
        let { content } = r.message;
        let a = typeof content === "string" ? [
            content
        ] : content.flatMap((o)=>{
            if (o.type === "text") {
                return [
                    o.text
                ];
            }
            return [];
        });
        for (let o of a){
            i.push(...ymn(o, e));
        }
    }
    return i;
}
const F = "The user just created a new, empty ";
function B(n) {
    let e = new RegExp(R);
    let i = n.indexOf(F);
    while(i !== -1){
        let r = i + F.length;
        e.lastIndex = r;
        let s = e.exec(n);
        if (n.slice(r, s?.index).includes("<")) {
            return true;
        }
        i = s === null ? -1 : n.indexOf(F, s.index + s[0].length);
    }
    return new Set([
        ...n.matchAll(R)
    ].map((r)=>r[1])).size > 1;
}
function ymn(n, e) {
    if (!e(n) || B(n)) {
        return [];
    }
    return [
        ...n.matchAll(U)
    ].map((i)=>(i[1] ?? "").trim()).filter((i)=>i !== "");
}
function V8n(n) {
    if (new Set(n.flatMap((r)=>[
            ...r.matchAll(R)
        ].map((s)=>s[1]))).size > 1) {
        return null;
    }
    let blankArtifact;
    for (let r of n){
        let url = j.exec(r)?.[1];
        let a = url === undefined ? null : Vt(url);
        if (url === undefined || a === null) {
            continue;
        }
        if (blankArtifact !== undefined && blankArtifact.slug !== a.slug) {
            return null;
        }
        blankArtifact ??= {
            slug: a.slug,
            env: a.env,
            url
        };
    }
    if (blankArtifact === undefined) {
        return null;
    }
    return {
        blankArtifact
    };
}
const W = "The artifact named in this session's opening context carries an instructions file; it is below, read ahead for you. The artifact's own content was not read: read it as the opening context asks; that read's result will repeat these instructions.";
function q8n(n, e) {
    return !Om(e.slug) && lte(n, e, "files", "land");
}
function HBr(n, e) {
    return !Om(e) && RX(n, e);
}
const u = "artifact-type/reference/";
async function K({ blankArtifact }, e, signal, r = {
    warmShareEntry,
    readTypeInstructions: dZe,
    isArtifactReadEnabled: hJt,
    filesConsented: q8n,
    listArtifactTypes: hge,
    listFrameFiles: yte
}, isDeferredTool) {
    let o = performance.now();
    let p = zs(signal, {
        timeoutMs,
        refTimer: true
    });
    try {
        if (!r.isArtifactReadEnabled()) {
            return {
                kind: "skipped",
                reason: "artifact_off"
            };
        }
        if (!uZe()) {
            return {
                kind: "skipped",
                reason: "catalog_off"
            };
        }
        let y = de(e);
        let A = pn(e.options.tools ?? [], gn);
        let w = A === undefined ? "not_in_pool" : z8n(A, y);
        if (w !== undefined) {
            return {
                kind: "skipped",
                reason: "tool_unavailable",
                detail: w
            };
        }
        let k = blankArtifact.url;
        for (let d of [
            "deny",
            "ask"
        ]){
            if (ky(y, blankArtifact, k, d) !== null) {
                return {
                    kind: "skipped",
                    reason: "rule",
                    detail: d
                };
            }
        }
        await r.warmShareEntry(blankArtifact, {
            abortController: {
                signal: p.signal
            },
            credentials: e.credentials
        }, "opening_prefetch");
        let N = de(e);
        for (let d of [
            "deny",
            "ask"
        ]){
            if (ky(N, blankArtifact, k, d) !== null) {
                return {
                    kind: "skipped",
                    reason: "rule",
                    detail: d
                };
            }
        }
        let E = vt(blankArtifact.slug);
        if (!wc(E)) {
            if (p.signal.aborted && !signal.aborted) {
                return {
                    kind: "skipped",
                    reason: "read_failed",
                    detail: "the share probe took longer than the prefetch budget"
                };
            }
            return {
                kind: "skipped",
                reason: "not_owned"
            };
        }
        if (E?.typeLocked !== true) {
            return {
                kind: "skipped",
                reason: "not_typed"
            };
        }
        let c = await r.readTypeInstructions(blankArtifact, p.signal, e.credentials);
        if (c.kind !== "read") {
            return {
                kind: "skipped",
                reason: "instructions_unavailable",
                detail: c.kind === "unavailable" ? c.why : "none"
            };
        }
        let D = pae(c);
        try {
            await r.listArtifactTypes({
                firstParty: true,
                signal: p.signal,
                credentials: e.credentials,
                httpOnly: true
            });
        } catch  {}
        let m = await q(blankArtifact, p.signal, e, r);
        let C = xn(blankArtifact);
        let x = K8n(bf());
        if (m.why === "listing failed") {
            f("artifact_opening_prefetch", "listing_failed");
        }
        if (!m.listed) {
            t(`[artifactOpeningPrefetch] type files of ${blankArtifact.slug} not saved: not attempted, the type's reference pages were not listed (the files consent does not stand for this artifact, or its listing failed)`);
        }
        let instructions = !m.listed ? null : c.clipped ? await (r.readWholeInstructions ?? G)(blankArtifact, p.signal, e.credentials) : c.text;
        let I = instructions === null ? null : (await fWe({
            type: {
                artifact: blankArtifact,
                instructions,
                pages: m.pages.map((d)=>u + d),
                stillConsented: ()=>r.filesConsented(e, blankArtifact)
            },
            system: null
        }, e, p.signal, r.readFrameFile)).type;
        let T = m.listed && CGt(e.options.tools ?? []) ? nKr(c.text) : null;
        let v = T ?? "";
        let typeFiles = I === null ? null : {
            ...I,
            urlReadAsked: v !== "",
            skillByRead: !c.clipped
        };
        let content = typeFiles === null ? null : zWo(typeFiles, [
            v,
            hZn(c.text),
            RZn(c.text)
        ].map((d)=>d.trim()).filter((d)=>d !== "").map((d)=>`

${d}`).join(""));
        if (typeFiles !== null && content === null) {
            t(`[artifactOpeningPrefetch] type files of ${blankArtifact.slug} saved but not used: SKILL.md does not fit one Bash output, the text stays inline`);
        }
        if (typeFiles !== null && content !== null) {
            return {
                kind: "attached",
                content,
                manifest: V(C, x, T === null && isDeferredTool !== undefined && M(e, isDeferredTool)),
                typeFiles,
                durationMs: performance.now() - o
            };
        }
        return {
            kind: "attached",
            content: W + D,
            manifest: X(C, m, x, T === null && isDeferredTool !== undefined && M(e, isDeferredTool)),
            typeFiles: null,
            durationMs: performance.now() - o
        };
    } catch (error) {
        return {
            kind: "skipped",
            reason: "read_failed",
            detail: p.signal.aborted && !signal.aborted ? "the read took longer than the prefetch budget" : l(error)
        };
    } finally{
        p.cleanup();
    }
}
async function G(n, e, i) {
    let r = await EA({
        ...n,
        file
    }, e, i, "artifact_type_instructions_read");
    if (r.err !== null) {
        t(`[artifactOpeningPrefetch] type files of ${n.slug} not saved: the whole SKILL.md was not read (${RK(r)})`);
        return null;
    }
    return dl(r.html);
}
async function r1s(n, e, i, r, s) {
    let a = V8n([
        ...G8n(e, r.isSystemReminderOnlyText),
        ...i === null ? [] : ymn(i, r.isSystemReminderOnlyText)
    ]);
    if (a === null) {
        return null;
    }
    let o = await K(a, n, n.abortController.signal, s, r.isDeferredTool);
    t(o.kind === "attached" ? `[artifactOpeningPrefetch] attached: ${o.content.length} chars + index ${o.manifest.length} chars in ${Math.round(o.durationMs)}ms` : `[artifactOpeningPrefetch] skipped: ${o.reason}${o.detail === undefined ? "" : ` (${o.detail})`}`);
    if (o.kind === "attached") {
        g("artifact_opening_prefetch", {
            duration_ms: Math.round(o.durationMs)
        });
        return {
            content: `${o.content}

${o.manifest}`,
            slug: a.blankArtifact.slug,
            typeFiles: o.typeFiles
        };
    }
    if (o.reason === "read_failed" || o.detail === "listing failed") {
        f("artifact_opening_prefetch", o.reason === "read_failed" ? "read_failed" : "listing_failed");
    }
    return null;
}
async function q(blankArtifact, signal, i, r) {
    if (!r.filesConsented(i, blankArtifact)) {
        return {
            listed: false,
            pages: [],
            why: "no files consent"
        };
    }
    let s;
    try {
        s = await r.listFrameFiles(blankArtifact, signal, i.credentials);
    } catch  {
        s = null;
    }
    if (s?.kind !== "ok") {
        return {
            listed: false,
            pages: [],
            why: "listing failed"
        };
    }
    return {
        listed: true,
        pages: s.files.map((a)=>a.path).filter((a)=>a.startsWith(u) && a.endsWith(".md")).map((a)=>a.slice(u.length)).filter((a)=>!a.includes("/")).sort()
    };
}
function K8n(n) {
    return {
        readFile: n ? (e, i)=>`Artifact action "read", url "${e}", path ${O(i, S)}` : (e, i)=>`Artifact action "read_file", url "${e}", path ${O(i, S)}`,
        listFiles: n ? (e)=>`Artifact action "list", url "${e}", scope "files"` : (e)=>`Artifact action "list_files", url "${e}"`,
        readArtifact: (e)=>`Artifact action "read", url "${e}"`
    };
}
const dQe_1 = dQe;
function z(n, pages, i) {
    let r = pages.slice(0, dQe_1);
    let s = r.map((a)=>`- ${O(u + a, S)}: ${i.readFile(n, u + a)}`);
    if (pages.length > r.length) {
        s.push(`- and ${pages.length - r.length} more under ${u} (${i.listFiles(n)} names them)`);
    }
    return [
        `Reference pages of the type of the artifact at ${n}, on the artifact and not loaded (the names are the type's own files, listed as data):`,
        ...s,
        `Issue every file read you need, and the artifact read itself (${i.readArtifact(n)}), in ONE message (parallel tool calls); then Read any file a result says was saved; then write. Use exactly the call shapes given here; no other fields.`
    ].join(`
`);
}
function M(n, isDeferredTool) {
    let i = pn(n.options.tools ?? [], Ig);
    return i !== undefined && !isDeferredTool(i);
}
const L = "ArtifactData is loaded in this session: read the canvas (ArtifactData list / get on this url) in that same first message rather than searching for the tool first.";
function X(n, e, i, r) {
    let s = z(n, e.pages, i);
    return [
        `Loaded ahead of this turn for the artifact at ${n}: the instructions file found on it (SKILL.md) \u2014 inlined above; do not read it again.`,
        ...e.pages.length > 0 ? [
            s
        ] : [
            ...e.listed ? [] : [
                `Its type's reference pages are on the artifact under ${u} (${i.listFiles(n)} names them).`
            ],
            ...s.split(`
`).slice(1)
        ],
        ...r ? [
            L
        ] : []
    ].join(`
`);
}
function V(n, e, i) {
    return [
        `Make that Bash call and the artifact read itself, ${e.readArtifact(n)}, in ONE message (parallel tool calls); then write.`,
        ...i ? [
            L
        ] : []
    ].join(`
`);
}
var S = 128;
export { z8n, G8n, ymn, V8n, q8n, HBr, r1s, K8n };
