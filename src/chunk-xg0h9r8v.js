import { _on } from "/$bunfs/root/chunk-etbngzss.js";
import { Ln, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Lpe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { kS, gq, S0, BTo, jTo } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { pH, wFe, SAs, tjn, wAs, vAs } from "/$bunfs/root/chunk-k3tkc302.js";
import { N_, q0e } from "/$bunfs/root/chunk-ba34fvgp.js";
import { Pc } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { Vm } from "/$bunfs/root/chunk-c7x4m87m.js";
import { basename, dirname, join } from "path";
const Yrt = "https://claude.com/claude-code";
const Mis = "https://claude.ai";
function X(e, n) {
    return e?.includes("_staging_") === true || n?.includes("staging") === true;
}
function cpr(e, n) {
    return e?.includes("_local_") === true || n?.includes("localhost") === true;
}
function VTt(e, n) {
    if (cpr(e, n)) {
        return "http://localhost:4000";
    }
    if (X(e, n)) {
        return "https://claude-ai.staging.ant.dev";
    }
    return "https://claude.ai";
}
function Fc(e, n, r) {
    let { toCompatSessionId } = import.meta.require("/$bunfs/root/chunk-n6ywpg0x.js");
    let a = toCompatSessionId(e);
    let l = `${VTt(a, n)}/code/${a}`;
    if (r) {
        return `${l}?${new URLSearchParams(r)}`;
    }
    return l;
}
const r5 = "<persisted-output>";
const qTt = "</persisted-output>";
const dpr = "<truncated-output>";
const Zno = "</truncated-output>";
const Y = "[Old tool result content cleared]";
const J = "tengu_velvet_ibis";
function Fne(e, n, r = pH, s = false) {
    if (!Number.isFinite(n)) {
        return n;
    }
    if (s) {
        return Math.min(n, r);
    }
    let o = k(J, {})?.[e];
    if (typeof o === "number" && Number.isFinite(o) && o > 0) {
        return o;
    }
    return Math.min(n, r);
}
const nAe = 2000;
const error = "tool result was not saved";
function rAe(e, n, r) {
    return join(e, `${n}.${r ? "json" : "txt"}`);
}
async function _4(e, n, r, s, a = wAs) {
    let isJson = Array.isArray(e);
    if (isJson) {
        if (e.some((g)=>!Pc(g) || g.type !== "text")) {
            return {
                error: "Cannot persist tool results containing non-text content"
            };
        }
    }
    let l = N_();
    if (l !== undefined) {
        let p = Math.min(a, l.maxBytes);
        let g;
        let c;
        let R;
        try {
            g = isJson ? _(e, null, 2) : e;
            c = Lpe(g, p);
            R = Buffer.from(c);
        } catch  {
            return {
                error
            };
        }
        let A = await q0e(l, {
            leafName: basename(rAe(r, n, isJson)),
            data: R
        });
        if (A === null) {
            return {
                error
            };
        }
        let { preview: preview_1, hasMore: hasMore_1 } = Xrt(c, nAe);
        return {
            filepath: A.path,
            originalSize: g.length,
            isJson,
            preview: preview_1,
            hasMore: hasMore_1,
            truncatedAtBytes: c === g ? undefined : p
        };
    }
    await S0(r, s);
    let filepath = rAe(r, n, isJson);
    let h;
    let f;
    try {
        h = isJson ? _(e, null, 2) : e;
        f = Lpe(h, a);
    } catch (err) {
        let g = x(W(err));
        t(`Failed to persist tool result to ${filepath}: ${g}`, {
            level: "error"
        });
        return {
            error: g
        };
    }
    let truncatedAtBytes = f === h ? undefined : a;
    let T = j() && s !== undefined ? gq(dirname(filepath), basename(filepath)) : undefined;
    if (j() && s !== undefined && T !== undefined) {
        let p = await s.write(T, f, {
            precondition: {
                type: "ifAbsent"
            },
            mode: 438 & ~process.umask()
        });
        if (!p.ok && p.error.code !== "AlreadyExists") {
            let g = ie(p.error, filepath);
            t(`Failed to persist tool result to ${filepath}: ${g}`, {
                level: "error"
            });
            return {
                error: g
            };
        }
        if (p.ok) {
            t(`Persisted tool result to ${filepath} (${Qt(f.length)})`);
        }
    } else {
        let p = mn();
        try {
            await BTo(dirname(filepath), p);
            await jTo(filepath, p);
            await p.writeExclusive(filepath, f);
            t(`Persisted tool result to ${filepath} (${Qt(f.length)})`);
        } catch (err) {
            if (v(err) !== "EEXIST") {
                t(`Failed to persist tool result to ${filepath}: ${x(W(err))}`, {
                    level: "error"
                });
                return {
                    error: x(W(err))
                };
            }
            let c;
            try {
                c = await p.lstat(filepath);
            } catch  {
                return {
                    error: "tool result path could not be checked; not persisted"
                };
            }
            if (c?.isSymbolicLink) {
                return {
                    error: "tool result path is a link; not persisted"
                };
            }
            if (c?.isFile !== true) {
                return {
                    error: "tool result path is not a regular file; not persisted"
                };
            }
            if (c.nlink > 1) {
                return {
                    error: "tool result path has another name; not persisted"
                };
            }
        }
    }
    let { preview, hasMore } = Xrt(f, nAe);
    return {
        filepath,
        originalSize: h.length,
        isJson,
        preview,
        hasMore,
        truncatedAtBytes
    };
}
function oAe(e) {
    let n = `${r5}
`;
    n += e.truncatedAtBytes === undefined ? `Output too large (${Qt(e.originalSize)}). Full output saved to: ${e.filepath}

` : `Output exceeded the ${Qt(e.truncatedAtBytes)} persist limit; only the first ${Qt(e.truncatedAtBytes)} were saved to: ${e.filepath}

`;
    n += `Preview (first ${Qt(nAe)}):
`;
    n += e.preview;
    n += e.hasMore ? `
...
` : `
`;
    n += qTt;
    return n;
}
const V = "1023 bytes";
function upr(e, n) {
    if (Array.isArray(e) && e.some((l)=>!Pc(l) || l.type !== "text")) {
        return null;
    }
    let r = typeof e === "string" ? e : e.flatMap((l)=>{
        if (l.type === "text" && "text" in l && typeof l.text === "string") {
            return [
                l.text
            ];
        }
        return [];
    }).join(`
`);
    let s = Qt(r.length);
    let a = Math.max(0, n - O(s, V, "").length);
    let o = ne(r, Xrt(r, a).preview.length);
    if (o.length === r.length) {
        return null;
    }
    return {
        message: O(s, Qt(o.length), o),
        originalSize: r.length
    };
}
function O(e, n, r) {
    return `${dpr}
Output too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.

${r}
${Zno}`;
}
async function Lqe(e, n, r, s, a) {
    return sAe(e.mapToolResultToToolResultBlockParam(n, r), e, s, a);
}
async function sAe(e, n, r, s) {
    return Z(e, n.name, r, Fne(n.name, n.maxResultSizeChars, n.persistenceThresholdCeiling, n.skipAggregateToolResultBudget === true), s);
}
function ero(e) {
    if (!e) {
        return true;
    }
    if (typeof e === "string") {
        return e.trim() === "";
    }
    if (!Array.isArray(e)) {
        return false;
    }
    if (e.length === 0) {
        return true;
    }
    return e.every((n)=>Pc(n) && n.type === "text" && "text" in n && (typeof n.text !== "string" || n.text.trim() === ""));
}
async function Z(e, name, r, s, a) {
    let e_content = e.content;
    if (ero(e_content)) {
        i("tengu_tool_empty_result", {
            toolName: Ln(name)
        });
        return {
            ...e,
            content: `(${name} completed with no output)`
        };
    }
    if (!e_content) {
        return e;
    }
    let thresholdUsed = s ?? SAs;
    if (!tro(e_content, thresholdUsed)) {
        return e;
    }
    let u = await _4(e_content, e.tool_use_id, r, a);
    if (b4(u)) {
        if (N_() !== undefined) {
            let f = upr(e_content, thresholdUsed);
            if (f === null) {
                return e;
            }
            i("tengu_tool_result_persisted", {
                toolName: Ln(name),
                originalSizeBytes: f.originalSize,
                persistedSizeBytes: f.message.length,
                estimatedOriginalTokens: Math.ceil(f.originalSize / wFe),
                estimatedPersistedTokens: Math.ceil(f.message.length / wFe),
                thresholdUsed,
                stored: false
            });
            return {
                ...e,
                content: f.message
            };
        }
        return e;
    }
    let h = oAe(u);
    i("tengu_tool_result_persisted", {
        toolName: Ln(name),
        originalSizeBytes: u.originalSize,
        persistedSizeBytes: h.length,
        estimatedOriginalTokens: Math.ceil(u.originalSize / wFe),
        estimatedPersistedTokens: Math.ceil(h.length / wFe),
        thresholdUsed,
        truncatedAtCap: u.truncatedAtBytes !== undefined
    });
    return {
        ...e,
        content: h
    };
}
function Xrt(preview, n) {
    if (preview.length <= n) {
        return {
            preview,
            hasMore: false
        };
    }
    let s = preview.slice(0, n).lastIndexOf(`
`);
    let a = s > n * 0.5 ? s : n;
    return {
        preview: preview.slice(0, a),
        hasMore: true
    };
}
function b4(e) {
    return "error" in e;
}
function zIn() {
    return {
        seenIds: new Set,
        replacements: new Map
    };
}
function His(e) {
    return {
        seenIds: new Set(e.seenIds),
        replacements: new Map(e.replacements)
    };
}
function Dis(e, n) {
    if (!k("tengu_hawthorn_steeple", false)) {
        return;
    }
    if (e) {
        return ppr(e, n ?? []);
    }
    return zIn();
}
function L(content) {
    if (typeof content !== "string") {
        return false;
    }
    let n = content.startsWith(_on) ? content.slice(_on.length) : content;
    return n.startsWith(r5) || n === Y;
}
function Lis(e, n) {
    for(let r = e.length - 1; r >= 0; r--){
        let s = e[r];
        if (s.type !== "user" || s.isVirtual || !Array.isArray(s.message.content)) {
            continue;
        }
        for (let a of s.message.content){
            if (a.type === "tool_result" && a.tool_use_id === n) {
                let { content } = a;
                return !a.is_error && !!content && !L(content) && !(typeof content === "string" && content.startsWith(dpr));
            }
        }
    }
    return false;
}
function tro(e, n) {
    return !N(e) && F(e) > n;
}
function N(e) {
    return Array.isArray(e) && e.some((n)=>Pc(n) && (n.type === "image" || n.type === "document"));
}
function F(e) {
    if (typeof e === "string") {
        return e.length;
    }
    if (!Array.isArray(e)) {
        return 0;
    }
    return e.reduce((acc, item)=>acc + (Pc(item) && item.type === "text" && "text" in item && typeof item.text === "string" ? item.text.length : 0), 0);
}
function q(messages) {
    let n = new Map;
    for (let r of messages){
        if (r.type !== "assistant") {
            continue;
        }
        let s = r.message.content;
        if (!Array.isArray(s)) {
            continue;
        }
        for (let a of s){
            if (Pc(a) && a.type === "tool_use") {
                n.set(a.id, a.name);
            }
        }
    }
    return n;
}
function Q(e) {
    if (e.type !== "user" || !Array.isArray(e.message.content)) {
        return [];
    }
    return e.message.content.flatMap((n)=>{
        if (!Pc(n) || n.type !== "tool_result" || !n.content) {
            return [];
        }
        if (L(n.content)) {
            return [];
        }
        if (N(n.content)) {
            return [];
        }
        return [
            {
                toolUseId: n.tool_use_id,
                content: n.content,
                size: F(n.content)
            }
        ];
    });
}
function D(e) {
    let n = [];
    let r = [];
    let s = ()=>{
        if (r.length > 0) {
            n.push(r);
        }
        r = [];
    };
    let a = new Set;
    for (let o of e){
        if (o.type === "user") {
            r.push(...Q(o));
        } else if (o.type === "assistant") {
            if (!a.has(o.message.id)) {
                s();
                a.add(o.message.id);
            }
        }
    }
    s();
    return n;
}
function ee(e, n) {
    return e.reduce((acc, item)=>{
        let replacement = n.replacements.get(item.toolUseId);
        if (replacement !== undefined) {
            acc.mustReapply.push({
                ...item,
                replacement
            });
        } else if (n.seenIds.has(item.toolUseId)) {
            acc.frozen.push(item);
        } else {
            acc.fresh.push(item);
        }
        return acc;
    }, {
        mustReapply: [],
        frozen: [],
        fresh: []
    });
}
function te(e, n, r) {
    let s = [
        ...e
    ].sort((l, u)=>u.size - l.size);
    let a = [];
    let o = n + e.reduce((acc, item)=>acc + item.size, 0);
    for (let l of s){
        if (o <= r) {
            break;
        }
        a.push(l);
        o -= l.size;
    }
    return a;
}
function re(messages, n) {
    return messages.map((r)=>{
        if (r.type !== "user" || !Array.isArray(r.message.content)) {
            return r;
        }
        let content = r.message.content;
        if (!content.some((o)=>Pc(o) && o.type === "tool_result" && n.has(o.tool_use_id))) {
            return r;
        }
        return {
            ...r,
            message: {
                ...r.message,
                content: content.map((o)=>{
                    if (!Pc(o) || o.type !== "tool_result") {
                        return o;
                    }
                    let l = n.get(o.tool_use_id);
                    if (l === undefined) {
                        return o;
                    }
                    return {
                        ...o,
                        content: l
                    };
                })
            }
        };
    });
}
async function oe(e, n, r) {
    let s = await _4(e.content, e.toolUseId, n, r);
    if (b4(s)) {
        return null;
    }
    return {
        content: oAe(s),
        originalSize: s.originalSize,
        truncatedAtCap: s.truncatedAtBytes !== undefined
    };
}
function Nis(e) {
    let n = new Set;
    for (let r of e){
        if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === true) {
            n.add(r.name);
            for (let s of r.aliases ?? []){
                n.add(s);
            }
        }
    }
    return n;
}
async function se(messages, n, r, s, a = new Set) {
    let o = D(messages);
    let l = a.size > 0 ? q(messages) : undefined;
    let u = (toolUseId)=>l !== undefined && a.has(l.get(toolUseId) ?? "");
    let h = tjn;
    let f = new Map;
    let S = [];
    let reapplied = 0;
    let messagesOverBudget = 0;
    for (let c of o){
        let { mustReapply, frozen, fresh } = ee(c, n);
        mustReapply.forEach((m)=>f.set(m.toolUseId, m.replacement));
        reapplied += mustReapply.length;
        if (fresh.length === 0) {
            c.forEach((m)=>n.seenIds.add(m.toolUseId));
            continue;
        }
        fresh.filter((m)=>u(m.toolUseId)).forEach((m)=>n.seenIds.add(m.toolUseId));
        let U = fresh.filter((m)=>!u(m.toolUseId));
        let M = frozen.reduce((acc, item)=>acc + (u(item.toolUseId) ? 0 : item.size), 0);
        let H = U.reduce((acc, item)=>acc + item.size, 0);
        let P = M + H > h ? te(U, M, h) : [];
        let G = new Set(P.map((m)=>m.toolUseId));
        c.filter((m)=>!G.has(m.toolUseId)).forEach((m)=>n.seenIds.add(m.toolUseId));
        if (P.length === 0) {
            continue;
        }
        messagesOverBudget++;
        S.push(...P);
    }
    if (f.size === 0 && S.length === 0) {
        return {
            messages,
            newlyReplaced: []
        };
    }
    let I = await Promise.all(S.map(async (c)=>[
            c,
            await oe(c, r, s)
        ]));
    let newlyReplaced = [];
    let replacedSizeBytes = 0;
    for (let [c, R] of I){
        n.seenIds.add(c.toolUseId);
        if (R === null) {
            continue;
        }
        replacedSizeBytes += c.size;
        f.set(c.toolUseId, R.content);
        n.replacements.set(c.toolUseId, R.content);
        newlyReplaced.push({
            kind: "tool-result",
            toolUseId: c.toolUseId,
            replacement: R.content
        });
        i("tengu_tool_result_persisted_message_budget", {
            originalSizeBytes: R.originalSize,
            persistedSizeBytes: R.content.length,
            estimatedOriginalTokens: Math.ceil(R.originalSize / wFe),
            estimatedPersistedTokens: Math.ceil(R.content.length / wFe),
            truncatedAtCap: R.truncatedAtCap
        });
    }
    if (f.size === 0) {
        return {
            messages,
            newlyReplaced: []
        };
    }
    if (newlyReplaced.length > 0) {
        t(`Per-message budget: persisted ${newlyReplaced.length} tool results across ${messagesOverBudget} over-budget message(s), shed ~${Qt(replacedSizeBytes)}, ${reapplied} re-applied`);
        i("tengu_message_level_tool_result_budget_enforced", {
            resultsPersisted: newlyReplaced.length,
            messagesOverBudget,
            replacedSizeBytes,
            reapplied
        });
    }
    return {
        messages: re(messages, f),
        newlyReplaced
    };
}
async function $is(e, n, r, s, a, o) {
    if (!n) {
        return e;
    }
    let l = await se(e, n, r, o, a);
    if (l.newlyReplaced.length > 0) {
        s?.(l.newlyReplaced);
    }
    return l.messages;
}
function ppr(e, n, r) {
    let s = zIn();
    let a = new Set(D(e).flat().map((o)=>o.toolUseId));
    for (let o of a){
        s.seenIds.add(o);
    }
    for (let o of n){
        if (o.kind === "tool-result" && a.has(o.toolUseId)) {
            s.replacements.set(o.toolUseId, o.replacement);
        }
    }
    if (r) {
        for (let [o, l] of r){
            if (a.has(o) && !s.replacements.has(o)) {
                s.replacements.set(o, l);
            }
        }
    }
    return s;
}
function GIn(e, n, r) {
    if (!e) {
        return;
    }
    return ppr(n, r, e.replacements);
}
function ie(error, filepath) {
    let r = Vm(error);
    if (r === undefined) {
        return `storage write failed: ${error.code}`;
    }
    let s = Error("storage write failed");
    s.code = r;
    s.path = filepath;
    return x(s);
}
function x(e) {
    let n = e;
    if (n.code) {
        switch(n.code){
            case "ENOENT":
                return `Directory not found: ${n.path ?? "unknown path"}`;
            case "EACCES":
                return `Permission denied: ${n.path ?? "unknown path"}`;
            case "ENOSPC":
                return "No space left on device";
            case "EROFS":
                return "Read-only file system";
            case "EMFILE":
                return "Too many open files";
            case "EEXIST":
                return `File already exists: ${n.path ?? "unknown path"}`;
            default:
                return `${n.code}: ${n.message}`;
        }
    }
    return e.message;
}
async function dce(e, n, r, { threshold = vAs, storageV5 } = {}) {
    if (e.length <= threshold) {
        return e;
    }
    let o = await _4(e, `hook-${n}-${r}`, kS(), storageV5);
    if (b4(o)) {
        if (N_() !== undefined) {
            return upr(e, threshold)?.message ?? e;
        }
        i("tengu_hook_output_persisted", {
            source: d(r),
            originalSizeBytes: e.length,
            persistedSizeBytes: 0,
            truncatedFallback: true
        });
        return `${ne(e, threshold)}

[Hook ${r} truncated at ${threshold} chars \u2014 persist-to-disk failed: ${o.error}]`;
    }
    let l = oAe(o);
    i("tengu_hook_output_persisted", {
        source: d(r),
        originalSizeBytes: o.originalSize,
        persistedSizeBytes: l.length,
        truncatedFallback: false,
        truncatedAtCap: o.truncatedAtBytes !== undefined
    });
    return l;
}
function VIn(e, n) {
    return n.startsWith(r5) && n.endsWith(qTt) && n !== e;
}
export { Yrt, Mis, cpr, VTt, Fc, r5, qTt, dpr, Zno, Fne, nAe, rAe, _4, oAe, upr, Lqe, sAe, ero, Xrt, b4, zIn, His, Dis, Lis, tro, Nis, $is, ppr, GIn, dce, VIn };
