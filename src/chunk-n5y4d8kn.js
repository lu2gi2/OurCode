import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Wv } from "/$bunfs/root/chunk-3yz9zdww.js";
import { qW } from "/$bunfs/root/chunk-qsxrphgj.js";
import { Z$, ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { cL, BU, Eae, kte, wGe } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Wls } from "/$bunfs/root/chunk-40xcrb3y.js";
import { uit } from "/$bunfs/root/chunk-4r6b8efh.js";
import { createHash } from "crypto";
import { readFile, stat, unlink } from "fs/promises";
function eae(e, i, n) {
    return e.ver === i && (e.observers === undefined || Object.hasOwn(e.observers, n));
}
function _(e, i, ver) {
    return eae(e.getArtifactReadObservation(i), ver, e.agentId ?? "main") && !Eae(e.agentId, i, ver);
}
function aQn(e) {
    return e.fileReadingLimits?.maxTokens ?? qW().maxTokens;
}
function i_t(e, i) {
    let n = aQn(i);
    let overlong = [];
    let d = 0;
    let start = 0;
    while(start <= e.length){
        let o = e.indexOf(`
`, start);
        let end = o === -1 ? e.length : o;
        d++;
        if (uit(e.slice(start, end), "html") > n / 4) {
            overlong.push({
                line: d,
                start,
                end
            });
        }
        start = end + 1;
    }
    return {
        lines: d,
        unterminated: !e.endsWith(`
`),
        overlong
    };
}
const k = 3;
const K = 8;
const X = 32;
function wWt({ html, ver, shape, sent, recorded, lineCount = true }) {
    let o = (s)=>s.toLocaleString("en-US");
    let u = shape.unterminated ? shape.lines : shape.lines - 1;
    let h = `version ${ver}: ${o(Buffer.byteLength(html))} bytes${lineCount ? `, ${o(u)} ${I(u, "line")}` : ""}`;
    if (shape.overlong.length === 0) {
        return `${h}, ${lineCount ? "each" : "every line"} short enough to Read with offset/limit`;
    }
    let p = (sent !== undefined && shape.overlong.length <= X ? sent : undefined)?.replace(/\r\n/g, `
`);
    let C;
    try {
        C = p === undefined ? undefined : wGe(p);
    } catch (error) {
        if (!(error instanceof kte)) {
            throw error;
        }
    }
    let P = p === undefined ? undefined : new Set([
        ...p.split(`
`),
        ...C?.split(`
`) ?? []
    ]);
    let y = shape.overlong.map((s)=>{
        let F = html.slice(s.start, s.end).replace(/\r$/, "");
        let verdict = P === undefined ? undefined : P.has(F) ? "same" : "differs";
        return {
            line: s.line,
            chars: s.end - s.start,
            verdict
        };
    });
    let x = y.slice(0, k);
    let b = y.slice(k);
    let b_length = b.length;
    let a = b.filter((s)=>s.verdict === "differs");
    let H = b_length > 0 && b.every((s)=>s.verdict === "same");
    let v = a.slice(0, K).map((s)=>o(s.line));
    let m = a.length - v.length;
    let S = a.length === 0 ? H ? ", none differing from what you sent" : "" : `, of which ${I(a.length, "line")} ${v.join(", ")}${m > 0 ? ` and ${o(m)} more` : ""} ${a.length === 1 ? "differs" : "differ"} from what you sent`;
    let w = (s)=>`line ${o(s.line)} (${o(s.chars)} characters${s.verdict === "differs" ? ", which differs from the content you sent" : s.verdict === "same" ? ", identical to a line you sent" : ""})`;
    return `${h}; a single Read may not return ${x.map(w).join(", or ")}${b_length > 0 ? `, or ${o(b_length)} more such ${I(b_length, "line")}${S}` : ""}` + (recorded ? " — no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy" : "");
}
async function S7e({ filepath, persistId, html, slug, ver, confirmsResend, batch, heldSkipsRead }, h) {
    let l = h.agentId ?? "main";
    let { lines, overlong } = i_t(html, h);
    let P = overlong.length === 0;
    let y = _(h, slug, ver);
    let x = y && heldSkipsRead ? "held" : "unverifiable";
    let b = et(filepath);
    let mtimeMs = await Wv(b).catch(()=>{});
    if (mtimeMs === undefined) {
        if (x === "held") {
            return "held";
        }
        return "unexaminable";
    }
    let contentHash = createHash("sha256").update(html).digest("hex");
    let pendingHandoverReads = ee().pendingHandoverReads;
    let v = pendingHandoverReads.get(b);
    let m = v !== undefined && v.slug === slug && v.ver === ver && v.contentHash === contentHash ? v : undefined;
    if (m !== undefined) {
        m.mtimeMs = mtimeMs;
    }
    if (!P) {
        return x;
    }
    let S = y && heldSkipsRead;
    if (m !== undefined) {
        m.handedTo.add(l);
        if (S) {
            m.completedBy.add(l);
            return "held";
        }
        if (confirmsResend) {
            m.confirmsResendFor.set(l, batch ?? "");
        } else {
            m.confirmsResendFor.delete(l);
        }
        m.completedBy.delete(l);
        if (m.unrecordableBy.has(l)) {
            return "unverifiable";
        }
        return "pending";
    }
    let unrecordableBy = new Set;
    for (let [F, A] of pendingHandoverReads){
        if (A.slug === slug) {
            for (let q of A.unrecordableBy){
                unrecordableBy.add(q);
            }
            pendingHandoverReads.delete(F);
        }
    }
    let unterminated = !html.endsWith(`
`);
    pendingHandoverReads.set(b, {
        slug,
        ver,
        mtimeMs,
        totalLines: lines,
        unterminated,
        contentHash,
        bytes: Buffer.byteLength(html),
        requiredLines: unterminated ? lines : lines - 1,
        linesReturned: new Map,
        linesPrepared: new Map,
        completedBy: new Set(S ? [
            l
        ] : []),
        handedTo: new Set([
            l
        ]),
        unrecordableBy,
        persistId,
        confirmsResendFor: new Map(confirmsResend ? [
            [
                l,
                batch ?? ""
            ]
        ] : [])
    });
    if (S) {
        return "held";
    }
    if (unrecordableBy.has(l)) {
        return "unverifiable";
    }
    return "pending";
}
async function N_n(e, i, persistId) {
    for (let [t, d] of ee().pendingHandoverReads){
        if (d.slug === e && d.ver === i) {
            let r = await Wv(t).catch(()=>{});
            if (r !== undefined && r !== d.mtimeMs) {
                return {
                    persistId: `${persistId}-${Date.now().toString(36)}`,
                    editedCopy: t
                };
            }
            return {
                persistId: d.persistId
            };
        }
    }
    return {
        persistId
    };
}
async function uze(e, i) {
    let n = et(e);
    let pendingHandoverReads = ee().pendingHandoverReads;
    let d = pendingHandoverReads.get(n);
    if (d === undefined) {
        return;
    }
    if (createHash("sha256").update(i).digest("hex") !== d.contentHash) {
        pendingHandoverReads.delete(n);
        return;
    }
    let r = await Wv(n).catch(()=>{});
    if (r !== undefined) {
        d.mtimeMs = r;
    }
}
function N(e, i, n) {
    for (let [t, d] of ee().pendingHandoverReads){
        if (d.slug === i && (n === undefined || d.ver === n) && d.handedTo.has(e) && !d.completedBy.has(e) && !d.unrecordableBy.has(e)) {
            return [
                t,
                d
            ];
        }
    }
}
function vWt(e, i, n) {
    return N(e ?? "main", i, n) !== undefined;
}
function B(e, i, n, t = false) {
    let d = e.agentId ?? "main";
    let r = N(d, i, n);
    if (r === undefined) {
        return;
    }
    let o = r[1];
    if (G(o, e) || !t && _(e, i, o.ver)) {
        return undefined;
    }
    return r;
}
function lQn(e, i, n, { ignoreHold = false } = {}) {
    let d = B(e, i, n, ignoreHold);
    if (d === undefined) {
        return undefined;
    }
    return T(d[0], d[1], e.agentId);
}
async function uGr(e, i, n) {
    let t = B(e, i, n);
    if (t === undefined) {
        return;
    }
    let [d, r] = t;
    let file;
    try {
        file = await Wv(d) === r.mtimeMs ? "intact" : "changed";
    } catch (error) {
        file = z(error) ? "changed" : "unknown";
    }
    return {
        ...T(d, r, e.agentId),
        file
    };
}
function T(path, i, agentId) {
    return {
        path,
        slug: i.slug,
        ver: i.ver,
        lines: i.requiredLines,
        unterminated: i.unterminated,
        unread: D(i.linesReturned.get(agentId ?? "main") ?? [], i.requiredLines)
    };
}
function pGr(e, i, n) {
    let t = B(e, i, n);
    return t !== undefined && j(t[1], e.agentId, e.agentId ?? "main") === undefined;
}
function fGr(e, i, n, t) {
    B(e, i, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t);
}
function cQn({ lines, unterminated, unread }) {
    let t = unread.reduce((acc, [r, o])=>acc + o - r + 1, 0);
    return `${lines} ${I(lines, "line")}` + (unterminated ? `; the last has no trailing newline, so \`wc -l\` reports ${lines - 1} \u2014 Read through line ${lines} and leave the file as it is` : "") + (t > 0 && t < lines ? `; you have not yet Read ${I(t, "line")} ${unread.map(([d, r])=>{
        if (d === r) {
            return `${d}`;
        }
        return `${d}-${r}`;
    }).join(", ")}` : "");
}
function pze(e, i, n, t) {
    let d = lQn(e, i, n, t);
    if (d === undefined) {
        return "";
    }
    return ` (${cQn(d)})`;
}
function D(e, requiredLines) {
    let n = [];
    let t = 0;
    for (let [d, r] of M(e)){
        if (d > t) {
            n.push([
                t + 1,
                Math.min(d, requiredLines)
            ]);
        }
        t = Math.max(t, r);
        if (t >= requiredLines) {
            break;
        }
    }
    if (t < requiredLines) {
        n.push([
            t + 1,
            requiredLines
        ]);
    }
    return n;
}
async function mGr(e, i) {
    ee().pendingHandoverReads.delete(et(e));
    Wls(i, e);
    await unlink(e).catch(()=>{});
}
const L = {
    artifactRead: undefined,
    remaining: undefined,
    commit: ()=>{}
};
async function Ajs(e, i, messageId, t) {
    try {
        let d = ee().pendingHandoverReads;
        let r = d.get(e);
        let o = i.agentId ?? "main";
        if (r === undefined || messageId === undefined || t.lineCount <= 0 || r.completedBy.has(o)) {
            return L;
        }
        if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines) {
            f("artifact_handover_read", "file_changed");
            return L;
        }
        if (V(r, e, i)) {
            return L;
        }
        let range = [
            t.firstLine,
            t.firstLine + t.lineCount
        ];
        let h = await Y(e, r.bytes, r.contentHash);
        if (h === "changed") {
            d.delete(e);
            f("artifact_handover_read", "file_changed");
            return L;
        }
        if (h === "unreadable") {
            f("artifact_handover_read", "file_unreadable");
        }
        let l = h === "holds";
        let p = (r.linesPrepared.get(o) ?? []).filter((a)=>a.messageId === messageId);
        let C = M([
            ...r.linesReturned.get(o) ?? [],
            ...p.map((a)=>a.range),
            range
        ]);
        let P = E(C, r.requiredLines);
        let y = {
            messageId,
            range
        };
        r.linesPrepared.set(o, [
            ...p,
            y
        ]);
        let commit = ()=>{
            try {
                let a = r.linesPrepared.get(o) ?? [];
                if (d.get(e) !== r || r.completedBy.has(o) || !a.includes(y)) {
                    return;
                }
                let H = a.filter((m)=>m !== y);
                if (H.length > 0) {
                    r.linesPrepared.set(o, H);
                } else {
                    r.linesPrepared.delete(o);
                }
                let v = M([
                    ...r.linesReturned.get(o) ?? [],
                    range
                ]);
                if (!l || !E(v, r.requiredLines)) {
                    r.linesReturned.set(o, v);
                    return;
                }
                r.linesReturned.delete(o);
                r.completedBy.add(o);
                if (Q(r, e, i, messageId, o)) {
                    return {
                        slug: r.slug,
                        ver: r.ver
                    };
                }
                return undefined;
            } catch (error) {
                c(error);
                return;
            }
        };
        let b = !r.unrecordableBy.has(o);
        let R = b && r.handedTo.has(o) && !_(i, r.slug, r.ver);
        return {
            artifactRead: P && l && b ? {
                slug: r.slug,
                ver: r.ver
            } : undefined,
            remaining: P || !R ? undefined : {
                ...T(e, r, i.agentId),
                unread: D(C, r.requiredLines)
            },
            commit
        };
    } catch (error) {
        c(error);
        return L;
    }
}
function G(e, i) {
    let ver = i.getArtifactReadObservation(e.slug).ver;
    return ver !== undefined && ver !== e.ver && (cL(ver, e.ver) ?? 0) > 0;
}
function V(e, i, n) {
    if (G(e, n)) {
        ee().pendingHandoverReads.delete(i);
        f("artifact_handover_read", "superseded");
        return true;
    }
    return false;
}
function M(e) {
    let i = e.map((t)=>[
            t[0],
            t[1]
        ]).sort((t, d)=>t[0] - d[0]);
    let n = [];
    for (let t of i){
        let d = n.at(-1);
        if (d !== undefined && t[0] <= d[1]) {
            d[1] = Math.max(d[1], t[1]);
        } else {
            n.push(t);
        }
    }
    return n;
}
function E([n], requiredLines) {
    return n !== undefined && n[0] <= 0 && n[1] >= requiredLines;
}
function j(e, agentId, n) {
    let t = ee().refusedPublishBodies.get(Z$(agentId, e.slug));
    let d = e.confirmsResendFor.get(n);
    if (d !== undefined && (t === undefined || t.batch !== d)) {
        return undefined;
    }
    return t;
}
function Q(e, i, n, messageId, d) {
    if (V(e, i, n)) {
        return false;
    }
    let r = j(e, n.agentId, d);
    let o = r?.observedFrom;
    try {
        n.setArtifactReadVersion(e.slug, e.ver, BU(n.agentId, messageId));
    } finally{
        if (r !== undefined) {
            if (o === undefined) {
                delete r.observedFrom;
            } else {
                r.observedFrom = o;
            }
        }
    }
    if (eae(n.getArtifactReadObservation(e.slug), e.ver, d)) {
        g("artifact_handover_read");
        return true;
    }
    e.unrecordableBy.add(d);
    f("artifact_handover_read", "seed_not_persisted");
    return false;
}
async function Y(e, bytes, contentHash) {
    try {
        if ((await stat(e)).size === bytes && createHash("sha256").update(await readFile(e)).digest("hex") === contentHash) {
            return "holds";
        }
        return "changed";
    } catch (error) {
        if (z(error)) {
            return "changed";
        }
        return "unreadable";
    }
}
export { eae, aQn, i_t, wWt, S7e, N_n, uze, vWt, lQn, uGr, pGr, fGr, cQn, pze, mGr, Ajs };
